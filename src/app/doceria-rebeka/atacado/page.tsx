import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "../components/LeadForm";
import { PageHero } from "../components/PageHero";
import { BASE, BUY_STEPS, SITE, WA, WA_CATALOG, WHOLESALE } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Atacado e como comprar | ${SITE.name}` },
  description:
    "Como comprar pudim e brigadeirão no atacado da Doceria da Rebeka. Mercados, redes e distribuidores. WhatsApp comercial em São José dos Campos.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/atacado` },
};

export default function AtacadoPage() {
  return (
    <>
      <PageHero
        title="Atacado"
        description="Leve a Doceria da Rebeka para o seu mercado. Atendimento B2B para redes, mercados e distribuidores em todo o Brasil."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Atacado" },
        ]}
      >
        <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-btn-solid">
          Começar pelo WhatsApp
        </a>
        <Link href={SITE.catalogPath} className="rbk-btn-ghost">
          Ver catálogo
        </Link>
      </PageHero>

      <div className="rbk-content">
        <div className="rbk-section-head rbk-section-head--center" style={{ marginBottom: "2.5rem" }}>
          <p className="rbk-kicker">Como comprar</p>
          <h2>Do contato ao abastecimento em 3 passos</h2>
        </div>
        <div className="rbk-diff-grid" style={{ marginBottom: "4rem" }}>
          {BUY_STEPS.map((s) => (
            <div key={s.step} className="rbk-diff-card">
              <span className="rbk-diff-num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="rbk-section-head">
          <div>
            <p className="rbk-kicker">Por que comprar conosco</p>
            <h2>Benefícios pensados para o varejo</h2>
            <p className="rbk-section-sub">
              Horário: {SITE.hours}. Abrangência: {SITE.serviceArea}.
            </p>
          </div>
        </div>
        <div className="rbk-wholesale-grid">
          {WHOLESALE.map((s) => (
            <div key={s.step} className="rbk-wholesale-item">
              <span>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="rbk-section rbk-section--cream">
        <div style={{ maxWidth: "84rem", margin: "0 auto", padding: "0 1.25rem" }}>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="rbk-kicker">Fale com o comercial</p>
              <h2 className="font-display text-3xl text-navy mt-3">Conte sobre o seu negócio</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Prefere WhatsApp? Chame no {SITE.phoneDisplay}. Ou envie o formulário.
              </p>
              <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 inline-flex">
                Pedir catálogo
              </a>
            </div>
            <div className="lg:col-span-7">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
