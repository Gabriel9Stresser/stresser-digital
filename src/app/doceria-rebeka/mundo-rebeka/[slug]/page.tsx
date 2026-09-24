import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";
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
      <PageHero
        title={article.title}
        description={article.excerpt}
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Mundo Rebeka", href: `${BASE}/mundo-rebeka` },
          { label: "Artigo" },
        ]}
      />

      <div className="rbk-content" style={{ maxWidth: "48rem" }}>
        <div className="aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-cream border border-border mb-10">
          <img src={article.cover} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="rbk-prose">
          {article.body.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </div>
      </div>

      <section className="cm-newsletter">
        <div className="cm-container cm-center">
          <h2>Quer levar esses produtos ao seu mercado?</h2>
          <p>Fale com o comercial no WhatsApp {SITE.phoneDisplay}.</p>
          <div className="cm-nl-actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="cm-btn-dark">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <div className="rbk-content">
          <div className="rbk-section-head">
            <div>
              <p className="rbk-kicker">Continue lendo</p>
              <h2>Mais no Mundo Rebeka</h2>
            </div>
          </div>
          <div className="rbk-news-grid">
            {related.map((a) => (
              <Link key={a.slug} href={`${BASE}/mundo-rebeka/${a.slug}`} className="rbk-news-card">
                <div className="rbk-news-media">
                  <img src={a.cover} alt="" />
                </div>
                <div className="rbk-news-body">
                  <span>{a.category}</span>
                  <h3>{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
