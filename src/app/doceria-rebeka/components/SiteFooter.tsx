import Link from "next/link";
import { FOOTER_INSTITUCIONAL, FOOTER_SUPORTE, PRODUCTS, SITE, WA, BASE } from "../data";

export function SiteFooter() {
  return (
    <footer className="rbk-footer">
      <div className="rbk-footer-grid">
        <div className="rbk-footer-brand">
          <Link href={BASE} className="rbk-brand rbk-brand--footer">
            <img src={SITE.logo} alt="" className="rbk-brand-logo" />
            <span className="rbk-brand-text">
              Doceria <strong>da Rebeka</strong>
            </span>
          </Link>
          <p className="rbk-footer-tagline">
            Aqui cada doce é feito com amor e perfeição. Fábrica em {SITE.cityShort}, presença em todo o Brasil.
          </p>
        </div>

        <div>
          <h4 className="rbk-footer-heading">Produtos</h4>
          <ul className="rbk-footer-list">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link href={`${BASE}/produtos/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
            <li>
              <Link href={SITE.catalogPath}>Catálogo PDF</Link>
            </li>
            <li>
              <Link href={`${BASE}/produtos`}>Ver todos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="rbk-footer-heading">Institucional</h4>
          <ul className="rbk-footer-list">
            {FOOTER_INSTITUCIONAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="rbk-footer-heading">Suporte</h4>
          <ul className="rbk-footer-list">
            {FOOTER_SUPORTE.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href={WA}>{SITE.phoneDisplay}</a>
            </li>
            <li className="rbk-footer-muted">{SITE.hours}</li>
          </ul>
          <div className="rbk-footer-social">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="rbk-footer-bottom">
        <span>© {new Date().getFullYear()} Doceria da Rebeka. Todos os direitos reservados.</span>
        <span>São José dos Campos, SP</span>
      </div>
    </footer>
  );
}
