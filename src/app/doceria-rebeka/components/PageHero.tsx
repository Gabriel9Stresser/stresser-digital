import Link from "next/link";
import type { ReactNode } from "react";
import { BASE } from "../data";

type PageHeroProps = {
  title: ReactNode;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
};

/** Banner institucional estilo Cimed Quem Somos: faixa brand full-bleed, título centralizado. */
export function PageHero({ title, description, breadcrumb, children }: PageHeroProps) {
  const crumbs = breadcrumb ?? [{ label: "Home", href: BASE }];

  return (
    <section className="cm-page-hero">
      <div className="cm-container cm-center">
        <nav className="cm-breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`}>
              {i > 0 && <span className="cm-bc-sep">›</span>}
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="cm-page-title">{title}</h1>
        <div className="cm-page-rule" aria-hidden />
        {description && <p className="cm-page-lead">{description}</p>}
        {children && <div className="cm-page-actions">{children}</div>}
      </div>
    </section>
  );
}
