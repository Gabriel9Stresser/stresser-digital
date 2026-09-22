"use client";

import Link from "next/link";
import { useEffect, useId, useState, type FormEvent } from "react";
import {
  BUSINESS_TYPES,
  BUY_STEPS,
  FAQ,
  PRODUCTS,
  PROOF,
  SITE,
  WA,
  WA_CATALOG,
  WHOLESALE,
  isValidBrPhone,
  waLink,
  NAV,
} from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.008 2.898a9.825 9.825 0 012.893 7.004c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function DoceriaRebekaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState("");
  const formId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const locked = menuOpen || !!lightbox;
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen, lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    setFormStatus("loading");

    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "").trim();
    const empresa = String(fd.get("empresa") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const whatsapp = String(fd.get("whatsapp") || "").trim();
    const tipo = String(fd.get("tipo") || "").trim();
    const mensagem = String(fd.get("mensagem") || "").trim();

    if (!nome || !email || !mensagem) {
      setFormStatus("error");
      setFormError("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (whatsapp && !isValidBrPhone(whatsapp)) {
      setFormStatus("error");
      setFormError("Informe um WhatsApp válido com DDD (ex.: 12981285713).");
      return;
    }
    if (!tipo) {
      setFormStatus("error");
      setFormError("Selecione o tipo de negócio.");
      return;
    }

    const payload = { nome, empresa, email, whatsapp, tipo, mensagem };
    try {
      localStorage.setItem("doceria-rebeka-lead", JSON.stringify({ ...payload, at: Date.now() }));
    } catch {
      /* ignore */
    }

    try {
      await fetch("/api/doceria-rebeka/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* WhatsApp segue como canal principal */
    }

    const tipoLabel = BUSINESS_TYPES.find((t) => t.value === tipo)?.label || tipo;
    const text = [
      "Olá, vim pelo site e quero falar com o comercial.",
      `Nome: ${nome}`,
      empresa && `Empresa: ${empresa}`,
      `Tipo: ${tipoLabel}`,
      `E-mail: ${email}`,
      whatsapp && `WhatsApp: ${whatsapp}`,
      `Mensagem: ${mensagem}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setFormStatus("success");
    e.currentTarget.reset();
  }

  return (
    <div className="rbk-clone min-h-screen bg-background">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 min-w-0">
            <img src={SITE.logo} alt="" className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-display text-base sm:text-xl leading-tight text-navy">
                Doceria <span className="text-primary">da Rebeka</span>
              </span>
              <span className="hidden xs:block sm:block text-[10px] sm:text-sm font-medium text-navy/70 mt-0.5 tracking-wide truncate">
                A maior fábrica de pudim do mundo é joseense
              </span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9" aria-label="Principal">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-navy/80 hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary text-sm">
            Fale com o comercial
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
        {menuOpen && (
          <>
            <button type="button" className="rbk-menu-backdrop lg:hidden" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
            <div className="lg:hidden bg-background border-t border-border relative z-[60]">
              <div className="container-editorial py-6 flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-navy hover:text-primary rounded-xl px-3 py-3"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 self-start">
                  Fale com o comercial
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
          <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 animate-rise">
              <span className="eyebrow">Feito em São José dos Campos/SP · Desde sempre com amor</span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-navy">
                O doce que <em className="not-italic text-primary">conquista corações</em> em todo o Brasil.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Da nossa produção em São José dos Campos/SP para milhares de pontos de venda, a Doceria da Rebeka une sabor
                caseiro, qualidade e escala para encantar consumidores todos os dias.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Fale com o comercial
                </a>
                <a href="#produtos" className="btn-outline">
                  Conheça nossos produtos
                </a>
              </div>
              <p className="mt-10 text-sm text-navy/70 max-w-md">
                <span className="font-semibold text-navy">Pudim e brigadeirão</span> feitos com amor e perfeição, presentes
                em mais de 11.000 pontos de venda pelo país.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-navy/80">
                <span className="rounded-full bg-cream border border-border px-3 py-1.5">{SITE.hours}</span>
                <span className="rounded-full bg-cream border border-border px-3 py-1.5">Atacado nacional</span>
              </div>
            </div>
            <div className="lg:col-span-6 relative animate-rise" style={{ animationDelay: "150ms" }}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(30,43,94,0.35)]">
                <img
                  src={SITE.heroPhoto}
                  alt="Pudim cremoso da Doceria da Rebeka com calda dourada"
                  className="h-full w-full object-cover"
                  width={667}
                  height={1000}
                  fetchPriority="high"
                />
              </div>
              <div className="hidden md:flex absolute -left-8 bottom-10 w-56 flex-col rounded-2xl bg-card p-5 shadow-xl border border-border">
                <span className="text-3xl font-display text-primary">+11 mil</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Pontos de venda no Brasil</span>
              </div>
              <div className="hidden md:block absolute -right-6 -top-6 h-32 w-32 rounded-full bg-pudim/60 blur-3xl -z-10" />
            </div>
          </div>
        </section>

        {/* Propósito */}
        <section className="py-20 md:py-24">
          <div className="container-editorial max-w-3xl text-center">
            <span className="eyebrow">Nosso propósito</span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">
              Aqui cada doce é feito com <em className="not-italic text-primary">amor e perfeição</em>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Na Doceria da Rebeka, cada receita carrega carinho, tradição e cuidado em cada detalhe. Nosso compromisso é
              transformar momentos simples em experiências inesquecíveis, levando pudins e brigadeirões de qualidade para
              grandes mercados e consumidores de todo o Brasil.
            </p>
          </div>
        </section>

        {/* História */}
        <section id="historia" className="py-20 md:py-28 bg-cream/60">
          <div className="container-editorial grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(30,43,94,0.3)]">
                <img
                  src={SITE.aboutPhoto}
                  alt="Pudim artesanal da Doceria da Rebeka"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={1500}
                />
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 aspect-square w-52 overflow-hidden rounded-2xl border-8 border-background shadow-xl">
                <img src={SITE.gallery[1].src} alt={SITE.gallery[1].alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow">Nossa história</span>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">
                Uma história feita de sabor, cuidado e confiança.
              </h2>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
                A Doceria da Rebeka nasceu com o propósito de entregar doces que despertam memórias afetivas e conquistam
                pela primeira colherada. Com sede em São José dos Campos/SP, somos especialistas na produção de pudins e
                brigadeirões, atendendo exclusivamente no atacado com padrão de qualidade, praticidade e consistência.
              </p>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Mais do que doces, entregamos parceria, confiança e produtos preparados para se destacar nas gôndolas,
                vitrines e pontos de venda.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-navy/80">
                <span className="h-px w-10 bg-primary" />
                <span className="font-medium">Sede em São José dos Campos, São Paulo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Prova social / autoridade (única faixa navy densa) */}
        <section className="py-20 md:py-24 bg-navy text-white" aria-label="Presença nacional">
          <div className="container-editorial">
            <div className="max-w-2xl">
              <span className="eyebrow text-pudim">Autoridade</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-white">Uma marca com presença nacional.</h2>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {PROOF.map((item) => (
                <div key={item.title} className="border-t border-white/15 pt-6">
                  <div className="font-display text-2xl md:text-3xl text-pudim leading-tight">{item.title}</div>
                  <p className="mt-3 text-sm md:text-base text-white/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="produtos" className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
              <div>
                <span className="eyebrow">Nossos produtos</span>
                <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                  Receitas que criam memórias, da primeira à última colherada.
                </h2>
              </div>
              <p className="text-muted-foreground md:max-w-sm">
                Dois campeões desenvolvidos para performar no ponto de venda e encantar quem prova.
              </p>
            </div>
            <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-12">
              {PRODUCTS.map((p) => (
                <article
                  key={p.id}
                  id={p.id}
                  className="group flex flex-col rounded-[2rem] bg-card border border-border overflow-hidden shadow-[0_18px_50px_-30px_rgba(30,43,94,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(233,30,99,0.35)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-cream">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      loading="lazy"
                      width={1200}
                      height={960}
                    />
                    <span className="absolute top-5 left-5 rounded-full bg-background/90 backdrop-blur px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col grow">
                    <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-3">
                      {p.specs.map((s) => (
                        <div key={s.label} className="rounded-xl bg-cream border border-border px-3 py-2.5">
                          <dt className="text-[10px] uppercase tracking-widest text-navy/50 font-semibold">{s.label}</dt>
                          <dd className="mt-0.5 text-sm font-semibold text-navy">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.points.map((point) => (
                        <li key={point} className="rounded-full bg-cream text-navy text-xs font-medium px-3 py-1.5 border border-border">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(p.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-8 self-start"
                    >
                      Pedir {p.name.split(" ")[0]} no WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como comprar */}
        <section id="como-comprar" className="py-20 md:py-24 bg-cream/60">
          <div className="container-editorial">
            <div className="max-w-2xl">
              <span className="eyebrow">Como comprar</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">Do contato ao abastecimento em 3 passos</h2>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {BUY_STEPS.map((s) => (
                <div key={s.step} className="rounded-2xl bg-card border border-border p-6 md:p-8">
                  <div className="font-display text-3xl text-primary">{s.step}</div>
                  <h3 className="mt-4 font-display text-xl text-navy">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Começar pelo WhatsApp
              </a>
              <Link href={SITE.catalogPath} className="btn-outline">
                Ver catálogo para imprimir
              </Link>
              <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Pedir catálogo no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Atacado */}
        <section id="atacado" className="py-20 md:py-28">
          <div className="container-editorial grid lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Atendimento B2B</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                Leve a Doceria da Rebeka para o seu mercado.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Atendemos mercados, redes varejistas e distribuidores que buscam produtos com excelente aceitação,
                apresentação atrativa e padrão de qualidade.
              </p>
              <div className="mt-6 space-y-2 text-sm text-navy/80">
                <p>
                  <strong className="text-navy">Horário:</strong> {SITE.hours}
                </p>
                <p>
                  <strong className="text-navy">Abrangência:</strong> {SITE.serviceArea}
                </p>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                Fale com o nosso comercial pelo WhatsApp
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {WHOLESALE.map((s) => (
                  <div
                    key={s.step}
                    className="group rounded-2xl bg-card border border-border p-6 flex items-start gap-4 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm">
                      {s.step}
                    </div>
                    <div>
                      <span className="font-medium text-navy leading-snug block">{s.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galeria + Instagram */}
        <section id="galeria" className="py-20 md:py-28 bg-cream/40">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="eyebrow">Galeria</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                Delícias que conquistam no olhar e no sabor.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Toque na foto para ampliar. Acompanhe também o Instagram {SITE.instagramHandle}.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {SITE.gallery.map((g, i) => (
                <button
                  key={g.src + g.alt}
                  type="button"
                  className={`group relative overflow-hidden rounded-2xl bg-cream text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                    i === 0 || i === 3 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5] lg:aspect-square"
                  }`}
                  onClick={() => setLightbox(g)}
                  aria-label={`Ampliar: ${g.alt}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                </button>
              ))}
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-10 inline-flex"
            >
              Ver no Instagram {SITE.instagramHandle}
            </a>
          </div>
        </section>

        {/* Qualidade (mais leve) */}
        <section className="py-16 md:py-20">
          <div className="container-editorial grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Qualidade</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
                Sabor caseiro com padrão profissional.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Cada produto segue padrão de produção para garantir textura, sabor, conservação e apresentação constante
                no ponto de venda.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                {["Textura", "Sabor", "Conservação"].map((label) => (
                  <div key={label} className="border-t-2 border-primary/30 pt-3">
                    <div className="text-xs text-muted-foreground">Padrão</div>
                    <div className="font-display text-lg text-navy">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] max-h-[480px] overflow-hidden rounded-[2rem] shadow-2xl mx-auto lg:ml-auto lg:mr-0 w-full max-w-md">
                <img
                  src={SITE.qualityPhoto}
                  alt="Detalhe da qualidade do pudim"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 md:py-28 bg-cream/60">
          <div className="container-editorial grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <span className="eyebrow">Contato</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">Fale com a Doceria da Rebeka.</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Quer levar nossos produtos para o seu mercado ou distribuidora? Fale com o time comercial.
              </p>
              <div className="mt-8 space-y-4 text-navy">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="border-l-2 border-primary/40 pl-4 group-hover:border-primary transition-colors">
                    <div className="text-xs uppercase tracking-widest text-primary font-semibold">WhatsApp</div>
                    <div className="mt-1 text-navy leading-snug">{SITE.phoneDisplay}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{SITE.hours}</div>
                  </div>
                </a>
                <a href={`mailto:${SITE.email}`} className="block group">
                  <div className="border-l-2 border-primary/40 pl-4 group-hover:border-primary transition-colors">
                    <div className="text-xs uppercase tracking-widest text-primary font-semibold">E-mail</div>
                    <div className="mt-1 text-navy leading-snug">{SITE.email}</div>
                  </div>
                </a>
                <div className="border-l-2 border-primary/40 pl-4">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">Endereço</div>
                  <div className="mt-1 text-navy leading-snug">
                    {SITE.address}, {SITE.addressDetail}, {SITE.city}, {SITE.cep}
                  </div>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Como chegar no Google Maps
                  </a>
                </div>
              </div>
              <iframe
                className="rbk-map mt-8 w-full min-h-[240px] rounded-2xl border border-border"
                title="Mapa da Doceria da Rebeka em São José dos Campos"
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="lg:col-span-7">
              <form
                id={formId}
                onSubmit={onSubmit}
                className="rounded-[2rem] bg-card border border-border p-8 md:p-10 shadow-[0_20px_50px_-30px_rgba(30,43,94,0.2)]"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor="nome">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      autoComplete="name"
                      className="rbk-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor="empresa">
                      Empresa
                    </label>
                    <input id="empresa" name="empresa" type="text" autoComplete="organization" className="rbk-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor="email">
                      E-mail
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="rbk-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor="whatsapp">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      placeholder="(12) 98128-5713"
                      autoComplete="tel"
                      className="rbk-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor="tipo">
                      Tipo de negócio
                    </label>
                    <select id="tipo" name="tipo" required className="rbk-input" defaultValue="">
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t.value || "empty"} value={t.value} disabled={t.value === ""}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor="mensagem">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="rbk-input"
                    placeholder="Conte um pouco sobre o seu negócio e o volume aproximado..."
                  />
                </div>

                {formStatus === "error" && (
                  <p className="mt-4 text-sm font-medium text-red-700" role="alert">
                    {formError}
                  </p>
                )}
                {formStatus === "success" && (
                  <p className="mt-4 text-sm font-medium text-emerald-700" role="status">
                    Pronto. Abrimos o WhatsApp com seus dados. Se não abriu, use o botão ao lado.
                  </p>
                )}

                <div className="mt-7 flex flex-wrap gap-3">
                  <button type="submit" className="btn-primary" disabled={formStatus === "loading"}>
                    {formStatus === "loading" ? "Enviando..." : "Enviar mensagem"}
                  </button>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Chamar no WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-20 md:py-28" aria-labelledby="faq-heading">
          <div className="container-editorial max-w-3xl">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 id="faq-heading" className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              Perguntas de mercados e distribuidores
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Respostas objetivas sobre atacado, produtos e contato comercial da Doceria da Rebeka em São José dos Campos.
            </p>
            <div className="mt-10 space-y-3">
              {FAQ.map((item) => (
                <details key={item.q} className="rbk-faq-item group rounded-2xl bg-card border border-border p-5 md:p-6">
                  <summary className="font-display text-lg md:text-xl text-navy cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="rbk-faq-plus text-primary shrink-0" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white/80">
        <div className="container-editorial py-16 md:py-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={SITE.logo} alt="" className="h-14 w-14 object-contain" />
              <span className="font-display text-xl text-white leading-tight">
                Doceria
                <br />
                <span className="text-pudim">da Rebeka</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-display text-lg text-white/90 italic">
              Aqui cada doce é feito com amor e perfeição!
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Navegação</div>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Contato</div>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed">
              <li>
                {SITE.address}
                <br />
                {SITE.addressDetail}
                <br />
                {SITE.city} · {SITE.cep}
              </li>
              <li>
                <a href={WA} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="text-white/60">{SITE.hours}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition"
              >
                Instagram
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition"
              >
                Facebook
              </a>
              <Link
                href={SITE.catalogPath}
                className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition"
              >
                Catálogo
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-editorial py-6 text-xs text-white/60 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Doceria da Rebeka. Todos os direitos reservados.</span>
            <span>São José dos Campos, São Paulo, Brasil</span>
          </div>
        </div>
      </footer>

      <a
        href={WA}
        className="rbk-wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp comercial"
      >
        <WhatsAppIcon />
      </a>

      {lightbox && (
        <div className="rbk-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt}>
          <button type="button" className="rbk-lightbox-backdrop" aria-label="Fechar" onClick={() => setLightbox(null)} />
          <div className="rbk-lightbox-inner">
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="rbk-lightbox-caption">{lightbox.alt}</p>
            <button type="button" className="rbk-lightbox-close" onClick={() => setLightbox(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
