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
        title="Nossos produtos"
        description="Explore a linha de pudim e brigadeirão no atacado. Porções individuais prontas para gôndola e vitrine."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Produtos" },
        ]}
      >
        <Link href={SITE.catalogPath} className="rbk-btn-ghost">
          Catálogo para imprimir
        </Link>
        <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="rbk-btn-solid">
          Pedir catálogo
        </a>
      </PageHero>

      <div className="rbk-content">
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
                <dl className="grid grid-cols-2 gap-2 mt-2">
                  {p.specs.map((s) => (
                    <div key={s.label} className="rounded-xl bg-cream border border-border px-3 py-2">
                      <dt className="text-[10px] uppercase tracking-widest text-navy/50 font-semibold">{s.label}</dt>
                      <dd className="text-sm font-semibold text-navy">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link href={`${BASE}/produtos/${p.slug}`} className="rbk-link-more">
                    Saiba mais
                  </Link>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-link-more" style={{ color: "var(--navy)" }}>
                    Pedir no WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="rbk-cta-band">
        <div className="rbk-cta-band-inner">
          <div>
            <h2>Quer montar o mix certo?</h2>
            <p>O comercial ajuda a alinhar volumes de pudim e brigadeirão para o seu perfil de loja.</p>
          </div>
          <div className="rbk-cta-band-actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-btn-on-brand">
              Chamar no WhatsApp
            </a>
            <Link href={`${BASE}/atacado`} className="rbk-btn-on-brand-outline">
              Como comprar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
