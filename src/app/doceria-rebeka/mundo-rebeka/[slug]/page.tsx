import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, BASE, SITE, WA, getArticleBySlug } from "../../data";
import { PREVIEW_URL } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: SITE.name };
  return {
    title: { absolute: `${article.title} | Mundo Rebeka` },
    description: article.excerpt,
    robots: { index: false, follow: false },
    alternates: { canonical: `${PREVIEW_URL}/mundo-rebeka/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.cover }],
      type: "article",
    },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
          <div className="container-editorial max-w-3xl">
            <Link
              href={`${BASE}/mundo-rebeka`}
              className="text-sm font-semibold text-primary hover:underline"
            >
              ← Mundo Rebeka
            </Link>
            <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest">
              <span className="text-primary">{article.category}</span>
              <span className="text-navy/40">·</span>
              <time className="text-navy/50" dateTime={article.date}>
                {article.dateLabel}
              </time>
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-navy">{article.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
          </div>
        </header>

        <div className="container-editorial max-w-3xl pb-8">
          <div className="aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-cream border border-border">
            <img src={article.cover} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="container-editorial max-w-3xl pb-16 md:pb-24">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {article.body.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-navy text-white p-8 md:p-10">
            <h2 className="font-display text-2xl text-white">Quer levar esses produtos ao seu mercado?</h2>
            <p className="mt-3 text-white/75">
              Fale com o comercial no WhatsApp {SITE.phoneDisplay}. Atendimento de {SITE.hours.toLowerCase()}.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-cream/60">
          <div className="container-editorial">
            <h2 className="font-display text-2xl md:text-3xl text-navy">Continue lendo</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`${BASE}/mundo-rebeka/${a.slug}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-cream">
                    <img src={a.cover} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{a.category}</span>
                    <h3 className="mt-2 font-display text-xl text-navy group-hover:text-primary transition-colors">{a.title}</h3>
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
