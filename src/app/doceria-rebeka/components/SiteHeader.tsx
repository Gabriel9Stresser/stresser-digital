"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE, NAV, SITE, WA } from "../data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = [
    { href: `${BASE}/produtos/pudim`, label: "Pudim de 120g" },
    { href: `${BASE}/produtos/brigadeirao`, label: "Brigadeirão de 80g" },
    { href: `${BASE}/atacado`, label: "Atacado / Como comprar" },
    { href: `${BASE}/quem-somos`, label: "Quem somos" },
    { href: `${BASE}/contato`, label: "Fale conosco" },
    { href: `${BASE}/mundo-rebeka`, label: "Mundo Rebeka" },
  ].filter((r) => !q || r.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <header className="cm-header">
        <div className="cm-header-inner">
          <Link href={BASE} className="cm-logo" aria-label={SITE.name}>
            <img src={SITE.logo} alt="" />
            <span>
              Doceria <em>da Rebeka</em>
            </span>
          </Link>

          <div className="cm-header-tools">
            <button
              type="button"
              className="cm-tool-btn"
              aria-label="Abrir busca"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button
              type="button"
              className="cm-tool-btn cm-tool-btn--square"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((o) => !o);
                setSearchOpen(false);
              }}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="cm-menu-overlay" role="dialog" aria-modal="true" aria-label="Menu principal">
          <nav className="cm-menu-nav">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href={`${BASE}/duvidas`} onClick={() => setMenuOpen(false)}>
              Dúvidas frequentes
            </Link>
            <Link href={SITE.catalogPath} onClick={() => setMenuOpen(false)}>
              Catálogo PDF
            </Link>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="cm-menu-cta">
            Fale com o comercial
          </a>
        </div>
      )}

      {searchOpen && (
        <div className="cm-search-overlay" role="dialog" aria-modal="true" aria-label="Busca">
          <button type="button" className="cm-search-close" onClick={() => setSearchOpen(false)} aria-label="Fechar busca">
            ×
          </button>
          <div className="cm-search-box">
            <h2>O que você procura?</h2>
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Digite produto, atacado, contato..."
              className="cm-search-input"
            />
            <ul className="cm-search-results">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} onClick={() => setSearchOpen(false)}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
