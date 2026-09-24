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
      >
        <div className="flex flex-wrap gap-3">
          <a href={waLink(product.waText)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Pedir {product.shortName} no WhatsApp
          </a>
          <Link href={`${BASE}/produtos`} className="btn-outline">
            Todos os produtos
          </Link>
        </div>
      </PageHero>

      <section className="pb-16 md:pb-24">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <div className="aspect-[5/4] overflow-hidden rounded-[2rem] bg-cream border border-border shadow-[0_30px_60px_-30px_rgba(30,43,94,0.25)]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" width={1200} height={960} />
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
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Atendimento exclusivo no atacado para mercados, redes e distribuidores. Fábrica em {SITE.cityShort}.
            </p>
          </div>
        </div>
      </section>

      {other.length > 0 && (
        <section className="py-16 md:py-20 bg-cream/60">
          <div className="container-editorial">
            <h2 className="font-display text-2xl md:text-3xl text-navy">Também no mix</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-3xl">
              {other.map((p) => (
                <Link
                  key={p.id}
                  href={`${BASE}/produtos/${p.slug}`}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <img src={p.image} alt="" className="h-24 w-24 rounded-xl object-cover shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{p.badge}</span>
                    <h3 className="mt-1 font-display text-lg text-navy">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
