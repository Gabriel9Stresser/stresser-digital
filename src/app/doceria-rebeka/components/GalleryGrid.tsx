"use client";

import { useEffect, useState } from "react";
import { SITE } from "../data";

export function GalleryGrid({ images = SITE.gallery }: { images?: { src: string; alt: string }[] }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((g, i) => (
          <button
            key={g.src + g.alt}
            type="button"
            className={`group relative overflow-hidden rounded-2xl bg-cream text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
              i === 0 || i === 3 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5] lg:aspect-square"
            }`}
            onClick={() => setLightbox(g)}
            aria-label={`Ampliar: ${g.alt}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              loading="lazy"
              width={800}
              height={1000}
            />
          </button>
        ))}
      </div>
      {lightbox && (
        <div className="rbk-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt}>
          <button type="button" className="rbk-lightbox-backdrop" aria-label="Fechar" onClick={() => setLightbox(null)} />
          <div className="rbk-lightbox-inner">
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="rbk-lightbox-caption">{lightbox.alt}</p>
            <button type="button" className="rbk-lightbox-close" onClick={() => setLightbox(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
