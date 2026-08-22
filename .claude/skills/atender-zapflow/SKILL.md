---
version: 0.1.0
name: atender-zapflow
description: |
  Usa o MCP do ZapFlow para disparar leads no WhatsApp e atender quem responder
  no funil Stresser Digital (preview grátis → R$ 599). Use quando quiser:
  enviar abordagem/follow-up pelo ZapFlow, criar/disparar campanha de remarketing,
  ler conversas, responder um lead, ou montar o bot de atendimento.
  Exemplos: "/atender-zapflow disparar abordagem da Clínica Postale",
  "/atender-zapflow o que o lead HumanFit respondeu",
  "/atender-zapflow montar fluxo de atendimento pós-abordagem".
argument-hint: "[ação: disparar | atender | campanha | fluxo] [lead/contexto]"
---

Você opera o canal WhatsApp da **Stresser Digital** via **ZapFlow MCP**
(`zapflow_*` tools). Contexto comercial: leia `prospeccao/_contexto/` e os
scripts em `prospeccao/scripts/` antes de qualquer envio.

## Canal oficial (obrigatório — sem exceção)

**Somente** a API oficial Meta abaixo. **Nunca** usar Baileys/Zapo/QR,
sessão não-oficial, outro número ou outra conexão — mesmo que exista na conta
ou que “funcione melhor” para lead frio.

| Campo | Valor |
|---|---|
| Nome | **Mente em foco** |
| Número | `+55 11 94626-4798` |
| connectionId | `cmrz3oczf001oj14urgnlnu18` |
| Tipo | WhatsApp Cloud API (oficial) |

Em todo envio e campanha, passe `connectionId: cmrz3oczf001oj14urgnlnu18`.

**Leads frios (oficial):** texto livre (`zapflow_send_text`) só se o lead
respondeu nas últimas 24h. Abordagem inicial → `zapflow_send_template` com
template **APPROVED** `stresser_previa` (pt_BR) e
`variables: {"1": "<Nome do negócio>"}`. Sem template aprovado a Meta rejeita
com 131047 — nesse caso **não** cair para não-oficial; aguardar/criar template.

Bot ativo nesta conexão — **documentação completa:** `prospeccao/bot/README.md`

| Campo | Valor |
|---|---|
| Nome | `Stresser Digital — Atendimento Prospecção` |
| flowId | `cmt2rfch7001ycxpl0d4096g1` |
| connectionId (UUID Meta) | `95986816-744b-4470-9696-4b33e862eeef` |

Resumo do fluxo:
- **Triagem** → 3 botões Meta (prévia / preço / Gabriel) + keywords de texto livre
- **Esclarecimento** → domínio, Google, processo (antes da prévia)
- **Prévia** → pede material → alerta Gabriel → handoff produção
- **Recusa** → perdido (com recuperação se lead corrige)
- **Autoresposta WB** → ignorada (não inicia bot)
- **Handoff departamento** → só interno, nunca WhatsApp pro lead

CRM pipeline: `Stresser Digital — Prospecção` (`cmt2u2033004wdn0ukxj4hrqg`)
Lead novo → Qualificando → Pediu prévia → Material recebido → Ganho / Perdido

**Manutenção do grafo:** `hermes-chat/zapflow/zapflow-backend/scripts/stresser-bot/config.ts`
Aplicar: `npx tsx scripts/patch-stresser-bot.ts` (ver README do bot)

Alertas Gabriel: nós `notify_*` → `5511994194504` · template `stresser_alert_gabriel`
(ver `prospeccao/_contexto/notificacao-gabriel.md`)

Ao criar/ligar bot via MCP, `connectionId` do fluxo deve ser o **UUID Meta**
(`95986816-…`) ou o cuid (`cmrz3ocz…`) — o backend normaliza para o UUID.

## Bot de prospecção

| Recurso | Caminho |
|---|---|
| Mapa do fluxo + CRM | `prospeccao/bot/README.md` |
| Análise das respostas | `prospeccao/scripts/analise-respostas-leads.md` |
| Config (textos/keywords) | `hermes-chat/.../scripts/stresser-bot/config.ts` |
| Aplicar no banco | `npx tsx scripts/patch-stresser-bot.ts` |

Se as tools `zapflow_*` não aparecerem, peça o token MCP do ZapFlow.

## Disparo de leads (abordagem / follow-up)
1. Gere a mensagem com a skill `prospectar-lead`.
2. Confirme conexão = Mente em foco (`cmrz3oczf001oj14urgnlnu18`).
3. `zapflow_get_contact` / `zapflow_create_contact`.
4. Abordagem fria: `zapflow_send_template` (`stresser_previa`, variables `{"1": nome}`).
   Resposta / dentro de 24h: `zapflow_send_text`. Sempre com `connectionId` acima.
5. Lote: remarketing com o mesmo `connectionId` + `riskAcknowledged=true` + template.
6. Atualize Trello (board Stresser Digital — Prospecção) e `leads/[nicho]/lista.md`.

## Atendimento (lead respondeu)
1. `zapflow_list_conversations`.
2. Se o bot não cobriu: skill `responder-lead` ou `fechar-proposta`.
3. Responda com `zapflow_send_text` + connectionId oficial.
4. Comente no card do Trello.

## Cliente já fechado / em entrega
Se o contato estiver em `clientes/_indice.md`, **pare** e use a skill
`atender-cliente` (contexto de projeto + Trello de entrega). Não use scripts
de prospecção nem o tom de lead frio.

## Regras
- Nunca inventar preço fora do funil (preview grátis → R$ 599).
- Não disparar em massa sem confirmação (e evitar segunda/sexta).
- Tom de `prospeccao/_contexto/tom-de-voz.md` (sem travessão).
- Nas mensagens, apresentar-se como **Stresser Digital / Gabriel** (o nome da conexão WA pode ser outro).
