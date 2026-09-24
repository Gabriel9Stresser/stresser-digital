"use client";

import Link from "next/link";
import { PRODUCTS, SITE, WA, WA_CATALOG, BASE } from "../data";

export default function CatalogoPage() {
  return (
    <div className="rbk-catalog pt-24 md:pt-28">
      <p className="eyebrow">Catálogo atacado</p>
      <h1 className="mt-3">Doceria da Rebeka</h1>
      <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
        Pudim e brigadeirão para mercados e distribuidores. Fábrica em São José dos Campos, presença nacional no atacado.
      </p>

      <div className="rbk-catalog-actions">
        <button type="button" className="btn-primary" onClick={() => window.print()}>
          Imprimir / salvar PDF
        </button>
        <a href={WA_CATALOG} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Pedir no WhatsApp
        </a>
        <Link href={BASE} className="btn-outline">
          Voltar ao site
        </Link>
      </div>

      <div className="grid gap-8">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="rounded-2xl border border-border bg-card overflow-hidden grid md:grid-cols-2">
            <img src={p.image} alt={p.name} className="w-full h-56 md:h-full object-cover" />
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.badge}</p>
              <h2 className="mt-2 font-display text-2xl text-navy">{p.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {p.specs.map((s) => (
                  <div key={s.label} className="rounded-xl bg-cream border border-border px-3 py-2">
                    <dt className="text-[10px] uppercase tracking-widest text-navy/50 font-semibold">{s.label}</dt>
                    <dd className="text-sm font-semibold text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`${BASE}/produtos/${p.slug}`} className="mt-5 inline-block text-sm font-semibold text-primary hover:underline print:hidden">
                Ver página do produto
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-navy text-white p-6 md:p-8">
        <h2 className="font-display text-2xl text-white">Contato comercial</h2>
        <p className="mt-3 text-white/75">
          WhatsApp {SITE.phoneDisplay} · {SITE.email}
          <br />
          {SITE.address}, {SITE.addressDetail}, {SITE.city}
          <br />
          {SITE.hours}
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex print:hidden">
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  );
}
