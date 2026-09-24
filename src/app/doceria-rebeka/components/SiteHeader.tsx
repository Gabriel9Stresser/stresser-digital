"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE, NAV, SITE, WA } from "../data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === BASE) return pathname === BASE || pathname === `${BASE}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="rbk-topbar">
      <div className="rbk-topbar-inner">
        <Link href={BASE} className="rbk-brand">
          <img src={SITE.logo} alt="" className="rbk-brand-logo" />
          <span className="rbk-brand-text">
            Doceria <strong>da Rebeka</strong>
          </span>
        </Link>

        <nav className="rbk-nav-desktop" aria-label="Principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "is-active" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="rbk-topbar-actions">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rbk-btn-top">
            Comercial
          </a>
          <button
            type="button"
            className="rbk-icon-btn lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="rbk-burger" data-open={menuOpen || undefined}>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button type="button" className="rbk-menu-backdrop" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
          <div className="rbk-nav-mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 self-start">
              Fale com o comercial
            </a>
          </div>
        </>
      )}
    </header>
  );
}
