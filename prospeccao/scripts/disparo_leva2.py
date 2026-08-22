#!/usr/bin/env python3
"""Dispara templates Meta para leads não contatados (2ª leva + retries)."""
from __future__ import annotations

import json
import re
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

MCP_URL = "https://api.zapflowapp.com.br/mcp"
MCP_TOKEN = "zfmcp_4d20209ba473c403f39ed230074b209f8901f0cde7eef0290ca223e991b2146b"
CONNECTION_ID = "cmrz3oczf001oj14urgnlnu18"
PIPELINE_ID = "cmt2u2033004wdn0ukxj4hrqg"
DELAY_SEC = 2.5
TEMPLATES = ["stresser_previa", "stresser_convite_previa", "stresser_hello_negocio"]

ROOT = Path(__file__).resolve().parents[1]
LEADS_DIR = ROOT / "leads"
OUT = Path(__file__).resolve().parent / "_disparo_leva2_resultado.jsonl"

# 2ª leva (não contatado c/ WhatsApp) + retries 1ª leva (falha contato)
LEADS: list[tuple[str, str, str]] = [
    # Retries 1ª leva
    ("Favett & Pereira Advogados", "551135691799", "advocacia"),
    ("Clínica Dell Aringa Odontologia", "5511973966245", "odontologia"),
    ("Odonto Pompéia", "5511972995742", "odontologia"),
    ("OdontoCompany Pompeia", "551138629563", "odontologia"),
    ("Clínica de Estética Dental Pompéia", "5511943543771", "odontologia"),
    ("Clínica Westphalen", "5511974123890", "odontologia"),
    ("Psicóloga Psicanalista Dra Cristina Perrone", "5511999979725", "psicologia"),
    # Odontologia 2ª leva
    ("Flori Odontologia", "5511987732576", "odontologia"),
    ("Saraiva Odontologia (Unidade Perdizes)", "5511941661316", "odontologia"),
    ("Fratelli Odontologia", "5511913737559", "odontologia"),
    ("Odonto Perdizes", "5511943194177", "odontologia"),
    ("Saraiva Odontologia (Unidade Barra Funda)", "5511986862357", "odontologia"),
    ("Clínica Odontológica Zaion", "5511947398724", "odontologia"),
    ("Inovva Odonto (WhatsApp)", "5511971297344", "odontologia"),
    ("OdontoIntegrada Perdizes", "5511999911575", "odontologia"),
    ("Machado e Bonatto Odontologia", "5511965990584", "odontologia"),
    ("Clínica Odontológica Pion", "5511964997586", "odontologia"),
    ("Integrata Odontologia (Dra Camila Gallo)", "5511930876814", "odontologia"),
    # Academias
    ("Full Time Academia (Perdizes)", "5511912486897", "academias"),
    ("Cross Training Vila Madá", "5511944873779", "academias"),
    ("Guigo Academia (Vila Madalena)", "5511962743523", "academias"),
    ("Duello CrossFit (Pompéia)", "5511958698254", "academias"),
    ("Academia Pinheiros", "5511950904689", "academias"),
    ("Bushido Kyokai Artes Marciais", "5511998084364", "academias"),
    # Estética
    ("Clínica Botox Barra Funda", "5511952137463", "estetica"),
    ("Dellavi Biomedicina Estética", "5511997137872", "estetica"),
    ("My Shape Clínica Estética", "5511991346681", "estetica"),
    ("Estética Perdizes (Padre Chico)", "5511999045228", "estetica"),
    ("Natural Beauty Perdizes", "5511953762116", "estetica"),
    ("Dra. Natacha Monteiro (Itaim)", "5511969247340", "estetica"),
    ("Harmony Saúde e Estética (Moema)", "5511976284485", "estetica"),
    ("Clínica Estética Radiante", "5511999568199", "estetica"),
    # Advocacia
    ("Daniel Ribeiro Advocacia", "5511968492557", "advocacia"),
    ("Spolaor Advocacia", "5511919900073", "advocacia"),
    ("Satoro Silva Advogados", "5511975859568", "advocacia"),
    ("Tadim Neves Advocacia", "5511942397752", "advocacia"),
    ("Marcos Viveiro Advogados", "5511973413643", "advocacia"),
    ("Advocacia Pires", "5511989493644", "advocacia"),
    ("Santos Advocacia Criminal", "5511952688386", "advocacia"),
    ("ADV Lucas Muniz", "5511988727253", "advocacia"),
    ("Molina e Molina Advogados", "5511989260789", "advocacia"),
    ("Moraes & Leal Advogados", "5511953282141", "advocacia"),
    ("Advogada em São Paulo (Pompéia)", "5511948923607", "advocacia"),
    ("RINA Advogados (trabalhista)", "5511994350315", "advocacia"),
    # Psicologia
    ("Psicóloga Beatriz A P Silva", "5511981488567", "psicologia"),
    ("Luciana Perfetto", "5511997182144", "psicologia"),
    ("Clínica Solange Ferrari Cianfa", "5511966568172", "psicologia"),
    ("Psicóloga Christina Queiroz", "5511991916989", "psicologia"),
    ("Igor Maggioli — Psicólogo Clínico", "5511939082178", "psicologia"),
    ("Psicóloga Mariana Takahashi", "5511968632121", "psicologia"),
    ("Ana Letícia Esteves — Psicóloga", "5511992011283", "psicologia"),
    ("Nadia Carvalho Orizio — Psicóloga", "5511981875774", "psicologia"),
]


