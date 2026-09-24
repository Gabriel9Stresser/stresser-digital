import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";
import { BASE, PRODUCTS, SITE, getProductBySlug, waLink } from "../../data";
import { PREVIEW_URL } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: SITE.name };
  return {
    title: { absolute: `${product.name} | ${SITE.name}` },
    description: product.desc,
    robots: { index: false, follow: false },
    alternates: { canonical: `${PREVIEW_URL}/produtos/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${SITE.name}`,
      description: product.desc,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const other = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <>
      <PageHero
        eyebrow={product.badge}
        title={product.name}
        description={product.longDesc}
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Produtos", href: `${BASE}/produtos` },
          { label: product.shortName },
        ]}
      >
        <a href={waLink(product.waText)} target="_blank" rel="noopener noreferrer" className="rbk-btn-solid">
          Pedir no WhatsApp
        </a>
        <Link href={`${BASE}/produtos`} className="rbk-btn-ghost">
          Todos os produtos
        </Link>
      </PageHero>

      <div className="rbk-content">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <div className="aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-cream border border-border">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-display text-2xl md:text-3xl text-navy">Especificações</h2>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {product.specs.map((s) => (
                <div key={s.label} className="rounded-xl bg-cream border border-border px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-navy/50 font-semibold">{s.label}</dt>
                  <dd className="mt-1 text-base font-semibold text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-10 font-display text-xl text-navy">Destaques</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.points.map((point) => (
                <li key={point} className="rounded-full bg-cream text-navy text-sm font-medium px-4 py-2 border border-border">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {other.length > 0 && (
        <section className="rbk-section rbk-section--cream">
          <div className="rbk-section-head" style={{ maxWidth: "84rem", margin: "0 auto 2rem", padding: "0 1.25rem" }}>
            <div>
              <p className="rbk-kicker">Também no mix</p>
              <h2>Complete a gôndola</h2>
            </div>
          </div>
          <div className="rbk-product-grid" style={{ maxWidth: "84rem", margin: "0 auto", padding: "0 1.25rem" }}>
            {other.map((p) => (
              <article key={p.id} className="rbk-product-card">
                <Link href={`${BASE}/produtos/${p.slug}`} className="rbk-product-card-media">
                  <img src={p.image} alt={p.name} />
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
      )}
    </>
  );
}
