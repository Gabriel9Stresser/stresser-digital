"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FAQ,
  NAV,
  PILLARS,
  REVIEWS,
  SERVICES,
  SITE,
  STATS,
  TREATMENTS,
  WA,
} from "./data";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export default function MaggioliPreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mg-root">
      <div className="mg-preview-bar">Prévia exclusiva · Stresser Digital · não publicada</div>

      <header className="mg-header">
        <div className="mg-header-inner">
          <button type="button" onClick={() => scrollTo("inicio")} aria-label="Início">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={140}
              height={48}
              className="mg-logo"
              unoptimized
            />
          </button>
          <nav className="mg-nav">
            {NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <a href={WA} className="mg-btn mg-btn-primary" target="_blank" rel="noopener noreferrer">
            Agendar sessão
          </a>
          <button
            type="button"
            className="mg-menu-btn"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <nav className={`mg-mobile-nav ${menuOpen ? "open" : ""}`}>
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
        <a href={WA} className="mg-btn mg-btn-wa" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </nav>

      <section id="inicio" className="mg-hero">
        <div className="mg-hero-content">
          <motion.div {...fadeUp}>
            <p className="mg-hero-tag mg-display">Psicologia clínica · Perdizes</p>
            <h1 className="mg-display">
              Sua jornada de <em>transformação</em> começa aqui
            </h1>
            <p className="mg-hero-lead">
              Terapia online e presencial para adultos. Pós-graduado em Saúde Mental. Um espaço
              acolhedor, sigiloso e personalizado para o seu bem-estar.
            </p>
            <div className="mg-hero-actions">
              <a href={WA} className="mg-btn mg-btn-wa" target="_blank" rel="noopener noreferrer">
                Fale comigo agora
              </a>
              <button type="button" className="mg-btn mg-btn-outline" onClick={() => scrollTo("servicos")}>
                Como te ajudo
              </button>
            </div>
            <div className="mg-google-badge">
              <span className="mg-stars">★★★★★</span>
              <span>5,0 no Google · Perdizes, SP</span>
            </div>
          </motion.div>
        </div>
        <div className="mg-hero-visual">
          <Image
            src={SITE.heroPhoto}
            alt={`${SITE.name} — ${SITE.title}`}
            fill
            className="mg-hero-photo"
            priority
            sizes="55vw"
            unoptimized
          />
          <div className="mg-hero-overlay" />
          <div className="mg-hero-crp">
            <strong>{SITE.name}</strong>
            {SITE.title}
            <br />
            {SITE.crp}
          </div>
        </div>
      </section>

      <div className="mg-stats">
        <div className="mg-stats-inner">
          {STATS.map((s) => (
            <div key={s.label} className="mg-stat">
              <strong className="mg-display">{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="sobre" className="mg-section">
        <div className="mg-container mg-split">
          <motion.div {...fadeUp}>
            <div className="mg-section-head">
              <h2 className="mg-display">Sobre mim</h2>
              <p>
                A terapia é um espaço seguro e sem julgamentos para você falar sobre suas dores,
                dúvidas e encontrar esperança em meio às dificuldades.
              </p>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--mg-muted)" }}>
              Com experiência em saúde mental e atendimento humanizado, trabalho com adultos em
              processos de autoconhecimento, regulação emocional e recuperação de qualidade de vida.
              Cada pessoa é única, e o tratamento é construído em parceria com você.
            </p>
            <div className="mg-about-quote">
              &ldquo;Investir na saúde mental é investir na qualidade de vida, nos relacionamentos e
              na forma como você se relaciona com o mundo.&rdquo;
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="mg-about-photo-wrap">
            <Image
              src={SITE.aboutPhoto}
              alt={SITE.name}
              fill
              className="mg-about-photo"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="mg-section mg-section-sand">
        <div className="mg-container">
          <motion.div {...fadeUp} className="mg-section-head">
            <h2 className="mg-display">Como te ajudo</h2>
            <p>
              Três modalidades de atendimento com o mesmo compromisso de acolhimento, sigilo e
              profissionalismo.
            </p>
          </motion.div>
          <div className="mg-services-grid">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                className="mg-service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mg-service-img-wrap">
                  <Image src={s.image} alt={s.title} fill className="mg-service-img" unoptimized />
                </div>
                <div className="mg-service-body">
                  <h3 className="mg-display">{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href={s.href} className="mg-service-link" target="_blank" rel="noopener noreferrer">
                    Saiba mais →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="tratamentos" className="mg-section">
        <div className="mg-container">
          <motion.div {...fadeUp} className="mg-section-head">
            <h2 className="mg-display">Sintomas e tratamentos</h2>
            <p>
              Acompanhamento especializado para diferentes demandas em saúde mental, com plano
              terapêutico individualizado.
            </p>
          </motion.div>
          <div className="mg-treatments-grid">
            {TREATMENTS.map((t) => (
              <article key={t.title} className="mg-treatment">
                <h3 className="mg-display">{t.title}</h3>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
          <div className="mg-pillars">
            {PILLARS.map((p) => (
              <div key={p.step} className="mg-pillar">
                <div className="mg-pillar-num mg-display">{p.step}</div>
                <h4 className="mg-display">{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mg-section mg-section-sand">
        <div className="mg-container">
          <motion.div {...fadeUp} className="mg-section-head">
            <h2 className="mg-display">Conheça meu trabalho</h2>
            <p>Vídeo de apresentação sobre a abordagem e o espaço de atendimento.</p>
          </motion.div>
          <motion.div {...fadeUp} className="mg-video-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${SITE.videoId}?rel=0`}
              title="Igor Maggioli — Psicólogo Clínico"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      <section id="depoimentos" className="mg-section">
        <div className="mg-container">
          <motion.div {...fadeUp} className="mg-section-head">
            <h2 className="mg-display">Depoimentos</h2>
            <p>
              Avaliações reais de pacientes no Google. Sigilo e ética profissional em cada
              atendimento.
            </p>
          </motion.div>
          <div className="mg-reviews-grid">
            {REVIEWS.map((r, i) => (
              <motion.article
                key={r.name + i}
                className="mg-review"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mg-review-stars">★★★★★</div>
                <p>{r.text}</p>
                <div className="mg-review-author">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="mg-review-avatar"
                    unoptimized
                  />
                  <div>
                    <div className="mg-review-name">{r.name}</div>
                    <div className="mg-review-source">Google Reviews</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mg-cta">
        <motion.div {...fadeUp}>
          <h2 className="mg-display">Pronto para começar?</h2>
          <p>Agende sua sessão por WhatsApp. Respondo assim que possível.</p>
          <a href={WA} className="mg-btn" target="_blank" rel="noopener noreferrer">
            Agendar no WhatsApp
          </a>
        </motion.div>
      </section>

      <section id="duvidas" className="mg-section mg-section-sand">
        <div className="mg-container">
          <motion.div {...fadeUp} className="mg-section-head">
            <h2 className="mg-display">Dúvidas frequentes</h2>
          </motion.div>
          <motion.div {...fadeUp} className="mg-faq">
            {FAQ.map((item) => (
              <details key={item.q} className="mg-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contato" className="mg-section">
        <div className="mg-container mg-contact-grid">
          <motion.div {...fadeUp}>
            <div className="mg-section-head">
              <h2 className="mg-display">Contato</h2>
              <p>Consultório em Perdizes ou sessões online para todo o Brasil.</p>
            </div>
            <a href={WA} className="mg-contact-phone" target="_blank" rel="noopener noreferrer">
              {SITE.phoneDisplay}
            </a>
            <a href={WA} className="mg-btn mg-btn-wa" target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
            </a>
          </motion.div>
          <motion.div {...fadeUp} className="mg-contact-card">
            <h3 className="mg-display">Presencial</h3>
            <p>{SITE.address}</p>
            <p>{SITE.addressDetail}</p>
            <p>{SITE.city}</p>
            <h3 className="mg-display" style={{ marginTop: 28 }}>Online</h3>
            <p>Atendimento por videochamada com a mesma qualidade da sessão presencial.</p>
          </motion.div>
        </div>
      </section>

      <footer className="mg-footer">
        <p>
          {SITE.name} · {SITE.title} · {SITE.crp}
        </p>
        <p style={{ marginTop: 8 }}>
          Site original:{" "}
          <a href={SITE.siteOriginal} target="_blank" rel="noopener noreferrer">
            igorpsicologo.com
          </a>
          · Prévia produzida por{" "}
          <a href="https://stresserdigital.com.br" target="_blank" rel="noopener noreferrer">
            Stresser Digital
          </a>
        </p>
      </footer>

      <a href={WA} className="mg-wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.008 2.898a9.825 9.825 0 012.893 7.004c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
