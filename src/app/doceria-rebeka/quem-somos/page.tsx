import type { Metadata } from "next";
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
        description="Somos a Doceria da Rebeka: fábrica joseense de pudim e brigadeirão no atacado, com sabor de casa e escala para abastecer o Brasil. O alto padrão de qualidade, alinhado à praticidade dos nossos produtos, tem feito da marca uma parceira de mercados e distribuidores em todo o país."
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Quem somos" },
        ]}
      />

      <section className="cm-section cm-section--white">
        <div className="cm-container">
          <div className="cm-about-grid">
            <div>
              <h2 className="cm-h2 cm-h2--left">A Doceria da Rebeka</h2>
              <p className="cm-body">
                A Doceria da Rebeka nasceu com o propósito de entregar doces que despertam memórias afetivas e conquistam
                pela primeira colherada. Com sede em São José dos Campos/SP, somos especialistas na produção de pudins e
                brigadeirões, atendendo exclusivamente no atacado.
              </p>
              <p className="cm-body">
                Rompendo a ideia de que escala e sabor caseiro não combinam, acumulamos presença em mais de 11 mil pontos
                de venda. Mais do que doces, entregamos parceria comercial e produtos preparados para girar na gôndola.
              </p>
            </div>
            <div className="cm-about-photo">
              <img src={SITE.aboutPhoto} alt="Pudim artesanal da Doceria da Rebeka" />
            </div>
          </div>
        </div>
      </section>

      <section className="cm-section cm-section--muted">
        <div className="cm-container cm-center">
          <h2 className="cm-h2">Qualidade</h2>
          <p className="cm-sub">
            Mantemos padrão rigoroso em cada etapa: textura, calda, conservação e apresentação. O consumidor sente na
            colherada. O varejista sente no giro.
          </p>
          <div className="cm-diff-grid">
            {["Textura", "Sabor", "Conservação", "Apresentação"].map((label) => (
              <div key={label} className="cm-diff-card">
                <div className="cm-diff-icon">●</div>
                <h3>{label}</h3>
                <p>Padrão constante em cada lote que sai da fábrica joseense.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cm-compromisso">
        <div className="cm-container cm-center">
          <h2>Presença nacional</h2>
          <p>Números que mostram a escala da Doceria da Rebeka no atacado brasileiro.</p>
          <div className="cm-stats">
            {PROOF.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="cm-btn-dark">
            Falar com o comercial
          </a>
        </div>
      </section>
    </>
  );
}
