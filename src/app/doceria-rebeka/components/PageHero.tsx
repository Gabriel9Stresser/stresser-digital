import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
      <div className="container-editorial max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-navy">{title}</h1>
        {description && <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
