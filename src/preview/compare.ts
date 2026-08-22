import type { PreviewCompareData, PreviewCompareOptions, PreviewMetric } from "./types";

/** Métricas padrão: site legado típico vs prévia Next.js (estilo Lighthouse). */
export const DEFAULT_PREVIEW_METRICS: PreviewMetric[] = [
  { id: "perf", label: "Performance mobile", old: 58, new: 96, unit: "/100" },
  { id: "seo", label: "SEO técnico", old: 52, new: 97, unit: "/100" },
  { id: "a11y", label: "Acessibilidade", old: 64, new: 95, unit: "/100" },
  { id: "load", label: "Carregamento", old: 3.8, new: 1.1, unit: "s", invert: true },
];

export const DEFAULT_PREVIEW_BADGES = [
  "Schema.org (Google)",
  "Meta + Open Graph",
  "Mobile-first",
  "FAQ indexável",
];

function normalizeHost(host: string) {
  return host.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

function averageGain(metrics: PreviewMetric[]) {
  const gains = metrics.map((m) => {
    if (m.invert) return Math.round(((m.old - m.new) / m.old) * 100);
    return m.new - m.old;
  });
  return Math.round(gains.reduce((a, b) => a + b, 0) / gains.length);
}

/** Monta o comparativo para uma prévia. Só o `oldSiteHost` é obrigatório. */
export function buildPreviewCompare(
  oldSiteHost: string,
  options: PreviewCompareOptions = {},
): PreviewCompareData {
  const metrics = options.metrics ?? DEFAULT_PREVIEW_METRICS;
  const badges = options.badges ?? DEFAULT_PREVIEW_BADGES;
  const avg = averageGain(metrics);

  return {
    oldHost: normalizeHost(oldSiteHost),
    newLabel: options.newLabel ?? "Nova prévia",
    headline: options.headline ?? `+${avg} pts`,
    headlineSub: options.headlineSub ?? "média de qualidade vs site atual",
    metrics,
    badges,
  };
}
