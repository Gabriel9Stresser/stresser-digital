"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FAQ, NAV, PRODUCTS, SITE, TRUST, WA, WHOLESALE } from "./data";
import { PreviewChrome } from "@/preview";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.008 2.898a9.825 9.825 0 012.893 7.004c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function DoceriaRebekaPreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={`rbk-root sd-preview-page${menuOpen ? " rbk-menu-open" : ""}`}>
      <PreviewChrome
        oldSiteHost="doceriadarebeka.com.br"
        compare={{
          headline: "Mais conversão B2B",
          headlineSub: "site atual bonito, comercial mais direto",
          metrics: [
            { id: "cta", label: "CTA WhatsApp comercial", old: 55, new: 98, unit: "/100" },
            { id: "mobile", label: "Mobile-first", old: 70, new: 96, unit: "/100" },
            { id: "seo", label: "SEO técnico + schema", old: 45, new: 96, unit: "/100" },
            { id: "b2b", label: "Clareza atacado", old: 60, new: 95, unit: "/100" },
          ],
          badges: [
            "Schema.org (FoodEstablishment + FAQ)",
            "WhatsApp flutuante + sticky",
            "Copy sem travessão",
            "Foco mercados e distribuidores",
          ],
        }}
      />

      <header className="rbk-header">
        <div className="rbk-header-inner">
          <button type="button" onClick={() => scrollTo("inicio")} aria-label="Início">
            <Image src={SITE.logo} alt="" width={40} height={40} className="rbk-logo" unoptimized />
            <span className="rbk-logo-word">
              <span>São José dos Campos</span>
              Doceria da Rebeka
            </span>
          </button>
          <nav className="rbk-nav" aria-label="Navegação principal">
            {NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <a href={WA} className="rbk-btn rbk-btn-primary" target="_blank" rel="noopener noreferrer">
            Fale com o comercial
          </a>
          <button
            type="button"
            className="rbk-menu-btn"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="rbk-mobile-backdrop"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className={`rbk-mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Menu mobile" aria-hidden={!menuOpen}>
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              scrollTo(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
        <a href={WA} className="rbk-btn rbk-btn-wa" target="_blank" rel="noopener noreferrer">
          WhatsApp comercial
        </a>
      </nav>

      <main id="inicio">
        <section className="rbk-hero" aria-labelledby="hero-heading">
          <div className="rbk-hero-visual">
            <Image
              src={SITE.heroPhoto}
              alt="Pudim cremoso da Doceria da Rebeka com calda dourada"
              fill
              className="rbk-hero-photo"
              priority
              sizes="100vw"
              unoptimized
            />
            <div className="rbk-hero-overlay" />
          </div>
          <div className="rbk-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="rbk-brand rbk-display">
                <span>{SITE.tagline}</span>
                Doceria da Rebeka
              </p>
              <h1 id="hero-heading" className="rbk-display">
                O doce que conquista corações em todo o Brasil
              </h1>
              <p className="rbk-hero-lead">
                Pudins e brigadeirões no atacado, da fábrica em São José dos Campos para mais de 11 mil
                pontos de venda.
              </p>
              <div className="rbk-hero-actions">
                <a href={WA} className="rbk-btn rbk-btn-wa rbk-btn-lg" target="_blank" rel="noopener noreferrer">
                  Fale com o comercial
                </a>
                <button type="button" className="rbk-btn rbk-btn-ghost rbk-btn-lg" onClick={() => scrollTo("produtos")}>
                  Ver produtos
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="rbk-trust" aria-label="Números da marca">
          <div className="rbk-trust-inner">
            {TRUST.map((item) => (
              <div key={item.label} className="rbk-trust-item">
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <section id="historia" className="rbk-section rbk-section-alt">
          <div className="rbk-container rbk-about">
            <motion.div {...fadeUp} className="rbk-about-media">
              <Image
                src={SITE.aboutPhoto}
                alt="Pudim artesanal da Doceria da Rebeka"
                fill
                sizes="(max-width: 960px) 100vw, 48vw"
                unoptimized
              />
            </motion.div>
            <motion.div {...fadeUp} className="rbk-about-copy">
              <span className="rbk-eyebrow">Nossa história</span>
              <h2 className="rbk-display">Sabor caseiro com escala de fábrica</h2>
              <p>
                A Doceria da Rebeka nasceu para entregar doces que despertam memória afetiva e conquistam
                na primeira colherada. Com sede em São José dos Campos, produzimos pudins e brigadeirões
                com padrão de qualidade, praticidade e consistência.
              </p>
              <p>
                Mais do que doce, entregamos parceria para quem precisa performar na gôndola todos os dias:
                mercados, redes e distribuidores.
              </p>
              <div className="rbk-about-note">
                Aqui cada receita carrega cuidado de verdade. Sabor caseiro com padrão profissional.
              </div>
            </motion.div>
          </div>
        </section>

        <section id="produtos" className="rbk-section">
          <div className="rbk-container">
            <motion.div {...fadeUp} className="rbk-section-head">
              <span className="rbk-eyebrow">Produtos</span>
              <h2 className="rbk-display">Dois campeões para a gôndola</h2>
              <p>Receitas pensadas para vender bem e encantar quem prova.</p>
            </motion.div>
            <div className="rbk-products">
              {PRODUCTS.map((p) => (
                <motion.article key={p.id} className="rbk-product" {...fadeUp}>
                  <div className="rbk-product-media">
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 960px) 100vw, 50vw" unoptimized />
                  </div>
                  <div className="rbk-product-body">
                    <span className="rbk-product-badge">{p.badge}</span>
                    <h3 className="rbk-display">{p.name}</h3>
                    <p>{p.desc}</p>
                    <ul>
                      {p.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="atacado" className="rbk-section rbk-section-alt">
          <div className="rbk-container">
            <motion.div {...fadeUp} className="rbk-section-head">
              <span className="rbk-eyebrow">Atacado B2B</span>
              <h2 className="rbk-display">Leve a Rebeka para o seu mercado</h2>
              <p>
                Atendemos mercados, redes varejistas e distribuidores que buscam aceitação, apresentação e
                padrão constante.
              </p>
            </motion.div>
            <div className="rbk-wholesale">
              {WHOLESALE.map((s) => (
                <motion.div key={s.step} {...fadeUp} className="rbk-step">
                  <span className="rbk-step-num">{s.step}</span>
                  <h3 className="rbk-display">{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="rbk-section">
          <div className="rbk-container">
            <motion.div {...fadeUp} className="rbk-section-head">
              <span className="rbk-eyebrow">Galeria</span>
              <h2 className="rbk-display">Do olhar à última colherada</h2>
              <p>Produtos pensados para conquistar na vitrine e no sabor.</p>
            </motion.div>
            <div className="rbk-gallery">
              {SITE.gallery.map((g) => (
                <motion.div key={g.src + g.alt} className="rbk-gallery-item" {...fadeUp}>
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 960px) 100vw, 33vw" unoptimized />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="rbk-section rbk-section-alt">
          <div className="rbk-container rbk-quality">
            <motion.div {...fadeUp} className="rbk-quality-media">
              <Image
                src={SITE.qualityPhoto}
                alt="Detalhe da qualidade do pudim"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                unoptimized
              />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="rbk-eyebrow">Qualidade</span>
              <h2 className="rbk-display">Padrão em textura, sabor e conservação</h2>
              <p>
                Cada lote segue rigor de produção para garantir aparência irresistível, sabor marcante e
                qualidade constante no ponto de venda.
              </p>
              <div className="rbk-quality-pills">
                <span>Padrão textura</span>
                <span>Padrão sabor</span>
                <span>Padrão conservação</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="rbk-section rbk-book">
          <div className="rbk-container rbk-book-inner">
            <motion.div {...fadeUp}>
              <h2 className="rbk-display">Fale com o comercial</h2>
              <p>Quer levar nossos produtos para o seu mercado ou distribuidora? Chame no WhatsApp.</p>
              <div className="rbk-book-meta">
                <span>
                  {SITE.address}, {SITE.addressDetail}
                </span>
                <span>
                  {SITE.city} · CEP {SITE.cep}
                </span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram {SITE.instagramHandle}
                </a>
              </div>
              <a href={WA} className="rbk-btn rbk-btn-wa rbk-btn-lg" target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE.phoneDisplay}
              </a>
            </motion.div>
            <iframe
              className="rbk-map"
              title="Mapa da Doceria da Rebeka em São José dos Campos"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section id="duvidas" className="rbk-section">
          <div className="rbk-container rbk-faq-wrap">
            <motion.div {...fadeUp} className="rbk-section-head">
              <span className="rbk-eyebrow">Dúvidas</span>
              <h2 className="rbk-display">Perguntas frequentes</h2>
            </motion.div>
            <div className="rbk-faq">
              {FAQ.map((item) => (
                <details key={item.q} className="rbk-faq-item">
                  <summary className="rbk-display">{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="rbk-cta" aria-label="Chamada comercial">
          <div className="rbk-cta-inner">
            <motion.div {...fadeUp}>
              <h2 className="rbk-display">Pronto para repor a gôndola?</h2>
              <p>Comercial no WhatsApp. São José dos Campos, atendimento nacional no atacado.</p>
              <a href={WA} className="rbk-btn rbk-btn-wa rbk-btn-lg" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="rbk-footer">
        <div className="rbk-footer-inner">
          <div>
            <strong className="rbk-display">{SITE.name}</strong>
            <p>
              {SITE.address} · {SITE.city}
            </p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer">
            {SITE.phoneDisplay}
          </a>
        </div>
      </footer>

      <a href={WA} className="rbk-wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
