#!/usr/bin/env python3
"""4ª leva — 32 leads novos (nichos expandidos) com WhatsApp móvel validado."""
from __future__ import annotations

import json
import re
import ssl
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

try:
    import certifi

    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = ssl.create_default_context()
    SSL_CTX.check_hostname = False
    SSL_CTX.verify_mode = ssl.CERT_NONE

MCP_URL = "https://api.zapflowapp.com.br/mcp"
MCP_TOKEN = "zfmcp_4d20209ba473c403f39ed230074b209f8901f0cde7eef0290ca223e991b2146b"
CONNECTION_ID = "cmrz3oczf001oj14urgnlnu18"
PIPELINE_ID = "cmt2u2033004wdn0ukxj4hrqg"
DELAY_SEC = 2.5
TEMPLATES = ["stresser_previa", "stresser_convite_previa", "stresser_hello_negocio"]

ROOT = Path(__file__).resolve().parents[1]
LEADS_DIR = ROOT / "leads"
OUT = Path(__file__).resolve().parent / "_disparo_leva4_resultado.jsonl"

# nome, phone E.164, nicho, needle na lista.md
LEADS: list[tuple[str, str, str, str]] = [
    # Contabilidade (4)
    ("AIC Contadoria", "5511930812813", "contabilidade", "AIC Contadoria"),
    ("AC Cont Assessoria Contábil", "5511984150849", "contabilidade", "AC Cont"),
    ("Advanced Contábil Saúde", "5511944832868", "contabilidade", "Advanced Contábil"),
    ("Portobello Contabilidade", "5511991432020", "contabilidade", "Portobello"),
    # Salões / barbearias (8)
    ("UP Salão de Beleza", "5511989277070", "saloes", "UP Salão"),
    ("Bispo Hair & Cia", "5511944774247", "saloes", "Bispo Hair"),
    ("Oficina das Mãos", "5511948213440", "saloes", "Oficina das Mãos"),
    ("Confraria da Barba Perdizes", "5511970398144", "saloes", "Confraria da Barba"),
    ("Bartô Cabelo e Barba", "5511914394565", "saloes", "Bartô"),
    ("The Barber Perdizes", "5511917507933", "saloes", "The Barber"),
    ("Barbearia Black Zone", "5511942004488", "saloes", "Black Zone"),
    ("Attimo Barbearia", "5511963294985", "saloes", "Attimo"),
    # Medicina (4)
    ("Dra. Patricia Bernardi Dermatologia", "5511941847657", "medicina", "Patricia Bernardi"),
    ("Natalia Dermatologia", "5511978732357", "medicina", "Natalia Dermatologia"),
    ("Clínica Lividi", "5511982081152", "medicina", "Clínica Lividi"),
    ("Suort Clínica Integrada", "5511971574944", "medicina", "Suort"),
    # Fisioterapia (3)
    ("Clínica TAZ", "5511993095353", "fisioterapia", "Clínica TAZ"),
    ("Mariana Grots Fisioterapia", "5511979996378", "fisioterapia", "Mariana Grots"),
    ("Dra. Michelle Garcia Fisioterapia", "5511966744339", "fisioterapia", "Michelle Garcia"),
    # Pilates (3) — nicho novo
    ("Pure Pilates Perdizes", "5511938003601", "pilates", "Pure Pilates"),
    ("Navve Academia de Pilates", "5511978251915", "pilates", "Navve"),
    ("Saúde & Pilates Apinajés", "5511964444109", "pilates", "Saúde & Pilates"),
    # Veterinário (3)
    ("Pompeia Pet", "5511912349981", "veterinario", "Pompeia Pet"),
    ("Pet a Vet", "5511996927614", "veterinario", "Pet a Vet"),
    ("ProntVet Pompeia", "5511982248835", "veterinario", "ProntVet"),
    # Nutrição (2)
    ("Camila Ricioli Nutrição", "5511947508450", "nutricao", "Camila Ricioli"),
    ("Guilherme Jaldin Nutrição", "5511965231234", "nutricao", "Guilherme Jaldin"),
    # Odontologia (1)
    ("Clínica Larissa Vilanova", "5511910205115", "odontologia", "Larissa Vilanova"),
    # Academias / personal (2)
    ("Personal Leandro Lima", "5511943156769", "academias", "Leandro Lima"),
    ("Conecta Fitness", "5511988119961", "academias", "Conecta Fitness"),
    # Podologia (1) — nicho novo
    ("Podologia Apinajés", "5511971427062", "podologia", "Podologia Apinajés"),
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
    with urllib.request.urlopen(req, timeout=120, context=SSL_CTX) as resp:
        body = json.loads(resp.read().decode())
    text = body.get("result", {}).get("content", [{}])[0].get("text", "{}")
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {"ok": False, "error": text, "raw": body}


def ensure_contact(nome: str, phone: str, req_id: int) -> str | None:
    created = mcp_call(
        "zapflow_create_contact",
        {"phone": phone, "name": nome},
        req_id,
    )
    cid = created.get("contactId") or (created.get("contact") or {}).get("id")
    if cid:
        return str(cid)
    found = mcp_call("zapflow_list_contacts", {"search": phone[-8:], "limit": 5}, req_id + 10000)
    contacts = found.get("contacts") or found.get("data") or []
    if isinstance(contacts, list):
        for c in contacts:
            if c.get("id"):
                return str(c["id"])
    return None


def update_lista_status(nicho: str, needle: str) -> None:
    path = LEADS_DIR / nicho / "lista.md"
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    out: list[str] = []
    for line in lines:
        if needle in line and "não contatado" in line:
            line = line.replace("não contatado", "contatado")
        out.append(line)
    new_text = "\n".join(out) + ("\n" if text.endswith("\n") else "")
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")


def main() -> None:
    OUT.write_text("")
    ok = fail = 0
    req_id = 1
    total = len(LEADS)
    started = datetime.now(timezone.utc).isoformat()
    print(f"4ª leva: {total} leads\n", flush=True)

    for i, (nome, phone, nicho, needle) in enumerate(LEADS):
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
            update_lista_status(nicho, needle)
            if contact_id:
                mcp_call(
                    "zapflow_create_deal",
                    {
                        "contactId": contact_id,
                        "pipelineId": PIPELINE_ID,
                        "title": f"{nome} · Stresser",
                        "source": "prospeccao_leva4",
                    },
                    req_id,
                )
                req_id += 1
        else:
            fail += 1
            print(f"  FAIL: {result.get('error', result)}", flush=True)

        with OUT.open("a", encoding="utf-8") as f:
            f.write(
                json.dumps(
                    {
                        "status": "ok" if success else "fail",
                        "nome": nome,
                        "phone": phone,
                        "nicho": nicho,
                        "template": template,
                        "result": result,
                        "ts": datetime.now(timezone.utc).isoformat(),
                    },
                    ensure_ascii=False,
                )
                + "\n"
            )

        if i < total - 1:
            time.sleep(DELAY_SEC)

    print(f"\nConcluído: {ok} ok | {fail} falha | total {total} | início {started}")
    print(f"Log: {OUT}")


if __name__ == "__main__":
    main()
