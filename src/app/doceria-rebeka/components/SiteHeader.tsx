"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE, NAV, SITE, WA } from "../data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link href={BASE} className="flex items-center gap-3 min-w-0">
          <img src={SITE.logo} alt="" className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-display text-base sm:text-xl leading-tight text-navy">
              Doceria <span className="text-primary">da Rebeka</span>
            </span>
            <span className="hidden sm:block text-[10px] sm:text-sm font-medium text-navy/70 mt-0.5 tracking-wide truncate">
              A maior fábrica de pudim do mundo é joseense
            </span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-primary" : "text-navy/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary text-sm">
          Fale com o comercial
        </a>
        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {menuOpen && (
        <>
          <button type="button" className="rbk-menu-backdrop lg:hidden" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
          <div className="lg:hidden bg-background border-t border-border relative z-[60]">
            <div className="container-editorial py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium rounded-xl px-3 py-3 ${
                    isActive(item.href) ? "text-primary bg-cream" : "text-navy hover:text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 self-start">
                Fale com o comercial
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
