import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { BASE, PRODUCTS, SITE, WA, WA_CATALOG } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Produtos | ${SITE.name}` },
  description:
    "Pudim de 120g e Brigadeirão de 80g no atacado. Porções individuais prontas para gôndola e vitrine. Doceria da Rebeka, São José dos Campos.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/produtos` },
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        title="Nossos Produtos"
        description="Explore nossa linha de pudim e brigadeirão no atacado. Porções individuais prontas para gôndola e vitrine."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Produtos" },
        ]}
      >
        <Link href={SITE.catalogPath} className="cm-btn-outline-on-brand">
          Catálogo para imprimir
        </Link>
        <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="cm-btn-dark">
          Pedir catálogo
        </a>
      </PageHero>

      <section className="cm-section cm-section--soft">
        <div className="cm-container">
          <div className="cm-prod-page-grid">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="cm-p-card cm-p-card--page">
                <span className="cm-p-badge">{p.badge}</span>
                <Link href={`${BASE}/produtos/${p.slug}`} className="cm-p-img">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </Link>
                <div className="cm-p-body">
                  <h3>
                    <Link href={`${BASE}/produtos/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p className="cm-p-desc">{p.desc}</p>
                  <Link href={`${BASE}/produtos/${p.slug}`} className="cm-saiba">
                    Saiba Mais
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cm-newsletter">
        <div className="cm-container cm-center">
          <h2>Quer montar o mix certo?</h2>
          <p>O comercial ajuda a alinhar volumes de pudim e brigadeirão para o seu perfil de loja.</p>
          <div className="cm-nl-actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="cm-btn-dark">
              Chamar no WhatsApp
            </a>
            <Link href={`${BASE}/atacado`} className="cm-btn-outline-dark">
              Como comprar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
