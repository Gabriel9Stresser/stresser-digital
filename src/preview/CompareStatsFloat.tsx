"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PreviewCompareData } from "./types";

function deltaLabel(oldVal: number, newVal: number, invert?: boolean) {
  if (invert) {
    const pct = Math.round(((oldVal - newVal) / oldVal) * 100);
    return `−${pct}%`;
  }
  return `+${newVal - oldVal}`;
}

function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

type CompareStatsFloatProps = {
  compare: PreviewCompareData;
};

/** Widget flutuante de comparativo — exclusivo de prévias Stresser Digital. */
export function CompareStatsFloat({ compare }: CompareStatsFloatProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
      setCollapsed(true);
      setOpen(false);
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="sd-preview-compare-wrap" aria-live="polite">
      <AnimatePresence>
        {!collapsed && (
          <motion.aside
            className="sd-preview-compare"
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Comparativo de qualidade do site"
          >
            <div className="sd-preview-compare-head">
              <div>
                <p className="sd-preview-compare-eyebrow">Stresser Digital</p>
                <p className="sd-preview-compare-title">Nova prévia vs site atual</p>
              </div>
              <button
                type="button"
                className="sd-preview-compare-collapse"
                onClick={() => setCollapsed(true)}
                aria-label="Minimizar comparativo"
              >
                −
              </button>
            </div>

            <div className="sd-preview-compare-hero-stat">
              <span className="sd-preview-compare-big">{compare.headline}</span>
              <span className="sd-preview-compare-big-sub">
                {isMobile ? "melhor que o site atual" : compare.headlineSub}
              </span>
            </div>

            {open && (
              <div className="sd-preview-compare-body">
                <div className="sd-preview-compare-legend">
                  <span>
                    <i className="sd-preview-dot sd-preview-dot-old" /> {compare.oldHost}
                  </span>
                  <span>
                    <i className="sd-preview-dot sd-preview-dot-new" /> {compare.newLabel}
                  </span>
                </div>

                {compare.metrics.map((m) => {
                  const max = m.invert ? Math.max(m.old, m.new) : 100;
                  const oldPct = m.invert ? (m.old / max) * 100 : m.old;
                  const newPct = m.invert ? (m.new / max) * 100 : m.new;
                  const delta = deltaLabel(m.old, m.new, m.invert);

                  return (
                    <div key={m.id} className="sd-preview-compare-row">
                      <div className="sd-preview-compare-row-head">
                        <span>{m.label}</span>
                        <span className="sd-preview-compare-delta">{delta}</span>
                      </div>
                      <div className="sd-preview-compare-bars">
                        <div className="sd-preview-bar-track">
                          <div
                            className="sd-preview-bar sd-preview-bar-old"
                            style={{ width: `${Math.min(oldPct, 100)}%` }}
                          />
                        </div>
                        <div className="sd-preview-bar-track">
                          <div
                            className="sd-preview-bar sd-preview-bar-new"
                            style={{ width: `${Math.min(newPct, 100)}%` }}
                          />
                        </div>
                      </div>
                      <div className="sd-preview-compare-values">
                        <span>
                          {m.old}
                          {m.unit}
                        </span>
                        <span className="sd-preview-compare-values-new">
                          {m.new}
                          {m.unit}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <ul className="sd-preview-compare-badges">
                  {compare.badges.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              className="sd-preview-compare-toggle"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Ocultar detalhes" : "Ver comparativo"}
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      {collapsed && (
        <button
          type="button"
          className="sd-preview-compare-fab"
          onClick={() => setCollapsed(false)}
          aria-label="Abrir comparativo de qualidade"
        >
          <span className="sd-preview-compare-fab-score">{compare.headline}</span>
          <span className="sd-preview-compare-fab-label">vs site atual</span>
        </button>
      )}
    </div>
  );
}
