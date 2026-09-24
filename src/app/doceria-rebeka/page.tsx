import Link from "next/link";
import { HeroSlider } from "./components/HeroSlider";
import { ProductQuickLinks, ProductSlider } from "./components/ProductSlider";
import { ARTICLES, BASE, SITE, VIDEOS, WA, WA_CATALOG } from "./data";

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

const MARQUEE = [
  "Produto pronto para a gôndola",
  "Alta aceitação no ponto de venda",
  "Fábrica em São José dos Campos",
  "Atacado nacional",
  "Pudim campeão de vendas",
  "Brigadeirão de alto apelo visual",
];

export default function DoceriaRebekaHome() {
  return (
    <>
      <HeroSlider />

      {/* Presença / partners */}
      <section className="cm-section cm-section--white">
        <div className="cm-container cm-center">
          <h2 className="cm-h2">A Rebeka está presente no caminho do consumidor</h2>
          <div className="cm-presence-row">
            <div>
              <strong>+11 mil</strong>
              <span>PDVs no Brasil</span>
            </div>
            <div>
              <strong>SJC</strong>
              <span>Fábrica joseense</span>
            </div>
            <div>
              <strong>B2B</strong>
              <span>Só atacado</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Campeões de giro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias / Instagram style */}
      <section className="cm-section cm-section--muted">
        <div className="cm-container cm-center">
          <h2 className="cm-h2">Notícias Rebeka</h2>
          <p className="cm-sub">Acompanhe bastidores, lançamentos e a marca no Instagram.</p>
          <div className="cm-ig-row">
            {VIDEOS.map((v) => (
              <a key={v.id} href={v.ctaHref} target="_blank" rel="noopener noreferrer" className="cm-ig-card">
                <img src={v.thumb} alt="" />
                <span className="cm-ig-play">▶</span>
                <span className="cm-ig-cap">{v.title}</span>
              </a>
            ))}
            {SITE.gallery.slice(0, 3).map((g) => (
              <a key={g.src} href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="cm-ig-card">
                <img src={g.src} alt={g.alt} />
                <span className="cm-ig-cap">{g.alt}</span>
              </a>
            ))}
          </div>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="cm-text-link">
            Siga a Doceria da Rebeka no Instagram ›
          </a>
        </div>
      </section>

      {/* Busca */}
      <section className="cm-section cm-section--white">
        <div className="cm-container cm-center">
          <ProductQuickLinks />
        </div>
      </section>

      {/* Marquee */}
      <section className="cm-marquee" aria-hidden>
        <div className="cm-marquee-track">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={`${t}-${i}`}>{t}</span>
          ))}
        </div>
      </section>

      {/* Produtos */}
      <section className="cm-section cm-section--soft">
        <div className="cm-container cm-center">
          <h2 className="cm-h2">Nossos Produtos</h2>
          <p className="cm-sub">Conheça nossa linha completa para o atacado</p>
          <ProductSlider />
          <Link href={`${BASE}/produtos`} className="cm-text-link">
            Ver Todos os Produtos ›
          </Link>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="cm-section cm-section--muted">
        <div className="cm-container cm-center">
          <h2 className="cm-h2">O que nos torna diferentes</h2>
          <p className="cm-sub">Nossa expertise e compromisso com o varejo brasileiro</p>
          <div className="cm-diff-grid">
            {DIFFS.map((d, i) => (
              <div key={d.title} className="cm-diff-card">
                <div className="cm-diff-icon" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso - faixa brand full width */}
      <section className="cm-compromisso">
        <div className="cm-container cm-center">
          <h2>Nosso compromisso é com você</h2>
          <p>
            Acreditamos que um doce bem feito transforma a gôndola e o dia a dia de quem compra. Por isso trabalhamos
            todos os dias para unir sabor caseiro, qualidade e escala. Levando pudim e brigadeirão para milhares de
            famílias brasileiras, nossa missão é fazer parte da jornada do seu mercado.
          </p>
          <div className="cm-stats">
            <div>
              <strong>11 mil+</strong>
              <span>pontos de venda no Brasil</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>foco em atacado B2B</span>
            </div>
            <div>
              <strong>SJC</strong>
              <span>produção em São José dos Campos</span>
            </div>
          </div>
          <Link href={`${BASE}/quem-somos`} className="cm-btn-dark">
            Conheça Nossa História
          </Link>
        </div>
      </section>

      {/* Últimas novidades */}
      <section className="cm-section cm-section--white">
        <div className="cm-container cm-center">
          <h2 className="cm-h2">Últimas Novidades</h2>
          <p className="cm-sub">Conhecimento e bastidores no Mundo Rebeka</p>
          <div className="cm-news-grid">
            {ARTICLES.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`${BASE}/mundo-rebeka/${a.slug}`} className="cm-news-card">
                <img src={a.cover} alt="" />
                <div>
                  <span>{a.category}</span>
                  <h3>{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <Link href={`${BASE}/mundo-rebeka`} className="cm-text-link">
            Ver Mundo Rebeka ›
          </Link>
        </div>
      </section>

      {/* Newsletter band */}
      <section className="cm-newsletter">
        <div className="cm-container cm-center">
          <div className="cm-nl-icon" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2>Fique por dentro das novidades</h2>
          <p>Fale com o comercial ou peça o catálogo. Atendimento de segunda a sexta, 8h às 18h.</p>
          <div className="cm-nl-actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="cm-btn-dark">
              WhatsApp comercial
            </a>
            <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="cm-btn-outline-dark">
              Pedir catálogo
            </a>
            <Link href={`${BASE}/contato`} className="cm-btn-outline-dark">
              Formulário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
