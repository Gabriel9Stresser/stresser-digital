import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { BASE, PROOF, SITE, WA } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Quem somos | ${SITE.name}` },
  description:
    "História da Doceria da Rebeka em São José dos Campos. Fábrica de pudim e brigadeirão no atacado, com presença em mais de 11 mil pontos de venda no Brasil.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/quem-somos` },
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={
          <>
            Uma história feita de sabor, <em className="not-italic text-primary">cuidado e confiança</em>.
          </>
        }
        description="A Doceria da Rebeka nasceu para entregar doces que despertam memórias afetivas e conquistam pela primeira colherada. Sede em São José dos Campos, foco 100% no atacado."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-editorial grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(30,43,94,0.3)]">
              <img
                src={SITE.aboutPhoto}
                alt="Pudim artesanal da Doceria da Rebeka"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={1500}
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 aspect-square w-52 overflow-hidden rounded-2xl border-8 border-background shadow-xl">
              <img src={SITE.gallery[1].src} alt={SITE.gallery[1].alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <span className="eyebrow">Nossa história</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl leading-tight text-navy">
              Especialistas em pudim e brigadeirão para o varejo.
            </h2>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
              Com fábrica na Rodovia Geraldo Scavone, em São José dos Campos/SP, produzimos em escala com padrão de
              qualidade, praticidade e consistência. Atendemos mercados, redes varejistas e distribuidores em todo o
              Brasil.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Mais do que doces, entregamos parceria e produtos preparados para se destacar nas gôndolas, vitrines e
              pontos de venda.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-navy/80">
              <span className="h-px w-10 bg-primary" />
              <span className="font-medium">Sede em São José dos Campos, São Paulo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy text-white">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <span className="eyebrow text-pudim">Presença nacional</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-white">Números que contam a nossa escala.</h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF.map((item) => (
              <div key={item.title} className="border-t border-white/15 pt-6">
                <div className="font-display text-2xl md:text-3xl text-pudim leading-tight">{item.title}</div>
                <p className="mt-3 text-sm md:text-base text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Qualidade</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-navy">
              Sabor caseiro com padrão profissional.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Cada produto segue padrão de produção para garantir textura, sabor, conservação e apresentação constante no
              ponto de venda. O consumidor sente na colherada. O varejista sente no giro.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {["Textura", "Sabor", "Conservação"].map((label) => (
                <div key={label} className="border-t-2 border-primary/30 pt-3">
                  <div className="text-xs text-muted-foreground">Padrão</div>
                  <div className="font-display text-lg text-navy">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Fale com o comercial
              </a>
              <Link href={`${BASE}/produtos`} className="btn-outline">
                Ver produtos
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[480px] overflow-hidden rounded-[2rem] shadow-2xl mx-auto w-full max-w-md">
            <img src={SITE.qualityPhoto} alt="Detalhe da qualidade do pudim" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
