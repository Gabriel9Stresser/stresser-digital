import Link from "next/link";
import { ARTICLES, BASE, PRODUCTS, PROOF, SITE, VIDEOS, WA, WA_CATALOG, WHOLESALE } from "./data";

const DIFFS = [
  {
    title: "Presença nacional",
    desc: "Mais de 11 mil pontos de venda em gôndolas e vitrines pelo Brasil.",
  },
  {
    title: "Foco 100% atacado",
    desc: "Atendimento pensado para mercados, redes e distribuidores.",
  },
  {
    title: "Sabor com escala",
    desc: "Receita caseira com padrão de fábrica em São José dos Campos.",
  },
  {
    title: "Comercial próximo",
    desc: `Resposta rápida no WhatsApp ${SITE.phoneDisplay}.`,
  },
];

export default function DoceriaRebekaHome() {
  return (
    <>
      {/* Hero full-bleed estilo Cimed */}
      <section className="rbk-hero-bleed">
        <img src={SITE.heroPhoto} alt="" className="rbk-hero-bleed-img" fetchPriority="high" />
        <div className="rbk-hero-bleed-veil" />
        <div className="rbk-hero-bleed-content">
          <p className="rbk-hero-kicker">São José dos Campos · Atacado nacional</p>
          <h1>
            O doce que conquista
            <br />
            corações em todo o Brasil
          </h1>
          <p className="rbk-hero-lead">
            Pudim e brigadeirão feitos com amor e perfeição. Da fábrica joseense para milhares de pontos de venda.
          </p>
          <div className="rbk-hero-ctas">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-btn-solid">
              Fale com o comercial
            </a>
            <Link href={`${BASE}/produtos`} className="rbk-btn-ghost">
              Nossos produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Faixa marquee / prova */}
      <div className="rbk-marquee" aria-hidden>
        <div className="rbk-marquee-track">
          {[...PROOF, ...PROOF].map((item, i) => (
            <span key={`${item.title}-${i}`}>
              <strong>{item.title}</strong> {item.desc}
            </span>
          ))}
        </div>
      </div>

      {/* Produtos */}
      <section className="rbk-section">
        <div className="rbk-section-head">
          <div>
            <p className="rbk-kicker">Nossos produtos</p>
            <h2>Linha pronta para a gôndola</h2>
            <p className="rbk-section-sub">Conheça os campeões de giro da Doceria da Rebeka.</p>
          </div>
          <Link href={`${BASE}/produtos`} className="rbk-link-arrow">
            Ver todos os produtos ›
          </Link>
        </div>
        <div className="rbk-product-grid">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="rbk-product-card">
              <Link href={`${BASE}/produtos/${p.slug}`} className="rbk-product-card-media">
                <img src={p.image} alt={p.name} loading="lazy" />
                <span className="rbk-product-badge">{p.badge}</span>
              </Link>
              <div className="rbk-product-card-body">
                <h3>
                  <Link href={`${BASE}/produtos/${p.slug}`}>{p.name}</Link>
                </h3>
                <p>{p.desc}</p>
                <Link href={`${BASE}/produtos/${p.slug}`} className="rbk-link-more">
                  Saiba mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="rbk-section rbk-section--cream">
        <div className="rbk-section-head rbk-section-head--center">
          <p className="rbk-kicker">O que nos torna diferentes</p>
          <h2>Expertise e compromisso com o varejo</h2>
          <p className="rbk-section-sub">Sabor de casa, produção em escala e parceria comercial de verdade.</p>
        </div>
        <div className="rbk-diff-grid">
          {DIFFS.map((d, i) => (
            <div key={d.title} className="rbk-diff-card">
              <span className="rbk-diff-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compromisso + números */}
      <section className="rbk-commit">
        <div className="rbk-commit-copy">
          <p className="rbk-kicker rbk-kicker--on-dark">Nosso compromisso</p>
          <h2>Aqui cada doce é feito com amor e perfeição</h2>
          <p>
            Na Doceria da Rebeka, cada receita carrega carinho, tradição e cuidado. Levamos pudins e brigadeirões de
            qualidade para mercados e distribuidores de todo o Brasil, com padrão de fábrica e atendimento próximo.
          </p>
          <Link href={`${BASE}/quem-somos`} className="rbk-btn-solid rbk-btn-solid--rose">
            Conheça nossa história
          </Link>
        </div>
        <div className="rbk-commit-stats">
          <div>
            <strong>+11 mil</strong>
            <span>pontos de venda no Brasil</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>foco em atacado B2B</span>
          </div>
          <div>
            <strong>SJC</strong>
            <span>fábrica em São José dos Campos</span>
          </div>
        </div>
      </section>

      {/* Atacado teaser */}
      <section className="rbk-section">
        <div className="rbk-section-head">
          <div>
            <p className="rbk-kicker">Atacado</p>
            <h2>Leve a Rebeka para o seu mercado</h2>
            <p className="rbk-section-sub">Seis motivos para abastecer com a gente.</p>
          </div>
          <Link href={`${BASE}/atacado`} className="rbk-link-arrow">
            Como comprar ›
          </Link>
        </div>
        <div className="rbk-wholesale-grid">
          {WHOLESALE.slice(0, 6).map((s) => (
            <div key={s.step} className="rbk-wholesale-item">
              <span>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vídeos */}
      <section className="rbk-section rbk-section--cream">
        <div className="rbk-section-head">
          <div>
            <p className="rbk-kicker">Assista</p>
            <h2>Bastidores e produto em movimento</h2>
            <p className="rbk-section-sub">Em breve no YouTube. Por enquanto, no Instagram.</p>
          </div>
          <Link href={`${BASE}/galeria`} className="rbk-link-arrow">
            Galeria e vídeos ›
          </Link>
        </div>
        <div className="rbk-video-grid">
          {VIDEOS.map((v) => (
            <a key={v.id} href={v.ctaHref} target="_blank" rel="noopener noreferrer" className="rbk-video-card">
              <div className="rbk-video-thumb">
                <img src={v.thumb} alt="" />
                <span className="rbk-play">▶</span>
                <span className="rbk-video-tag">Em breve</span>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Mundo Rebeka / Notícias */}
      <section className="rbk-section">
        <div className="rbk-section-head">
          <div>
            <p className="rbk-kicker">Mundo Rebeka</p>
            <h2>Últimas novidades e conhecimento</h2>
            <p className="rbk-section-sub">Dicas de gôndola, mix e bastidores da fábrica.</p>
          </div>
          <Link href={`${BASE}/mundo-rebeka`} className="rbk-link-arrow">
            Ver todos ›
          </Link>
        </div>
        <div className="rbk-news-grid">
          {ARTICLES.slice(0, 3).map((a) => (
            <Link key={a.slug} href={`${BASE}/mundo-rebeka/${a.slug}`} className="rbk-news-card">
              <div className="rbk-news-media">
                <img src={a.cover} alt="" loading="lazy" />
              </div>
              <div className="rbk-news-body">
                <span>{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA faixa estilo newsletter Cimed */}
      <section className="rbk-cta-band">
        <div className="rbk-cta-band-inner">
          <div>
            <h2>Pronto para abastecer?</h2>
            <p>Fale com o comercial ou peça o catálogo. Atendimento de segunda a sexta, 8h às 18h.</p>
          </div>
          <div className="rbk-cta-band-actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-btn-on-brand">
              WhatsApp comercial
            </a>
            <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="rbk-btn-on-brand-outline">
              Pedir catálogo
            </a>
            <Link href={`${BASE}/contato`} className="rbk-btn-on-brand-outline">
              Formulário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