def mcp_call(tool: str, arguments: dict, req_id: int) -> dict:
    payload = {
        "jsonrpc": "2.0",
        "id": req_id,
        "method": "tools/call",
        "params": {"name": tool, "arguments": arguments},
    }
    req = urllib.request.Request(
        MCP_URL,
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {MCP_TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        body = json.loads(resp.read().decode())
    text = body.get("result", {}).get("content", [{}])[0].get("text", "{}")
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {"error": text, "raw": body}


def ensure_contact(nome: str, phone: str, req_id: int) -> str | None:
    created = mcp_call(
        "zapflow_create_contact",
        {"phone": phone, "name": nome},
        req_id,
    )
    if created.get("contactId"):
        return str(created["contactId"])
    if created.get("error") == "Contato já existe" and created.get("contactId"):
        return str(created["contactId"])
    # fallback: buscar por telefone
    found = mcp_call("zapflow_list_contacts", {"search": phone[-8:], "limit": 5}, req_id + 10000)
    contacts = found.get("contacts") or found.get("data") or []
    if isinstance(contacts, list):
        for c in contacts:
            cid = c.get("id")
            if cid:
                return str(cid)
    return None


def update_lista_status(nicho: str, nome: str) -> None:
    path = LEADS_DIR / nicho / "lista.md"
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    # Substitui status na linha que contém o nome (primeira ocorrência)
    pattern = rf"(\|[^|]*\|[^|]*{re.escape(nome.split('(')[0].strip()[:20])}[^|]*\|[^|]*\|[^|]*\|[^|]*\| )não contatado"
    new_text, n = re.subn(pattern, r"\1contatado", text, count=1)
    if n == 0 and nome in text:
        new_text = text.replace(f"| {nome} |", f"| {nome} |").replace(
            "não contatado", "contatado", 1
        )
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")


def main() -> None:
    OUT.write_text("")
    ok = fail = 0
    req_id = 1
    total = len(LEADS)
    started = datetime.now(timezone.utc).isoformat()

    for i, (nome, phone, nicho) in enumerate(LEADS):
        template = TEMPLATES[i % len(TEMPLATES)]
        print(f"[{i + 1}/{total}] {nome}…", flush=True)

        contact_id = ensure_contact(nome, phone, req_id)
        req_id += 1

        send_args: dict = {
            "connectionId": CONNECTION_ID,
            "phone": phone,
            "templateName": template,
            "variables": {"1": nome},
        }
        if contact_id:
            send_args["contactId"] = contact_id

        result = mcp_call("zapflow_send_template", send_args, req_id)
        req_id += 1

        success = bool(result.get("ok"))
        if success:
            ok += 1
            print(f"  OK ({template})", flush=True)
            update_lista_status(nicho, nome)
            if contact_id:
                mcp_call(
                    "zapflow_create_deal",
                    {
                        "contactId": contact_id,
                        "pipelineId": PIPELINE_ID,
                        "title": f"Prospecção — {nome}",
                        "source": "prospeccao_leva2",
                    },
                    req_id,
                )
                req_id += 1
        else:
            fail += 1
            err = result.get("error", result)
            print(f"  FAIL: {err}", flush=True)

        row = {
            "status": "ok" if success else "fail",
            "nome": nome,
            "phone": phone,
            "nicho": nicho,
            "template": template,
            "result": result,
            "ts": datetime.now(timezone.utc).isoformat(),
        }
        with OUT.open("a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")

        if i < total - 1:
            time.sleep(DELAY_SEC)

    print(f"\nConcluído: {ok} ok | {fail} falha | total {total} | início {started}")
    print(f"Log: {OUT}")


if __name__ == "__main__":
    main()
