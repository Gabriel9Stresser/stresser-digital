import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { BASE, FAQ, SITE, WA } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Dúvidas frequentes | ${SITE.name}` },
  description:
    "Perguntas sobre atacado, produtos e contato comercial da Doceria da Rebeka. Pudim e brigadeirão para mercados e distribuidores.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/duvidas` },
};

export default function DuvidasPage() {
  return (
    <>
      <PageHero
        title="Dúvidas frequentes"
        description="Respostas objetivas sobre atacado, produtos e contato comercial da Doceria da Rebeka."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Dúvidas" },
        ]}
      />

      <div className="rbk-content" style={{ maxWidth: "48rem" }}>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <details key={item.q} className="rbk-faq-item group rounded-2xl bg-card border border-border p-5 md:p-6">
              <summary className="font-display text-lg md:text-xl text-navy cursor-pointer list-none flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span className="rbk-faq-plus text-primary shrink-0" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Tirar dúvida no WhatsApp
          </a>
          <Link href={`${BASE}/contato`} className="btn-outline">
            Ir para contato
          </Link>
        </div>
      </div>
    </>
  );
}
