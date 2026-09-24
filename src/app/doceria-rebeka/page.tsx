import Link from "next/link";
import {
  ARTICLES,
  BASE,
  PRODUCTS,
  PROOF,
  SITE,
  VIDEOS,
  WA,
  WA_CATALOG,
} from "./data";

export default function DoceriaRebekaHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
              <Link href={`${BASE}/produtos`} className="btn-outline">
                Conheça nossos produtos
              </Link>
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
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-16 md:py-20">
        <div className="container-editorial max-w-3xl text-center">
          <span className="eyebrow">Nosso propósito</span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">
            Aqui cada doce é feito com <em className="not-italic text-primary">amor e perfeição</em>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Na Doceria da Rebeka, cada receita carrega carinho, tradição e cuidado em cada detalhe. Levamos pudins e
            brigadeirões de qualidade para grandes mercados e consumidores de todo o Brasil.
          </p>
          <Link href={`${BASE}/quem-somos`} className="btn-outline mt-8 inline-flex">
            Conheça nossa história
          </Link>
        </div>
      </section>

      {/* Prova */}
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

      {/* Produtos teaser */}
      <section className="py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
            <div>
              <span className="eyebrow">Nossos produtos</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                Receitas que criam memórias, da primeira à última colherada.
              </h2>
            </div>
            <Link href={`${BASE}/produtos`} className="btn-outline self-start md:self-auto shrink-0">
              Ver todos os produtos
            </Link>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-12">
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={`${BASE}/produtos/${p.slug}`}
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
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl text-navy">{p.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                  <span className="mt-6 inline-block text-sm font-semibold text-primary group-hover:underline">
                    Ver detalhes
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo teaser */}
      <section className="py-20 md:py-24 bg-cream/60">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Assista</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">Bastidores e produto em movimento</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Vídeos da fábrica e da gôndola. Enquanto publicamos no YouTube, acompanhe o Instagram.
              </p>
            </div>
            <Link href={`${BASE}/galeria`} className="btn-outline shrink-0">
              Galeria e vídeos
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={v.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-video bg-navy/10">
                  <img src={v.thumb} alt="" className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg text-xl" aria-hidden>
                      ▶
                    </span>
                  </span>
                  <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy">
                    Em breve
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mundo Rebeka teaser */}
      <section className="py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Mundo Rebeka</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">Conhecimento para quem vende doce no atacado</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Dicas de gôndola, mix de produtos e bastidores da fábrica joseense.
              </p>
            </div>
            <Link href={`${BASE}/mundo-rebeka`} className="btn-outline shrink-0">
              Ver todos os artigos
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                href={`${BASE}/mundo-rebeka/${a.slug}`}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden bg-cream">
                  <img
                    src={a.cover}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{a.category}</span>
                  <h3 className="mt-2 font-display text-xl text-navy leading-snug group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA atacado */}
      <section className="py-20 md:py-24 bg-cream/60">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Atacado B2B</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              Leve a Doceria da Rebeka para o seu mercado.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Atendemos mercados, redes e distribuidores em todo o Brasil. Produto pronto para gôndola, comercial no
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Falar no WhatsApp
              </a>
              <Link href={`${BASE}/atacado`} className="btn-outline">
                Como comprar
              </Link>
              <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Pedir catálogo
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl mx-auto w-full max-w-md">
            <img src={SITE.qualityPhoto} alt="Detalhe da qualidade do pudim" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
