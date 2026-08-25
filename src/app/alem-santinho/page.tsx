"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AREAS, FAQ, NAV, REVIEWS, SITE, STEPS, TRUST, WA } from "./data";
import { PreviewChrome } from "@/preview";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.008 2.898a9.825 9.825 0 012.893 7.004c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function AlemSantinhoPreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={`as-root sd-preview-page${menuOpen ? " as-menu-open" : ""}`}>
      <PreviewChrome
        oldSiteHost="alemsantinhoadvocacia.jusfy.com.br"
        compare={{
          headline: "+schema +Google",
          headlineSub: "site Jusfy fraco em SEO técnico",
          metrics: [
            { id: "seo", label: "SEO técnico", old: 38, new: 96, unit: "/100" },
            { id: "schema", label: "Dados estruturados", old: 0, new: 100, unit: "/100" },
            { id: "trust", label: "Prova social no site", old: 10, new: 95, unit: "/100" },
            { id: "local", label: "Sinais locais (OAB + endereço)", old: 20, new: 98, unit: "/100" },
          ],
          badges: [
            "Schema.org (Attorney + FAQ)",
            "Meta + Open Graph",
            "OAB e endereço visíveis",
            "FAQ estruturado (indexável ao publicar)",
          ],
        }}
      />

      <header className="as-header">
        <div className="as-header-inner">
          <button type="button" onClick={() => scrollTo("inicio")} aria-label="Início">
            <Image src={SITE.logo} alt={`Logo ${SITE.name}`} width={150} height={40} className="as-logo" unoptimized />
          </button>
          <nav className="as-nav" aria-label="Navegação principal">
            {NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <a href={WA} className="as-btn as-btn-primary" target="_blank" rel="noopener noreferrer">
            Falar com o advogado
          </a>
          <button
            type="button"
            className="as-menu-btn"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <button type="button" className="as-mobile-backdrop" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
      )}

      <nav className={`as-mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Menu mobile" aria-hidden={!menuOpen}>
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
        <a href={WA} className="as-btn as-btn-wa" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </nav>

      <main id="inicio">
        <section className="as-hero" aria-labelledby="hero-heading">
          <div className="as-hero-visual">
            <Image
              src={SITE.heroPhoto}
              alt="Advocacia e documentos jurídicos"
              fill
              className="as-hero-photo"
              priority
              sizes="100vw"
              unoptimized
            />
            <div className="as-hero-overlay" />
          </div>
          <div className="as-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="as-brand as-display">
                <span>Advocacia · Vila Romana</span>
                Alem Santinho
              </p>
              <h1 id="hero-heading" className="as-display">
                Direito trabalhista, previdenciário e público com estratégia clara
              </h1>
              <p className="as-hero-lead">
                {SITE.lawyer}, {SITE.oab}. Atendimento personalizado e foco em resultado concreto.
              </p>
              <div className="as-hero-actions">
                <a href={WA} className="as-btn as-btn-wa as-btn-lg" target="_blank" rel="noopener noreferrer">
                  WhatsApp {SITE.phoneDisplay}
                </a>
                <button type="button" className="as-btn as-btn-ghost as-btn-lg" onClick={() => scrollTo("areas")}>
                  Ver áreas de atuação
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="as-trust" aria-label="Credenciais e reputação">
          <div className="as-trust-inner">
            {TRUST.map((item) => (
              <div key={item.label} className="as-trust-item">
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <section id="areas" className="as-section as-section-alt">
          <div className="as-container">
            <motion.div {...fadeUp} className="as-section-head">
              <span className="as-eyebrow">Áreas de atuação</span>
              <h2 className="as-display">Soluções jurídicas com ética e resultado</h2>
              <p>Você chega com um problema. O escritório organiza provas, prazos e o caminho mais seguro.</p>
            </motion.div>
            <div className="as-areas">
              {AREAS.map((a) => (
                <motion.article key={a.title} className="as-area" {...fadeUp}>
                  <h3 className="as-display">{a.title}</h3>
                  <p>{a.desc}</p>
                  <a href={WA} className="as-area-link" target="_blank" rel="noopener noreferrer">
                    Consultar no WhatsApp
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="como" className="as-section">
          <div className="as-container">
            <motion.div {...fadeUp} className="as-section-head">
              <span className="as-eyebrow">Como funciona</span>
              <h2 className="as-display">Do primeiro contato ao acompanhamento</h2>
              <p>Quatro passos objetivos, sem enrolação.</p>
            </motion.div>
            <div className="as-steps">
              {STEPS.map((s) => (
                <motion.div key={s.step} {...fadeUp} className="as-step">
                  <span className="as-step-num">{s.step}</span>
                  <h3 className="as-display">{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="as-section as-section-alt">
          <div className="as-container as-about">
            <motion.div {...fadeUp} className="as-about-media">
              <Image
                src={SITE.aboutPhoto}
                alt="Orientação jurídica profissional"
                fill
                sizes="(max-width: 960px) 100vw, 48vw"
                unoptimized
              />
            </motion.div>
            <motion.div {...fadeUp} className="as-about-copy">
              <span className="as-eyebrow">O advogado</span>
              <h2 className="as-display">Experiência em gestão e direito</h2>
              <p>
                Graduado pela Unicamp, com mais de 15 anos de experiência em administração e gestão social,
                incluindo a fábrica Flaskô, gerida pelos trabalhadores.
              </p>
              <p>
                Especializado em direito previdenciário, trabalhista e público, com foco também em energia,
                petróleo e gás. Ética e transparência como princípios do atendimento.
              </p>
              <div className="as-cred">
                <strong>{SITE.lawyer}</strong>
                <span>{SITE.oab}</span>
                <span>
                  {SITE.address}, {SITE.addressDetail} · {SITE.city}
                </span>
                <span>
                  Nota {SITE.googleRating} no Google · {SITE.googleReviews} avaliações
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="depoimentos" className="as-section">
          <div className="as-container">
            <motion.div {...fadeUp} className="as-section-head">
              <span className="as-eyebrow">Depoimentos</span>
              <h2 className="as-display">Reputação {SITE.googleRating} no Google</h2>
              <p>{SITE.googleReviews} avaliações. A prova social que o site Jusfy não destacava.</p>
            </motion.div>
            <div className="as-reviews">
              {REVIEWS.map((r) => (
                <motion.article key={r.name} className="as-review" {...fadeUp}>
                  <div className="as-review-stars" aria-label="5 estrelas">
                    ★★★★★
                  </div>
                  <p>“{r.text}”</p>
                  <strong>{r.name}</strong>
                  <span className="as-review-meta">Google</span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="as-section as-book">
          <div className="as-container as-book-inner">
            <motion.div {...fadeUp}>
              <h2 className="as-display">Fale com o escritório</h2>
              <p>
                {SITE.address}, {SITE.addressDetail} · {SITE.city}
                <br />
                WhatsApp {SITE.phoneDisplay} · {SITE.oab}
              </p>
              <a href={WA} className="as-btn as-btn-wa as-btn-lg" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </motion.div>
            <iframe
              className="as-map"
              title="Mapa do escritório Alem Santinho em Vila Romana"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section id="duvidas" className="as-section">
          <div className="as-container as-faq-wrap">
            <motion.div {...fadeUp} className="as-section-head">
              <span className="as-eyebrow">Dúvidas</span>
              <h2 className="as-display">Perguntas frequentes</h2>
            </motion.div>
            <div className="as-faq">
              {FAQ.map((item) => (
                <details key={item.q} className="as-faq-item">
                  <summary className="as-display">{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="as-cta" aria-label="Chamada para contato">
          <div className="as-cta-inner">
            <motion.div {...fadeUp}>
              <h2 className="as-display">Pronto para esclarecer o seu caso?</h2>
              <p>Conversa inicial pelo WhatsApp. Vila Romana, São Paulo.</p>
              <a href={WA} className="as-btn as-btn-wa as-btn-lg" target="_blank" rel="noopener noreferrer">
                Falar com Dr. Pedro
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="as-footer">
        <div className="as-footer-inner">
          <div>
            <strong className="as-display">{SITE.name}</strong>
            <p>
              {SITE.lawyer} · {SITE.oab} · {SITE.address}, {SITE.addressDetail}
            </p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer">
            {SITE.phoneDisplay}
          </a>
        </div>
      </footer>

      <a href={WA} className="as-wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
