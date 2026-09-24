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
        title="Quem somos"
        description="Somos a Doceria da Rebeka: fábrica joseense de pudim e brigadeirão no atacado, com sabor de casa e escala para abastecer o Brasil."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Quem somos" },
        ]}
      />

      <div className="rbk-content">
        <div className="rbk-prose" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p>
            A Doceria da Rebeka nasceu com o propósito de entregar doces que despertam memórias afetivas e conquistam pela
            primeira colherada. Com sede em São José dos Campos/SP, somos especialistas na produção de pudins e
            brigadeirões, atendendo exclusivamente no atacado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ marginBottom: "4rem" }}>
          <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
            <img src={SITE.aboutPhoto} alt="Pudim artesanal da Doceria da Rebeka" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="rbk-kicker">A fábrica</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-3 leading-tight">
              Produção em São José dos Campos, alcance nacional
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              Na Rodovia Geraldo Scavone produzimos em escala com padrão de textura, calda, conservação e apresentação.
              O resultado chega pronto para gôndolas e vitrines de mercados e distribuidores em todo o país.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Mais do que doces, entregamos parceria comercial e produtos preparados para girar no ponto de venda.
            </p>
          </div>
        </div>
      </div>

      <section className="rbk-commit">
        <div className="rbk-commit-copy">
          <p className="rbk-kicker rbk-kicker--on-dark">Presença</p>
          <h2>Uma marca com escala e proximidade</h2>
          <p>
            Estamos em mais de 11 mil pontos de venda. Atendemos só B2B: mercados, redes e distribuidores. Horário
            comercial de segunda a sexta, das 8h às 18h.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-btn-solid rbk-btn-solid--rose">
            Falar com o comercial
          </a>
        </div>
        <div className="rbk-commit-stats">
          {PROOF.map((item) => (
            <div key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="rbk-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="rbk-kicker">Qualidade</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-3 leading-tight">
              Sabor caseiro com padrão profissional
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Cada lote segue o mesmo cuidado: textura, sabor e apresentação constantes. O consumidor sente na
              colherada. O varejista sente no giro.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {["Textura", "Sabor", "Conservação"].map((label) => (
                <div key={label} className="border-t-2 border-primary/40 pt-3">
                  <div className="text-xs text-muted-foreground">Padrão</div>
                  <div className="font-display text-lg text-navy">{label}</div>
                </div>
              ))}
            </div>
            <Link href={`${BASE}/produtos`} className="btn-outline mt-8 inline-flex">
              Ver produtos
            </Link>
          </div>
          <div className="aspect-[4/5] max-h-[480px] overflow-hidden rounded-[1.5rem] mx-auto w-full max-w-md">
            <img src={SITE.qualityPhoto} alt="Detalhe da qualidade do pudim" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
