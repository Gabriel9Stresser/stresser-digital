#!/bin/bash
# 2ª leva + retries — leads ainda não contatados (22/08/2026)
set -euo pipefail

MCP_URL="https://api.zapflowapp.com.br/mcp"
MCP_TOKEN="zfmcp_4d20209ba473c403f39ed230074b209f8901f0cde7eef0290ca223e991b2146b"
CONNECTION_ID="cmrz3oczf001oj14urgnlnu18"
PIPELINE_ID="cmt2u2033004wdn0ukxj4hrqg"
DELAY=2.5
OUT="/Users/gabrielstresser/Documents/stresser-digital/prospeccao/scripts/_disparo_leva2_resultado.jsonl"

: > "$OUT"

# nome|phone|template
leads=(
  "Favett & Pereira Advogados|551135691799|stresser_previa"
  "Clínica Dell Aringa Odontologia|5511973966245|stresser_convite_previa"
  "Odonto Pompéia|5511972995742|stresser_hello_negocio"
  "OdontoCompany Pompeia|551138629563|stresser_previa"
  "Clínica de Estética Dental Pompéia|5511943543771|stresser_convite_previa"
  "Clínica Westphalen|5511974123890|stresser_hello_negocio"
  "Psicóloga Psicanalista Dra Cristina Perrone|5511999979725|stresser_previa"
  "Flori Odontologia|5511987732576|stresser_convite_previa"
  "Saraiva Odontologia (Unidade Perdizes)|5511941661316|stresser_hello_negocio"
  "Fratelli Odontologia|5511913737559|stresser_previa"
  "Odonto Perdizes|5511943194177|stresser_convite_previa"
  "Saraiva Odontologia (Unidade Barra Funda)|5511986862357|stresser_hello_negocio"
  "Clínica Odontológica Zaion|5511947398724|stresser_previa"
  "Inovva Odonto (WhatsApp)|5511971297344|stresser_convite_previa"
  "OdontoIntegrada Perdizes|5511999911575|stresser_hello_negocio"
  "Machado e Bonatto Odontologia|5511965990584|stresser_previa"
  "Clínica Odontológica Pion|5511964997586|stresser_convite_previa"
  "Integrata Odontologia (Dra Camila Gallo)|5511930876814|stresser_hello_negocio"
  "Full Time Academia (Perdizes)|5511912486897|stresser_previa"
  "Cross Training Vila Madá|5511944873779|stresser_convite_previa"
  "Guigo Academia (Vila Madalena)|5511962743523|stresser_hello_negocio"
  "Duello CrossFit (Pompéia)|5511958698254|stresser_previa"
  "Academia Pinheiros|5511950904689|stresser_convite_previa"
  "Bushido Kyokai Artes Marciais|5511998084364|stresser_hello_negocio"
  "Clínica Botox Barra Funda|5511952137463|stresser_previa"
  "Dellavi Biomedicina Estética|5511997137872|stresser_convite_previa"
  "My Shape Clínica Estética|5511991346681|stresser_hello_negocio"
  "Estética Perdizes (Padre Chico)|5511999045228|stresser_previa"
  "Natural Beauty Perdizes|5511953762116|stresser_convite_previa"
  "Dra. Natacha Monteiro (Itaim)|5511969247340|stresser_hello_negocio"
  "Harmony Saúde e Estética (Moema)|5511976284485|stresser_previa"
  "Clínica Estética Radiante|5511999568199|stresser_convite_previa"
  "Daniel Ribeiro Advocacia|5511968492557|stresser_hello_negocio"
  "Spolaor Advocacia|5511919900073|stresser_previa"
  "Satoro Silva Advogados|5511975859568|stresser_convite_previa"
  "Tadim Neves Advocacia|5511942397752|stresser_hello_negocio"
  "Marcos Viveiro Advogados|5511973413643|stresser_previa"
  "Advocacia Pires|5511989493644|stresser_convite_previa"
  "Santos Advocacia Criminal|5511952688386|stresser_hello_negocio"
  "ADV Lucas Muniz|5511988727253|stresser_previa"
  "Molina e Molina Advogados|5511989260789|stresser_convite_previa"
  "Moraes & Leal Advogados|5511953282141|stresser_hello_negocio"
  "Advogada em São Paulo (Pompéia)|5511948923607|stresser_previa"
  "RINA Advogados (trabalhista)|5511994350315|stresser_convite_previa"
  "Psicóloga Beatriz A P Silva|5511981488567|stresser_hello_negocio"
  "Luciana Perfetto|5511997182144|stresser_previa"
  "Clínica Solange Ferrari Cianfa|5511966568172|stresser_convite_previa"
  "Psicóloga Christina Queiroz|5511991916989|stresser_hello_negocio"
  "Igor Maggioli — Psicólogo Clínico|5511939082178|stresser_previa"
  "Psicóloga Mariana Takahashi|5511968632121|stresser_convite_previa"
  "Ana Letícia Esteves — Psicóloga|5511992011283|stresser_hello_negocio"
  "Nadia Carvalho Orizio — Psicóloga|5511981875774|stresser_previa"
)

