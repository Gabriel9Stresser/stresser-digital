import Link from "next/link";
import { FOOTER_INSTITUCIONAL, FOOTER_SUPORTE, PRODUCTS, SITE, WA, BASE } from "../data";

export function SiteFooter() {
  return (
    <footer className="cm-footer">
      <div className="cm-footer-top">
        <div className="cm-container cm-footer-grid">
          <div>
            <Link href={BASE} className="cm-logo cm-logo--footer">
              <img src={SITE.logo} alt="" />
              <span>
                Doceria <em>da Rebeka</em>
              </span>
            </Link>
            <p className="cm-footer-about">
              Cuidando do sabor na gôndola com pudim e brigadeirão de qualidade. Fábrica em {SITE.cityShort}, atendimento
              nacional no atacado.
            </p>
          </div>
          <div>
            <h4>Produtos</h4>
            <ul>
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link href={`${BASE}/produtos/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
              <li>
                <Link href={`${BASE}/produtos`}>Ver Todos</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Institucional</h4>
            <ul>
              {FOOTER_INSTITUCIONAL.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              {FOOTER_SUPORTE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href={WA}>{SITE.phoneDisplay}</a>
              </li>
              <li className="cm-footer-hours">{SITE.hours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cm-footer-bottom">
        <div className="cm-container">
          <span>© {new Date().getFullYear()} Doceria da Rebeka</span>
          <span>São José dos Campos, SP</span>
        </div>
      </div>
    </footer>
  );
}
