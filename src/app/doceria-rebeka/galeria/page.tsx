import type { Metadata } from "next";
import { GalleryGrid } from "../components/GalleryGrid";
import { PageHero } from "../components/PageHero";
import { BASE, SITE, VIDEOS } from "../data";
import { PREVIEW_URL } from "../seo";

export const metadata: Metadata = {
  title: { absolute: `Galeria e vídeos | ${SITE.name}` },
  description:
    "Fotos e vídeos dos pudins e brigadeirões da Doceria da Rebeka. Acompanhe bastidores no Instagram @doceria.darebeka.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/galeria` },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        title="Galeria e vídeos"
        description={`Delícias que conquistam no olhar e no sabor. Toque na foto para ampliar. Instagram ${SITE.instagramHandle}.`}
        breadcrumb={[
          { label: "Home", href: BASE },
          { label: "Galeria" },
        ]}
      >
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="rbk-btn-solid">
          Ver no Instagram
        </a>
      </PageHero>

      <div className="rbk-content">
        <GalleryGrid />
      </div>

      <section className="rbk-section rbk-section--cream">
        <div className="rbk-section-head">
          <div>
            <p className="rbk-kicker">Assista</p>
            <h2>Bastidores da fábrica e da gôndola</h2>
            <p className="rbk-section-sub">Em breve no YouTube. Por enquanto, no Instagram da marca.</p>
          </div>
        </div>
        <div className="rbk-video-grid">
          {VIDEOS.map((v) => (
            <a key={v.id} href={v.ctaHref} target="_blank" rel="noopener noreferrer" className="rbk-video-card">
              <div className="rbk-video-thumb">
                <img src={v.thumb} alt="" />
                <span className="rbk-play">▶</span>
                <span className="rbk-video-tag">Em breve</span>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
