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
        eyebrow="Atacado B2B"
        title={
          <>
            Leve a Doceria da Rebeka para o <em className="not-italic text-primary">seu mercado</em>.
          </>
        }
        description="Atendemos mercados, redes varejistas e distribuidores que buscam produtos com excelente aceitação, apresentação atrativa e padrão de qualidade."
      >
        <div className="flex flex-wrap gap-3">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Começar pelo WhatsApp
          </a>
          <Link href={SITE.catalogPath} className="btn-outline">
            Ver catálogo
          </Link>
          <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Pedir catálogo
          </a>
        </div>
      </PageHero>

      <section className="pb-16 md:pb-20">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <span className="eyebrow">Como comprar</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-navy">
              Do contato ao abastecimento em 3 passos
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {BUY_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl bg-card border border-border p-6 md:p-8">
                <div className="font-display text-3xl text-primary">{s.step}</div>
                <h3 className="mt-4 font-display text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream/60">
        <div className="container-editorial grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Por que comprar conosco</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-navy">
              Benefícios pensados para o varejo.
            </h2>
            <div className="mt-6 space-y-2 text-sm text-navy/80">
              <p>
                <strong className="text-navy">Horário:</strong> {SITE.hours}
              </p>
              <p>
                <strong className="text-navy">Abrangência:</strong> {SITE.serviceArea}
              </p>
            </div>
            <Link href={`${BASE}/contato`} className="btn-outline mt-8 inline-flex">
              Ir para o formulário
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {WHOLESALE.map((s) => (
                <div
                  key={s.step}
                  className="group rounded-2xl bg-card border border-border p-6 flex items-start gap-4 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm">
                    {s.step}
                  </div>
                  <div>
                    <span className="font-medium text-navy leading-snug block">{s.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-editorial grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <span className="eyebrow">Fale com o comercial</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-navy">
              Conte sobre o seu negócio.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Prefere WhatsApp? Chame no {SITE.phoneDisplay}. Ou envie o formulário e abrimos a conversa com seus dados.
            </p>
          </div>
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
