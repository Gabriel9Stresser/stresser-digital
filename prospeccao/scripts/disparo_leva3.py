#!/usr/bin/env python3
"""3ª leva — novos nichos (fisio, nutrição, vet) + números confirmados."""
from __future__ import annotations

import json
import re
import ssl
import time
import urllib.error
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
OUT = Path(__file__).resolve().parent / "_disparo_leva3_resultado.jsonl"

# nome, phone E.164, nicho, substring única na lista.md
LEADS: list[tuple[str, str, str, str]] = [
    ("ITC Vertebral Perdizes", "5511966604342", "fisioterapia", "ITC Vertebral"),
    ("Instituto RV Perdizes", "5511944681981", "fisioterapia", "Instituto RV"),
    ("Clínica LM Saúde", "5511914161618", "fisioterapia", "Clínica LM Saúde"),
    ("B-Active Perdizes", "5511945731433", "fisioterapia", "B-Active"),
    ("Muralife Clínica", "5511994837016", "fisioterapia", "Muralife"),
    ("Dra. Lilian Almeida", "5511987320410", "nutricao", "Lilian Almeida"),
    ("Dra. Renata Riciati (RR Nutri)", "5511999194876", "nutricao", "Renata Riciati"),
    ("Estimado Bicho", "5511998324096", "veterinario", "Estimado Bicho"),
    ("Centro Veterinário Klaus", "5511955905890", "veterinario", "Centro Veterinário Klaus"),
    ("Clinicat 24h Perdizes", "5511932565663", "veterinario", "Clinicat 24h"),
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
    if created.get("contactId"):
        return str(created["contactId"])
    found = mcp_call("zapflow_list_contacts", {"search": phone[-8:], "limit": 5}, req_id + 10000)
    contacts = found.get("contacts") or found.get("data") or []
    if isinstance(contacts, list):
        for c in contacts:
            cid = c.get("id")
            if cid:
                return str(cid)
    return None


def update_lista_status(nicho: str, needle: str, phone: str | None = None) -> None:
    path = LEADS_DIR / nicho / "lista.md"
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    out: list[str] = []
    for line in lines:
        if needle in line and "não contatado" in line:
            line = line.replace("não contatado", "contatado")
            if phone and "confirmar" in line.lower():
                # preenche telefone se estava pendente
                line = re.sub(
                    r"\| confirmar[^|]*\|",
                    f"| {phone[2:4]} {phone[4:9]}-{phone[9:13]} |".replace(" ", " ", 1),
                    line,
                    count=1,
                )
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
            update_lista_status(nicho, needle, phone)
            if contact_id:
                mcp_call(
                    "zapflow_create_deal",
                    {
                        "contactId": contact_id,
                        "pipelineId": PIPELINE_ID,
                        "title": f"{nome} · Stresser",
                        "source": "prospeccao_leva3",
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
