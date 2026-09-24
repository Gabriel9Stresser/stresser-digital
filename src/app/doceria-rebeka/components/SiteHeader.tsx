"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BASE, NAV, SITE } from "../data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setQ("");
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const results = [
    { href: `${BASE}/produtos/pudim`, label: "Pudim de 120g" },
    { href: `${BASE}/produtos/brigadeirao`, label: "Brigadeirão de 80g" },
    { href: `${BASE}/produtos`, label: "Todos os produtos" },
    { href: `${BASE}/atacado`, label: "Atacado" },
    { href: `${BASE}/quem-somos`, label: "Quem somos" },
    { href: `${BASE}/contato`, label: "Fale conosco" },
    { href: `${BASE}/mundo-rebeka`, label: "Mundo Rebeka" },
    { href: `${BASE}/galeria`, label: "Galeria" },
    { href: `${BASE}/duvidas`, label: "Dúvidas frequentes" },
  ].filter((r) => !q.trim() || r.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <header className={`cm-header${searchOpen ? " is-search" : ""}${menuOpen ? " is-menu" : ""}`}>
        <div className="cm-header-inner">
          <Link href={BASE} className="cm-logo" aria-label={SITE.name}>
            <img src={SITE.logo} alt={SITE.name} />
          </Link>

          {/* Busca expandida no header, padrão Cimed */}
          <div className={`cm-header-search${searchOpen ? " is-open" : ""}`}>
            <input
              ref={searchRef}
              type="search"
              placeholder="Busque por produtos ou assuntos..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Busca"
            />
            <button type="button" className="cm-tool-btn" aria-label="Buscar" onClick={() => searchRef.current?.focus()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button
              type="button"
              className="cm-tool-btn cm-tool-btn--ghost"
              aria-label="Fechar busca"
              onClick={() => {
                setSearchOpen(false);
                setQ("");
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className={`cm-header-tools${searchOpen ? " is-hidden" : ""}`}>
            <button
              type="button"
              className="cm-tool-btn cm-tool-btn--circle"
              aria-label="Abrir busca"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.25">
                  <path d="M1 1h22M1 7h22M1 13h22" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu painel branco, padrão Cimed */}
          <nav className={`cm-primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Menu principal">
            <ul className="cm-nav-menu">
              {NAV.filter((i) => i.href !== BASE).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`${BASE}/duvidas`} onClick={() => setMenuOpen(false)}>
                  Dúvidas frequentes
                </Link>
              </li>
              <li>
                <Link href={SITE.catalogPath} onClick={() => setMenuOpen(false)}>
                  Catálogo
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {searchOpen && q.trim() && (
          <div className="cm-search-dropdown">
            <ul>
              {results.length === 0 && <li className="cm-search-empty">Nenhum resultado</li>}
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} onClick={() => setSearchOpen(false)}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {menuOpen && <button type="button" className="cm-menu-scrim" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
