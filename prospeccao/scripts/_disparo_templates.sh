#!/bin/bash
# Dispara templates Meta aprovados para leads "não contatado"
set -euo pipefail

MCP_URL="https://api.zapflowapp.com.br/mcp"
MCP_TOKEN="zfmcp_4d20209ba473c403f39ed230074b209f8901f0cde7eef0290ca223e991b2146b"
CONNECTION_ID="cmrz3oczf001oj14urgnlnu18"
DELAY=2.5
ROOT="/Users/gabrielstresser/Documents/stresser-digital/prospeccao/leads"
OUT="/Users/gabrielstresser/Documents/stresser-digital/prospeccao/scripts/_disparo_resultado.jsonl"

: > "$OUT"

# nome|phone|template
leads=(
  "Academia HumanFit|5511982016670|stresser_previa"
  "NHD Sport Center|5511983701145|stresser_convite_previa"
  "Academia Nova Imagem|5511946128390|stresser_hello_negocio"
  "2 SPIN|5511942677762|stresser_previa"
  "Academia AG Saúde|5511970503918|stresser_convite_previa"
  "Alliance Pompeia|5511934202323|stresser_hello_negocio"
  "Tonus Gym - Perdizes|5511913029445|stresser_previa"
  "Pinheiro Advogados Associados|5511981935674|stresser_convite_previa"
  "J.A. Advocacia e Assessoria Jurídica|5511987654966|stresser_hello_negocio"
  "Cardoso de Abreu Advogados|5511987750954|stresser_previa"
  "Campos Advocacia Especializada|5511945914436|stresser_convite_previa"
  "Favett & Pereira Advogados|551135691799|stresser_hello_negocio"
  "Advocacia Feliciano Soares|5511972034418|stresser_previa"
  "RMCLS — Advogados e Consultores Legais|5511968402271|stresser_convite_previa"
  "Advocacia Kutby|5511934716680|stresser_hello_negocio"
  "Advocacia Marinho|5511975308841|stresser_previa"
  "Vitória Aparecida Advocacia|5511986243190|stresser_convite_previa"
  "Paulo Rebello Advocacia & Consultoria Jurídica|5511911300028|stresser_hello_negocio"
  "STEAGALL Sociedade Individual de Advocacia|5511985481103|stresser_previa"
  "Dra. Gisele de Camargo Sales (OAB/SP 384.419)|5511952345115|stresser_convite_previa"
  "Clínica Pró Estética Perdizes|5511974445843|stresser_hello_negocio"
  "Clínica Realiza — Saúde Estética|5511988746704|stresser_previa"
  "Clínica de Estética Avançada Perdizes|5511913567195|stresser_convite_previa"
  "Clinica Estética Essencialy|5511945780606|stresser_hello_negocio"
  "Face Doctor Perdizes|5511940625771|stresser_previa"
  "Centro de Estética Stella Santoro|5511985124370|stresser_convite_previa"
  "Clínica Mulatti (Dra Grace e Dra Sheila Mulatti)|5511984149417|stresser_hello_negocio"
  "Clínica Estética Perdizes - Plena Face|5511919314455|stresser_previa"
  "Clínica Dell Aringa Odontologia|5511973966245|stresser_convite_previa"
  "BLS Odontologia Integrada (Dra Beatriz Loureiro)|5511916743221|stresser_hello_negocio"
  "Odonto Pompéia|5511972995742|stresser_previa"
  "OdontoCompany Pompeia|551138629563|stresser_convite_previa"
  "SB Odontologia Especializada|5511976434191|stresser_hello_negocio"
  "Clínica Odonto Postale|5511998739823|stresser_previa"
  "Clínica de Estética Dental Pompéia|5511943543771|stresser_convite_previa"
  "Clínica Westphalen|5511974123890|stresser_hello_negocio"
  "Dra. Juliana Menossi|5511983115550|stresser_previa"
  "Instituto Odontológico BR|5511985997646|stresser_convite_previa"
  "Erica Brogini Odontologia|5511933250033|stresser_hello_negocio"
  "Odontologia Petrocchi|5511982844048|stresser_previa"
  "Psicóloga Marla Bastos|5511945206469|stresser_convite_previa"
  "Montesí Clínica de Psicologia (Emily Freire)|5511988021350|stresser_hello_negocio"
  "Psicóloga Psicanalista Dra Cristina Perrone|5511999979725|stresser_previa"
  "Psicóloga Psicanalista Simone Aizar Geromel|5511973306020|stresser_convite_previa"
  "Psicóloga Heloísa Kuhnen|5511995867899|stresser_hello_negocio"
  "Clínica de Psicologia Sol Ferrari — Psiquê|5511931405872|stresser_previa"
  "Humanamente — Clínica de Psicologia|5511978624130|stresser_convite_previa"
  "Espaço Essência — Arte e Terapia|5511965319040|stresser_hello_negocio"
  "Psicóloga Denise Mendes Gomes|5511984036271|stresser_previa"
  "Dra Diana Villac Oliva — Psicóloga|5511947201853|stresser_convite_previa"
  "Eliane Nogueira — Psicóloga Gestalt-terapeuta|5511995646436|stresser_hello_negocio"
  "Espaço Um — Clínica Psicólogo e Psicanalista|5511924986837|stresser_previa"
  "Paula Menezes Psicóloga|5511999113022|stresser_convite_previa"
  "Pedro Miotto — Psicólogo e Psicanalista|5511998989953|stresser_hello_negocio"
  "Clínica de Psicologia Cognicom|5511942288002|stresser_previa"
)

ok=0
fail=0
total=${#leads[@]}
i=0

for entry in "${leads[@]}"; do
  i=$((i+1))
  IFS='|' read -r nome phone template <<< "$entry"
  # escape JSON in nome
  nome_json=$(python3 -c 'import json,sys; print(json.dumps(sys.argv[1]))' "$nome")

  resp=$(curl -s -X POST "$MCP_URL" \
    -H "Authorization: Bearer $MCP_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"jsonrpc\":\"2.0\",\"id\":$i,\"method\":\"tools/call\",\"params\":{\"name\":\"zapflow_send_template\",\"arguments\":{\"connectionId\":\"$CONNECTION_ID\",\"phone\":\"$phone\",\"templateName\":\"$template\",\"variables\":{\"1\":$nome_json}}}}")

  if echo "$resp" | grep -q '"ok": true'; then
    ok=$((ok+1))
    status="ok"
    echo "OK  [$i/$total] $nome"
  else
    fail=$((fail+1))
    status="fail"
    echo "FAIL [$i/$total] $nome"
    echo "$resp" | head -c 500
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
