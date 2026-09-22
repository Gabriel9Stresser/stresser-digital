import { NextResponse } from "next/server";

type LeadBody = {
  nome?: string;
  empresa?: string;
  email?: string;
  whatsapp?: string;
  tipo?: string;
  mensagem?: string;
  source?: string;
};

export async function POST(req: Request) {
  let body: LeadBody = {};
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const nome = String(body.nome || "").trim();
  const email = String(body.email || "").trim();
  const mensagem = String(body.mensagem || "").trim();
  if (!nome || !email || !mensagem) {
    return NextResponse.json({ ok: false, error: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  const payload = {
    ...body,
    nome,
    email,
    mensagem,
    receivedAt: new Date().toISOString(),
    source: body.source || "doceria-rebeka-site",
  };

  const webhook = process.env.DOCERIA_LEAD_WEBHOOK;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // WhatsApp no front continua sendo o canal principal
    }
  }

  return NextResponse.json({ ok: true });
}
