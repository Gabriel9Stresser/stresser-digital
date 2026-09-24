"use client";

import { useState } from "react";
import { SITE } from "../data";

const SLIDES = [
  {
    src: SITE.heroPhoto,
    title: "O doce que conquista o Brasil",
    sub: "Pudim e brigadeirão no atacado, direto da fábrica joseense.",
  },
  {
    src: SITE.pudimPhoto,
    title: "Pudim de 120g",
    sub: "Campeão de vendas. Pronto para a gôndola.",
  },
  {
    src: SITE.brigadeiroPhoto,
    title: "Brigadeirão de 80g",
    sub: "Chocolate intenso com alto apelo de vitrine.",
  },
  {
    src: SITE.aboutPhoto,
    title: "+11 mil pontos de venda",
    sub: "Presença nacional para mercados e distribuidores.",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const slide = SLIDES[i];

  return (
    <section className="cm-hero">
      <div className="cm-hero-slide">
        <img src={slide.src} alt="" className="cm-hero-img" />
        <div className="cm-hero-veil" />
        <div className="cm-hero-copy">
          <p className="cm-hero-badge">Doceria da Rebeka</p>
          <h1>{slide.title}</h1>
          <p>{slide.sub}</p>
        </div>
      </div>
      <button type="button" className="cm-arrow cm-arrow--prev" aria-label="Anterior" onClick={() => setI((n) => (n - 1 + SLIDES.length) % SLIDES.length)}>
        ‹
      </button>
      <button type="button" className="cm-arrow cm-arrow--next" aria-label="Próximo" onClick={() => setI((n) => (n + 1) % SLIDES.length)}>
        ›
      </button>
      <div className="cm-hero-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === i ? "is-active" : undefined}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
