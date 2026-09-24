import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { ARTICLES, BASE, SITE } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Mundo Rebeka | ${SITE.name}` },
  description:
    "Artigos e conhecimento da Doceria da Rebeka: gôndola, mix de produtos, bastidores da fábrica e como comprar no atacado.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/mundo-rebeka` },
};

export default function MundoRebekaPage() {
  return (
    <>
      <PageHero
        eyebrow="Mundo Rebeka"
        title={
          <>
            Conhecimento para quem vende <em className="not-italic text-primary">doce no atacado</em>.
          </>
        }
        description="Dicas de ponto de venda, mix de produtos e bastidores da fábrica joseense. Conteúdo para mercados e distribuidores."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`${BASE}/mundo-rebeka/${a.slug}`}
              className="group rounded-[1.5rem] border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors shadow-[0_12px_40px_-28px_rgba(30,43,94,0.3)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cream">
                <img
                  src={a.cover}
                  alt=""
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest">
                  <span className="text-primary">{a.category}</span>
                  <span className="text-navy/40">·</span>
                  <time className="text-navy/50" dateTime={a.date}>
                    {a.dateLabel}
                  </time>
                </div>
                <h2 className="mt-3 font-display text-2xl text-navy leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-primary">Ler artigo</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
