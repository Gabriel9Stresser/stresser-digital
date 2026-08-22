"use client";

import Image from "next/image";
import { useState } from "react";

const SITE = {
  name: "Igor Maggioli",
  title: "Psicólogo Clínico",
  crp: "CRP 06/177930",
  phone: "5511939082178",
  phoneDisplay: "(11) 93908-2178",
  address: "Av. Antártica, 675 — 19º e 20º andar",
  district: "Perdizes, São Paulo — SP",
  siteOriginal: "https://www.igorpsicologo.com",
  heroImage: "https://www.igorpsicologo.com/adm/imagens/97b44588642d0526bdfae0f4ea32b304.90.webp",
  logoImage: "https://www.igorpsicologo.com/adm/imagens/247b89326ec6d080b42de7b4b0558d61.png",
};

const WA = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(
  "Olá Igor! Vi a prévia do site e gostaria de agendar uma conversa."
)}`;

const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Como te ajudo" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
];

const SERVICES = [
  {
    title: "Psicoterapia presencial",
    desc: "Processo terapêutico contínuo em Perdizes, com foco em autoconhecimento e acolhimento em um espaço seguro.",
    icon: "🪑",
  },
  {
    title: "Psicoterapia online",
    desc: "Atendimento de qualquer lugar, com a mesma qualidade da sessão presencial. Você só precisa de um local tranquilo e conexão estável.",
    icon: "💻",
  },
  {
    title: "Atendimento emergencial",
    desc: "Suporte em momentos de crise, com acolhimento imediato e orientação para estabilização emocional.",
    icon: "🆘",
  },
];

const TREATMENTS = [
  {
    title: "Depressão",
    desc: "Condição que vai além da tristeza, afetando humor, energia e capacidade de realizar atividades do dia a dia.",
  },
  {
    title: "Bipolaridade",
    desc: "Mudanças extremas de humor, alternando entre euforia intensa e profunda tristeza, com tratamento personalizado.",
  },
  {
    title: "Ansiedade e estresse",
    desc: "Acompanhamento para reduzir preocupações excessivas, tensão constante e dificuldade de relaxar.",
  },
];

const FAQ = [
  {
    q: "Quanto tempo dura a sessão?",
    a: "50 minutos, com frequência semanal, quinzenal ou pontual, conforme a necessidade de cada paciente.",
  },
  {
    q: "Atendimento online funciona?",
    a: "Pesquisas mostram que a psicoterapia online tem o mesmo efeito da presencial. A escolha depende da sua preferência e rotina.",
  },
  {
    q: "Aceita plano de saúde?",
    a: "Sim, na modalidade de reembolso. Consulte seu plano para verificar cobertura com psicólogo.",
  },
  {
    q: "Quem pode ser atendido?",
    a: "Jovens e adultos a partir de 18 anos, online para todos ou presencial em São Paulo capital.",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function MaggioliPreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="maggioli-root">
      {/* Prévia Stresser — discreto */}
      <div className="preview-ribbon">
        Prévia Stresser Digital · link privado · não indexado no Google
      </div>

      <header className="site-header">
        <div className="header-inner">
          <button type="button" className="brand" onClick={() => scrollTo("inicio")}>
            <Image
              src={SITE.logoImage}
              alt={SITE.name}
              width={120}
              height={40}
              className="brand-logo"
              unoptimized
            />
          </button>
          <nav className="nav-desktop">
            {NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <a href={WA} className="btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
            Agendar
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <nav className="nav-mobile">
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
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Sua jornada de transformação começa aqui</p>
              <h1>
                Terapia online e presencial
                <span> para adultos em Perdizes</span>
              </h1>
              <p className="hero-sub">
                Pós-graduado em Saúde Mental. Um espaço acolhedor, sigiloso e personalizado para o seu
                bem-estar.
              </p>
              <div className="hero-actions">
                <a href={WA} className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Fale comigo no WhatsApp
                </a>
                <button type="button" className="btn-ghost" onClick={() => scrollTo("servicos")}>
                  Como te ajudo
                </button>
              </div>
              <p className="crp-line">{SITE.name} · {SITE.crp}</p>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <Image
                  src={SITE.heroImage}
                  alt="Igor Maggioli — Psicólogo Clínico"
                  width={480}
                  height={560}
                  className="hero-image"
                  priority
                  unoptimized
                />
              </div>
              <div className="hero-badge">
                <span>⭐ 5,0 no Google</span>
                <span>Perdizes · SP</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section section-sand">
          <div className="container">
            <div className="split">
              <div>
                <h2>Sobre mim</h2>
                <p className="lead">
                  A terapia é um espaço seguro e sem julgamentos para você falar sobre suas dores,
                  dúvidas e encontrar esperança em meio às dificuldades.
                </p>
                <p>
                  Com experiência em saúde mental e atendimento humanizado, trabalho com adultos em
                  processos de autoconhecimento, regulação emocional e recuperação de qualidade de vida.
                </p>
              </div>
              <div className="stats">
                <div className="stat">
                  <strong>+5 anos</strong>
                  <span>promovendo saúde mental</span>
                </div>
                <div className="stat">
                  <strong>+1.000</strong>
                  <span>horas de estudo e aperfeiçoamento</span>
                </div>
                <div className="stat">
                  <strong>+1.000</strong>
                  <span>sessões realizadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <h2 className="section-title">Como te ajudo</h2>
            <p className="section-desc">
              Três formas de acompanhamento, com o mesmo compromisso de acolhimento e sigilo profissional.
            </p>
            <div className="cards-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="card">
                  <span className="card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tratamentos" className="section section-sand">
          <div className="container">
            <h2 className="section-title">Sintomas e tratamentos</h2>
            <div className="cards-3">
              {TREATMENTS.map((t) => (
                <article key={t.title} className="card card-outline">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </article>
              ))}
            </div>
            <div className="pillars">
              <h3>A terapia em 4 pilares</h3>
              <ol>
                <li><strong>Diagnóstico</strong> — compreensão clara do que você está vivendo.</li>
                <li><strong>Plano terapêutico</strong> — objetivos definidos em conjunto.</li>
                <li><strong>Processo</strong> — sessões regulares com acompanhamento contínuo.</li>
                <li><strong>Alta</strong> — quando os objetivos são alcançados e você segue com autonomia.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section cta-band">
          <div className="container cta-inner">
            <h2>Pronto para começar?</h2>
            <p>Agende sua sessão por WhatsApp. Respondo assim que possível.</p>
            <a href={WA} className="btn-primary btn-light" target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
          </div>
        </section>

        <section id="duvidas" className="section">
          <div className="container">
            <h2 className="section-title">Dúvidas frequentes</h2>
            <div className="faq-list">
              {FAQ.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section section-sand">
          <div className="container split">
            <div>
              <h2>Contato</h2>
              <p className="lead">{SITE.address}</p>
              <p>{SITE.district}</p>
              <p className="contact-phone">
                <a href={WA} target="_blank" rel="noopener noreferrer">{SITE.phoneDisplay}</a>
              </p>
              <a href={WA} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </div>
            <div className="map-card">
              <p><strong>Presencial</strong> — Perdizes, São Paulo</p>
              <p><strong>Online</strong> — para qualquer lugar do Brasil</p>
              <p className="map-note">Consultório com ambiente reservado e acolhedor.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>{SITE.name} · {SITE.title} · {SITE.crp}</p>
          <p className="footer-small">
            Site original:{" "}
            <a href={SITE.siteOriginal} target="_blank" rel="noopener noreferrer">
              igorpsicologo.com
            </a>
            · Prévia produzida por Stresser Digital
          </p>
        </div>
      </footer>

      <a href={WA} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        💬
      </a>

      <style jsx global>{`
        .maggioli-root {
          --mag-teal: #037f8c;
          --mag-teal-light: #168894;
          --mag-sand: #eee8e3;
          --mag-ink: #2e2e2e;
          --mag-white: #ffffff;
          font-family: var(--font-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
          color: var(--mag-ink);
          background: var(--mag-white);
          min-height: 100vh;
        }

        .preview-ribbon {
          background: #0b1f3a;
          color: #94a3b8;
          text-align: center;
          font-size: 11px;
          padding: 6px 12px;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #e2e8f0;
        }

        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .brand-logo {
          height: 36px;
          width: auto;
        }

        .nav-desktop {
          display: flex;
          gap: 8px;
          flex: 1;
          justify-content: center;
        }

        .nav-desktop button,
        .nav-mobile button {
          background: none;
          border: none;
          font-size: 14px;
          font-weight: 500;
          color: var(--mag-ink);
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .nav-desktop button:hover,
        .nav-mobile button:hover {
          background: var(--mag-sand);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          padding: 4px 8px;
        }

        .nav-mobile {
          display: flex;
          flex-direction: column;
          padding: 8px 20px 16px;
          border-top: 1px solid #e2e8f0;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--mag-teal);
          color: white;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 24px;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
        }

        .btn-primary:hover {
          background: var(--mag-teal-light);
          transform: translateY(-1px);
        }

        .btn-sm {
          padding: 10px 18px;
          font-size: 14px;
        }

        .btn-light {
          background: white;
          color: var(--mag-teal);
        }

        .btn-light:hover {
          background: var(--mag-sand);
        }

        .btn-ghost {
          background: transparent;
          border: 2px solid var(--mag-teal);
          color: var(--mag-teal);
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 15px;
        }

        .hero {
          padding: 48px 20px 64px;
          background: linear-gradient(160deg, var(--mag-sand) 0%, #fff 55%);
        }

        .hero-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .eyebrow {
          color: var(--mag-teal);
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .hero h1 {
          font-size: clamp(32px, 5vw, 44px);
          line-height: 1.15;
          font-weight: 800;
          color: var(--mag-ink);
        }

        .hero h1 span {
          color: var(--mag-teal);
        }

        .hero-sub {
          margin-top: 16px;
          font-size: 17px;
          line-height: 1.6;
          color: #475569;
          max-width: 480px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .crp-line {
          margin-top: 20px;
          font-size: 13px;
          color: #64748b;
        }

        .hero-visual {
          position: relative;
        }

        .hero-image-wrap {
          border-radius: 24px;
          overflow: hidden;
          background: var(--mag-sand);
          aspect-ratio: 4/5;
          max-height: 520px;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: white;
          padding: 10px 16px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 12px;
          font-size: 13px;
          font-weight: 600;
        }

        .section {
          padding: 64px 20px;
        }

        .section-sand {
          background: var(--mag-sand);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(26px, 4vw, 34px);
          font-weight: 800;
          margin-bottom: 8px;
        }

        .section-desc {
          color: #64748b;
          margin-bottom: 32px;
          max-width: 560px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .lead {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .stats {
          display: grid;
          gap: 16px;
        }

        .stat {
          background: white;
          padding: 20px 24px;
          border-radius: 16px;
          border: 1px solid rgba(3, 127, 140, 0.15);
        }

        .stat strong {
          display: block;
          font-size: 22px;
          color: var(--mag-teal);
        }

        .stat span {
          font-size: 14px;
          color: #64748b;
        }

        .cards-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          background: white;
          padding: 28px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
        }

        .card-outline {
          background: transparent;
          border: 2px solid rgba(3, 127, 140, 0.2);
        }

        .card-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 12px;
        }

        .card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.55;
          color: #475569;
        }

        .pillars {
          margin-top: 40px;
          background: white;
          padding: 28px;
          border-radius: 20px;
        }

        .pillars ol {
          margin-top: 16px;
          padding-left: 20px;
          line-height: 1.7;
        }

        .cta-band {
          background: var(--mag-teal);
          color: white;
          text-align: center;
        }

        .cta-inner h2 {
          font-size: 28px;
          font-weight: 800;
        }

        .cta-inner p {
          margin: 12px 0 24px;
          opacity: 0.9;
        }

        .faq-list {
          display: grid;
          gap: 12px;
          max-width: 720px;
        }

        .faq-item {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 4px 16px;
        }

        .faq-item summary {
          font-weight: 600;
          cursor: pointer;
          padding: 12px 0;
        }

        .faq-item p {
          padding-bottom: 12px;
          color: #475569;
          line-height: 1.55;
        }

        .contact-phone a {
          color: var(--mag-teal);
          font-size: 20px;
          font-weight: 700;
          text-decoration: none;
        }

        .map-card {
          background: white;
          padding: 28px;
          border-radius: 20px;
          line-height: 1.7;
        }

        .map-note {
          margin-top: 12px;
          color: #64748b;
          font-size: 14px;
        }

        .site-footer {
          background: var(--mag-ink);
          color: #94a3b8;
          padding: 32px 20px;
          font-size: 14px;
        }

        .footer-inner {
          text-align: center;
        }

        .footer-small {
          margin-top: 8px;
          font-size: 12px;
        }

        .footer-small a {
          color: #cbd5e1;
        }

        .wa-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          z-index: 60;
        }

        @media (max-width: 900px) {
          .hero-grid,
          .split,
          .cards-3 {
            grid-template-columns: 1fr;
          }

          .nav-desktop {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .header-inner .btn-sm {
            display: none;
          }

          .hero-visual {
            order: -1;
          }

          .hero-image-wrap {
            max-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
