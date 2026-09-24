import type { Metadata } from "next";
import { LeadForm } from "../components/LeadForm";
import { PageHero } from "../components/PageHero";
import { SITE, WA } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Contato | ${SITE.name}` },
  description: `Fale com o comercial da Doceria da Rebeka. WhatsApp ${SITE.phoneDisplay}, e-mail ${SITE.email}. Fábrica em São José dos Campos/SP.`,
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/contato` },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Fale com a <em className="not-italic text-primary">Doceria da Rebeka</em>.
          </>
        }
        description="Quer levar nossos produtos para o seu mercado ou distribuidora? Fale com o time comercial."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-editorial grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <div className="space-y-4 text-navy">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="border-l-2 border-primary/40 pl-4 group-hover:border-primary transition-colors">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">WhatsApp</div>
                  <div className="mt-1 text-navy leading-snug">{SITE.phoneDisplay}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{SITE.hours}</div>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="block group">
                <div className="border-l-2 border-primary/40 pl-4 group-hover:border-primary transition-colors">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">E-mail</div>
                  <div className="mt-1 text-navy leading-snug">{SITE.email}</div>
                </div>
              </a>
              <div className="border-l-2 border-primary/40 pl-4">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">Endereço</div>
                <div className="mt-1 text-navy leading-snug">
                  {SITE.address}, {SITE.addressDetail}, {SITE.city}, {SITE.cep}
                </div>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Como chegar no Google Maps
                </a>
              </div>
              <div className="border-l-2 border-primary/40 pl-4">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">Redes</div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-navy hover:text-primary"
                  >
                    Instagram {SITE.instagramHandle}
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-navy hover:text-primary"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <iframe
              className="rbk-map mt-8 w-full min-h-[240px] rounded-2xl border border-border"
              title="Mapa da Doceria da Rebeka em São José dos Campos"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
