"use client";

import Link from "next/link";
import { useRef } from "react";
import { BASE, PRODUCTS, waLink } from "../data";

export function ProductSlider() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div className="cm-prod-slider-wrap">
      <button type="button" className="cm-arrow cm-arrow--prev" aria-label="Anterior" onClick={() => scroll(-1)}>
        ‹
      </button>
      <div className="cm-prod-slider" ref={ref}>
        {PRODUCTS.map((p) => (
          <article key={p.id} className="cm-p-card">
            <span className="cm-p-badge">{p.badge}</span>
            <Link href={`${BASE}/produtos/${p.slug}`} className="cm-p-img" tabIndex={-1}>
              <img src={p.image} alt={p.name} loading="lazy" />
            </Link>
            <div className="cm-p-body">
              <h3>
                <Link href={`${BASE}/produtos/${p.slug}`}>{p.name}</Link>
              </h3>
              <Link href={`${BASE}/produtos/${p.slug}`} className="cm-saiba">
                Saiba Mais
              </Link>
            </div>
          </article>
        ))}
        {/* cards extras estilo vitrine com CTA */}
        <article className="cm-p-card cm-p-card--cta">
          <div className="cm-p-cta-inner">
            <h3>Catálogo completo</h3>
            <p>Baixe ou peça pelo WhatsApp para o seu mercado.</p>
            <Link href={`${BASE}/catalogo`} className="cm-saiba">
              Ver catálogo
            </Link>
          </div>
        </article>
      </div>
      <button type="button" className="cm-arrow cm-arrow--next" aria-label="Próximo" onClick={() => scroll(1)}>
        ›
      </button>
    </div>
  );
}

export function ProductQuickLinks() {
  return (
    <div className="cm-search-section">
      <h2>O que você procura?</h2>
      <div className="cm-search-bar">
        <input readOnly placeholder="Digite o produto ou assunto..." onClick={(e) => (e.currentTarget as HTMLInputElement).blur()} />
        <span>Buscar</span>
      </div>
      <div className="cm-chip-row">
        {PRODUCTS.map((p) => (
          <Link key={p.id} href={`${BASE}/produtos/${p.slug}`}>
            {p.name}
          </Link>
        ))}
        <Link href={`${BASE}/atacado`}>Atacado</Link>
        <Link href={`${BASE}/contato`}>Fale conosco</Link>
        <a href={waLink("Olá! Vim pelo site e quero falar com o comercial.")} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
