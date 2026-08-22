"use client";

import { CompareStatsFloat } from "./CompareStatsFloat";
import { PreviewBar } from "./PreviewBar";
import { buildPreviewCompare } from "./compare";
import type { PreviewCompareOptions } from "./types";
import "./preview.css";

type PreviewChromeProps = {
  /** Domínio ou URL do site antigo do cliente (ex.: igorpsicologo.com). */
  oldSiteHost: string;
  /** Sobrescreve métricas/badges quando quiser ajustar por nicho. */
  compare?: PreviewCompareOptions;
};

/**
 * UI exclusiva de prévias (barra + comparativo flutuante).
 * Importar só em rotas /slug de preview — nunca no site final entregue ao cliente.
 */
export function PreviewChrome({ oldSiteHost, compare }: PreviewChromeProps) {
  const data = buildPreviewCompare(oldSiteHost, compare);

  return (
    <>
      <PreviewBar />
      <CompareStatsFloat compare={data} />
    </>
  );
}
