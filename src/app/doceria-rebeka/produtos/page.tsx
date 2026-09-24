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
        eyebrow="Produtos"
        title={
          <>
            Receitas que criam memórias, da primeira à <em className="not-italic text-primary">última colherada</em>.
          </>
        }
        description="Dois campeões desenvolvidos para performar no ponto de venda e encantar quem prova. Atacado para mercados e distribuidores."
      >
        <div className="flex flex-wrap gap-3">
          <Link href={SITE.catalogPath} className="btn-outline">
            Catálogo para imprimir
          </Link>
          <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Pedir catálogo no WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="pb-20 md:pb-28">
        <div className="container-editorial grid md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-[2rem] bg-card border border-border overflow-hidden shadow-[0_18px_50px_-30px_rgba(30,43,94,0.25)]"
            >
              <Link href={`${BASE}/produtos/${p.slug}`} className="relative aspect-[5/4] overflow-hidden bg-cream block">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={960}
                />
                <span className="absolute top-5 left-5 rounded-full bg-background/90 backdrop-blur px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.badge}
                </span>
              </Link>
              <div className="p-8 md:p-10 flex flex-col grow">
                <h2 className="font-display text-2xl md:text-3xl text-navy">{p.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3">
                  {p.specs.map((s) => (
                    <div key={s.label} className="rounded-xl bg-cream border border-border px-3 py-2.5">
                      <dt className="text-[10px] uppercase tracking-widest text-navy/50 font-semibold">{s.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-navy">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.points.map((point) => (
                    <li key={point} className="rounded-full bg-cream text-navy text-xs font-medium px-3 py-1.5 border border-border">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`${BASE}/produtos/${p.slug}`} className="btn-outline">
                    Ver detalhes
                  </Link>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Pedir no WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
