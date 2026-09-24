import Link from "next/link";
import type { ReactNode } from "react";
import { BASE } from "../data";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
  /** solid = faixa navy full-bleed estilo Cimed Quem Somos */
  variant?: "solid" | "light";
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  variant = "solid",
}: PageHeroProps) {
  const crumbs = breadcrumb ?? [{ label: "Home", href: BASE }, { label: typeof title === "string" ? title : "Página" }];

  return (
    <section className={variant === "solid" ? "rbk-page-banner" : "rbk-page-banner rbk-page-banner--light"}>
      <div className="rbk-page-banner-inner">
        <nav className="rbk-breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`}>
              {i > 0 && <span className="rbk-breadcrumb-sep">›</span>}
              {c.href ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span aria-current="page">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="rbk-page-eyebrow">{eyebrow}</p>}
        <h1 className="rbk-page-title">{title}</h1>
        <div className="rbk-page-rule" aria-hidden />
        {description && <p className="rbk-page-desc">{description}</p>}
        {children && <div className="rbk-page-actions">{children}</div>}
      </div>
    </section>
  );
}