mcp_call() {
  local id="$1" tool="$2" args="$3"
  curl -s -X POST "$MCP_URL" \
    -H "Authorization: Bearer $MCP_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"jsonrpc\":\"2.0\",\"id\":$id,\"method\":\"tools/call\",\"params\":{\"name\":\"$tool\",\"arguments\":$args}}"
}

ok=0
fail=0
total=${#leads[@]}
i=0
req=1

for entry in "${leads[@]}"; do
  i=$((i+1))
  IFS='|' read -r nome phone template <<< "$entry"
  nome_json=$(python3 -c 'import json,sys; print(json.dumps(sys.argv[1]))' "$nome")

  echo "[$i/$total] $nome"

  # Criar contato se não existir
  create_resp=$(mcp_call "$req" "zapflow_create_contact" "{\"phone\":\"$phone\",\"name\":$nome_json}")
  req=$((req+1))
  contact_id=$(echo "$create_resp" | python3 -c 'import json,sys,re; t=sys.stdin.read(); m=re.search(r"contactId[^\"]*\"([^\"]+)\"", t); print(m.group(1) if m else "")' 2>/dev/null || true)

  if [ -n "$contact_id" ]; then
    send_args="{\"connectionId\":\"$CONNECTION_ID\",\"contactId\":\"$contact_id\",\"phone\":\"$phone\",\"templateName\":\"$template\",\"variables\":{\"1\":$nome_json}}"
  else
    send_args="{\"connectionId\":\"$CONNECTION_ID\",\"phone\":\"$phone\",\"templateName\":\"$template\",\"variables\":{\"1\":$nome_json}}"
  fi

  resp=$(mcp_call "$req" "zapflow_send_template" "$send_args")
  req=$((req+1))

  if echo "$resp" | grep -q '"ok": true'; then
    ok=$((ok+1))
    status="ok"
    echo "  OK ($template)"
    if [ -n "$contact_id" ]; then
      mcp_call "$req" "zapflow_create_deal" "{\"contactId\":\"$contact_id\",\"pipelineId\":\"$PIPELINE_ID\",\"title\":\"Prospecção — $nome\",\"source\":\"prospeccao_leva2\"}" >/dev/null || true
      req=$((req+1))
    fi
  else
    fail=$((fail+1))
    status="fail"
    echo "  FAIL"
    echo "$resp" | head -c 400
    echo
  fi

  echo "{\"status\":\"$status\",\"nome\":$nome_json,\"phone\":\"$phone\",\"template\":\"$template\",\"raw\":$(echo "$resp" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')}" >> "$OUT"

  if [ "$i" -lt "$total" ]; then
    sleep "$DELAY"
  fi
done

echo ""
echo "Concluído: $ok ok | $fail falha | total $total"
echo "Log: $OUT"
