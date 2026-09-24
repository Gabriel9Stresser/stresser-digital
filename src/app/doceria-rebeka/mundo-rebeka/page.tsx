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
        title="Mundo Rebeka"
        description="Conhecimento para quem vende doce no atacado. Dicas de gôndola, mix e bastidores da fábrica joseense."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Mundo Rebeka" },
        ]}
      />

      <div className="rbk-content">
        <div className="rbk-news-grid">
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`${BASE}/mundo-rebeka/${a.slug}`} className="rbk-news-card">
              <div className="rbk-news-media">
                <img src={a.cover} alt="" loading="lazy" />
              </div>
              <div className="rbk-news-body">
                <span>
                  {a.category} · {a.dateLabel}
                </span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
