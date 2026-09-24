import type { Metadata } from "next";
import { GalleryGrid } from "../components/GalleryGrid";
import { PageHero } from "../components/PageHero";
import { SITE, VIDEOS } from "../data";
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
        eyebrow="Galeria e vídeos"
        title={
          <>
            Delícias que conquistam no <em className="not-italic text-primary">olhar e no sabor</em>.
          </>
        }
        description={`Toque na foto para ampliar. Acompanhe também o Instagram ${SITE.instagramHandle}.`}
      >
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">
          Ver no Instagram {SITE.instagramHandle}
        </a>
      </PageHero>

      <section className="pb-16 md:pb-20">
        <div className="container-editorial">
          <GalleryGrid />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream/60">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <span className="eyebrow">Assista</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-navy">
              Vídeos da fábrica e da gôndola
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Em breve no YouTube. Por enquanto, os bastidores estão no Instagram da marca.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={v.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-video bg-navy/10">
                  <img
                    src={v.thumb}
                    alt=""
                    className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg text-xl"
                      aria-hidden
                    >
                      ▶
                    </span>
                  </span>
                  <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy">
                    Em breve
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary">{v.ctaLabel}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
