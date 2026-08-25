"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AREAS,
  FAQ,
  FEATURED,
  NAV,
  REVIEWS,
  SITE,
  STEPS,
  TREATMENTS,
  WA,
} from "./data";
import { PreviewChrome } from "@/preview";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
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

export default function LibelaPreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={`lb-root sd-preview-page${menuOpen ? " lb-menu-open" : ""}`}>
      <PreviewChrome
        oldSiteHost="libela.com.br"
        compare={{
          headline: "404 → site novo",
          headlineSub: "libela.com.br está fora do ar hoje",
          metrics: [
            { id: "seo", label: "SEO técnico", old: 8, new: 96, unit: "/100" },
            { id: "presence", label: "Página de negócio", old: 0, new: 100, unit: "/100" },
            { id: "mobile", label: "Mobile-first", old: 15, new: 95, unit: "/100" },
            { id: "a11y", label: "Estrutura acessível", old: 30, new: 92, unit: "/100" },
          ],
          badges: [
            "Schema.org (BeautySalon + FAQ)",
            "Meta + Open Graph",
            "Mobile-first",
            "FAQ estruturado (indexável ao publicar)",
          ],
        }}
      />

      <header className="lb-header">
        <div className="lb-header-inner">
          <button type="button" onClick={() => scrollTo("inicio")} aria-label="Início">
            <Image src={SITE.logoDark} alt={`Logo ${SITE.name}`} width={140} height={40} className="lb-logo" unoptimized />
          </button>
          <nav className="lb-nav" aria-label="Navegação principal">
            {NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <a href={WA} className="lb-btn lb-btn-primary" target="_blank" rel="noopener noreferrer">
            Avaliação grátis
          </a>
          <button
            type="button"
            className="lb-menu-btn"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <button type="button" className="lb-mobile-backdrop" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
      )}

      <nav className={`lb-mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Menu mobile" aria-hidden={!menuOpen}>
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
        <a href={WA} className="lb-btn lb-btn-wa" target="_blank" rel="noopener noreferrer">
          Agendar avaliação
        </a>
      </nav>

      <main id="inicio">
        <section className="lb-hero" aria-labelledby="hero-heading">
          <div className="lb-hero-visual">
            <Image
              src={SITE.heroPhoto}
              alt="Tratamento estético na Libela"
              fill
              className="lb-hero-photo"
              priority
              sizes="100vw"
              unoptimized
            />
            <div className="lb-hero-overlay" />
          </div>
          <div className="lb-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="lb-hero-kicker">Santana · Zona Norte · desde {SITE.since}</p>
              <h1 id="hero-heading" className="lb-display">
                Sua pele e seu corpo com cuidado de verdade
              </h1>
              <p className="lb-hero-lead">
                Avaliação gratuita. Protocolos faciais, corporais e drenagem com acompanhamento sessão a sessão.
              </p>
              <div className="lb-hero-actions">
                <a href={WA} className="lb-btn lb-btn-wa lb-btn-lg" target="_blank" rel="noopener noreferrer">
                  Agendar avaliação
                </a>
                <button type="button" className="lb-btn lb-btn-ghost lb-btn-lg" onClick={() => scrollTo("tratamentos")}>
                  Conhecer tratamentos
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <p className="lb-ribbon" aria-label="Destaques">
          Avaliação gratuita · Rua Vicente Soares, 331 · Atendimento na Zona Norte
        </p>

        <section id="tratamentos" className="lb-section">
          <div className="lb-container">
            <motion.div {...fadeUp} className="lb-intro">
              <h2 className="lb-display">Tratamentos que você vê e sente</h2>
              <p>Drenagem, radiofrequência, manchas e mais. Tudo no mesmo endereço em Santana.</p>
            </motion.div>

            <div className="lb-mosaic">
              {FEATURED.map((item) => (
                <motion.article key={item.title} {...fadeUp} className="lb-mosaic-card">
                  <div className="lb-mosaic-media">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 960px) 100vw, 33vw" unoptimized />
                  </div>
                  <div className="lb-mosaic-body">
                    <h3 className="lb-display">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="lb-menu-treat">
              {TREATMENTS.map((group) => (
                <div key={group.group}>
                  <h3>{group.group}</h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="lb-section lb-section-soft">
          <div className="lb-container">
            <motion.div {...fadeUp} className="lb-intro">
              <h2 className="lb-display">Como começa o seu protocolo</h2>
            </motion.div>
            <ol className="lb-journey">
              {STEPS.map((step) => (
                <motion.li key={step.step} {...fadeUp}>
                  <span>{step.step}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sobre" className="lb-section">
          <div className="lb-container lb-clinic">
            <motion.div {...fadeUp} className="lb-clinic-photo">
              <Image
                src={SITE.aboutPhoto}
                alt="Fachada da Libela Estética em Santana"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                unoptimized
              />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="lb-display">A clínica na Rua Vicente Soares</h2>
              <p>
                A Libela nasceu para oferecer mudança corporal e mental com atendimento próximo. O nome vem da
                libélula: visão ampla, leveza e coragem.
              </p>
              <p>
                Ética, transparência e compromisso com o resultado em cada sessão. Atendemos {AREAS.slice(0, 5).join(", ")}{" "}
                e região.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="depoimentos" className="lb-section lb-section-soft">
          <div className="lb-container">
            <motion.div {...fadeUp} className="lb-intro">
              <h2 className="lb-display">Quem passou por aqui</h2>
            </motion.div>
            <div className="lb-quotes">
              {REVIEWS.map((r) => (
                <motion.blockquote key={r.name} {...fadeUp}>
                  <p>{r.text}</p>
                  <footer>{r.name}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="lb-section lb-book">
          <div className="lb-container lb-book-inner">
            <motion.div {...fadeUp}>
              <h2 className="lb-display">Agende sua avaliação gratuita</h2>
              <p>
                {SITE.address}, {SITE.addressDetail} · {SITE.city}
                <br />
                WhatsApp {SITE.phoneDisplay} · Fixo {SITE.phoneFixo}
              </p>
              <a href={WA} className="lb-btn lb-btn-wa lb-btn-lg" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </motion.div>
            <iframe
              className="lb-map"
              title="Mapa da Libela Estética em Santana"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section id="duvidas" className="lb-section">
          <div className="lb-container lb-faq-wrap">
            <h2 className="lb-display">Dúvidas frequentes</h2>
            <div className="lb-faq">
              {FAQ.map((item) => (
                <details key={item.q} className="lb-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="lb-footer">
        <div className="lb-container lb-footer-inner">
          <div>
            <strong className="lb-display">{SITE.name}</strong>
            <p>
              {SITE.address}, {SITE.addressDetail} · {SITE.city}
            </p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer">
            {SITE.phoneDisplay}
          </a>
        </div>
      </footer>

      <a href={WA} className="lb-wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
