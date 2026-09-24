import Link from "next/link";
import { FOOTER_INSTITUCIONAL, FOOTER_SUPORTE, PRODUCTS, SITE, WA, BASE } from "../data";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-editorial py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href={BASE} className="flex items-center gap-3">
            <img src={SITE.logo} alt="" className="h-14 w-14 object-contain" />
            <span className="font-display text-xl text-white leading-tight">
              Doceria
              <br />
              <span className="text-pudim">da Rebeka</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm font-display text-lg text-white/90 italic">
            Aqui cada doce é feito com amor e perfeição!
          </p>
          <p className="mt-4 text-sm text-white/60 max-w-xs">{SITE.tagline}. Fábrica em {SITE.cityShort}.</p>
        </div>
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Institucional</div>
          <ul className="mt-5 space-y-3">
            {FOOTER_INSTITUCIONAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Produtos</div>
          <ul className="mt-5 space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link href={`${BASE}/produtos/${p.slug}`} className="hover:text-white transition-colors">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={SITE.catalogPath} className="hover:text-white transition-colors">
                Catálogo PDF
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Suporte</div>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            {FOOTER_SUPORTE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              {SITE.address}
              <br />
              {SITE.addressDetail}
              <br />
              {SITE.city} · {SITE.cep}
            </li>
            <li>
              <a href={WA} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="text-white/60">{SITE.hours}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition"
            >
              Instagram
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-editorial py-6 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Doceria da Rebeka. Todos os direitos reservados.</span>
          <span>São José dos Campos, São Paulo, Brasil</span>
        </div>
      </div>
    </footer>
  );
}
