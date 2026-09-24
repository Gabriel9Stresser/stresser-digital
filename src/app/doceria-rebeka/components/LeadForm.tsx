"use client";

import { useId, useState, type FormEvent } from "react";
import { BUSINESS_TYPES, WA, isValidBrPhone, waLink } from "../data";

type FormStatus = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState("");
  const formId = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    setFormStatus("loading");

    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "").trim();
    const empresa = String(fd.get("empresa") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const whatsapp = String(fd.get("whatsapp") || "").trim();
    const tipo = String(fd.get("tipo") || "").trim();
    const mensagem = String(fd.get("mensagem") || "").trim();

    if (!nome || !email || !mensagem) {
      setFormStatus("error");
      setFormError("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (whatsapp && !isValidBrPhone(whatsapp)) {
      setFormStatus("error");
      setFormError("Informe um WhatsApp válido com DDD (ex.: 12981285713).");
      return;
    }
    if (!tipo) {
      setFormStatus("error");
      setFormError("Selecione o tipo de negócio.");
      return;
    }

    const payload = { nome, empresa, email, whatsapp, tipo, mensagem };
    try {
      localStorage.setItem("doceria-rebeka-lead", JSON.stringify({ ...payload, at: Date.now() }));
    } catch {
      /* ignore */
    }

    try {
      await fetch("/api/doceria-rebeka/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* WhatsApp segue como canal principal */
    }

    const tipoLabel = BUSINESS_TYPES.find((t) => t.value === tipo)?.label || tipo;
    const text = [
      "Olá, vim pelo site e quero falar com o comercial.",
      `Nome: ${nome}`,
      empresa && `Empresa: ${empresa}`,
      `Tipo: ${tipoLabel}`,
      `E-mail: ${email}`,
      whatsapp && `WhatsApp: ${whatsapp}`,
      `Mensagem: ${mensagem}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setFormStatus("success");
    e.currentTarget.reset();
  }

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-card border border-border p-8 md:p-10 shadow-[0_20px_50px_-30px_rgba(30,43,94,0.2)]"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor={`${formId}-nome`}>
            Nome
          </label>
          <input id={`${formId}-nome`} name="nome" type="text" required autoComplete="name" className="rbk-input" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor={`${formId}-empresa`}>
            Empresa
          </label>
          <input id={`${formId}-empresa`} name="empresa" type="text" autoComplete="organization" className="rbk-input" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor={`${formId}-email`}>
            E-mail
          </label>
          <input id={`${formId}-email`} name="email" type="email" required autoComplete="email" className="rbk-input" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor={`${formId}-whatsapp`}>
            WhatsApp
          </label>
          <input
            id={`${formId}-whatsapp`}
            name="whatsapp"
            type="tel"
            inputMode="tel"
            placeholder="(12) 98128-5713"
            autoComplete="tel"
            className="rbk-input"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor={`${formId}-tipo`}>
            Tipo de negócio
          </label>
          <select id={`${formId}-tipo`} name="tipo" required className="rbk-input" defaultValue="">
            {BUSINESS_TYPES.map((t) => (
              <option key={t.value || "empty"} value={t.value} disabled={t.value === ""}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2" htmlFor={`${formId}-mensagem`}>
          Mensagem
        </label>
        <textarea
          id={`${formId}-mensagem`}
          name="mensagem"
          rows={5}
          required
          className="rbk-input"
          placeholder="Conte um pouco sobre o seu negócio e o volume aproximado..."
        />
      </div>

      {formStatus === "error" && (
        <p className="mt-4 text-sm font-medium text-red-700" role="alert">
          {formError}
        </p>
      )}
      {formStatus === "success" && (
        <p className="mt-4 text-sm font-medium text-emerald-700" role="status">
          Pronto. Abrimos o WhatsApp com seus dados. Se não abriu, use o botão ao lado.
        </p>
      )}

      <div className="mt-7 flex flex-wrap gap-3">
        <button type="submit" className="btn-primary" disabled={formStatus === "loading"}>
          {formStatus === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Chamar no WhatsApp
        </a>
      </div>
    </form>
  );
}
