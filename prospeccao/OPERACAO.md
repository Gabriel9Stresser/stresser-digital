# Operação Stresser Digital — Prospecção

**Fonte de verdade operacional.** Agentes e skills devem ler isto antes de alterar bot, scripts ou prévias.

Regra Cursor: `.cursor/rules/stresser-prospeccao-operacao.mdc`

---

## Oferta (não negociar sem o Gabriel)

| Etapa | Regra |
|---|---|
| Abordagem | Prévia **grátis**, sem compromisso |
| Cobrança | **R$ 599** à vista, **só depois** da aprovação |
| Se não aprovar | Fica com a prévia, sem custo |
| Narrativa | Site **rápido no celular**, WhatsApp visível, nota alta no Google vs página lenta |

Referência: `prospeccao/_contexto/oferta.md`, `garantia.md`, `pricing.json`

---

## Bot WhatsApp (ZapFlow)

| Item | Valor |
|---|---|
| Flow | `cmt2rfch7001ycxpl0d4096g1` · Stresser Digital — Atendimento Prospecção |
| Conexão | Mente em foco · `cmrz3oczf001oj14urgnlnu18` · `+55 11 94626-4798` |
| Pipeline CRM | `cmt2u2033004wdn0ukxj4hrqg` |
| Alertas Gabriel | `5511994194504` · template `stresser_alert_gabriel` |

**Código (monorepo hermes-chat):**

```
zapflow/zapflow-backend/scripts/stresser-bot/config.ts   ← textos, keywords, layout, CRM
zapflow/zapflow-backend/scripts/stresser-bot/apply.ts
```

Aplicar: `npx tsx scripts/patch-stresser-bot.ts` (local ou `docker exec hermes-backend` em produção).

Mapa do fluxo: `prospeccao/bot/README.md`

### Mensagens — o que NÃO fazer

- **Não** fechar pós-prévia com binário: "se gostou paga R$ 599, se não desiste".
- **Não** pressionar compra no mesmo breath do link da prévia.

### Mensagens — o que fazer

1. **Enviar link** com `prospeccao/scripts/preview-enviada.md` (feedback + performance + adaptações, sem pressa).
2. **Bot nó 4 · Feedback da prévia** — consultativo se o lead responde depois do handoff de produção.
3. **Fechar** só com skill `fechar-proposta` após feedback positivo (`template-proposta.md`).

### Layout no editor ZapFlow

5 colunas em `NODE_POSITIONS` (não espalhar nós): Perdido → Entrada → Hub → Prévia (vertical) → Info → Fechamento. Ver comentário `COL` em `config.ts`.

---

## Prévia de site (stresserdigital.com.br)

- Rota privada: `/{slug}` (ex. `/maggioli`)
- **noindex** + `robots.txt` bloqueia a rota
- Módulo compartilhado: `src/preview/` (`PreviewChrome`, comparativo +42 pts)
- **Não** levar barra de prévia/comparativo ao site final do cliente
- Copy de site: sem travessão (`—`) — ver `.cursor/rules/site-copy-copywriting.mdc`

---

## Disparo de leads

- **Só** API oficial Meta (nunca Zapo nestes disparos)
- Templates: `stresser_previa`, `stresser_convite_previa`, `stresser_hello_negocio`
- Validar WhatsApp no Maps/Doctoralia antes de disparar
- Listas: `prospeccao/leads/{nicho}/lista.md`
- Scripts: `prospeccao/scripts/abordagem-inicial.md`, `objecoes.md`, `follow-up.md`
- Disparo em lote: `prospeccao/scripts/disparo_leva3.py` (3ª leva novos nichos)

---

## Skills (stresser-digital)

| Situação | Skill |
|---|---|
| Mensagem fria / follow-up | `prospectar-lead` |
| Lead respondeu dúvida/objeção | `responder-lead` |
| Lead aprovou prévia | `fechar-proposta` |
| Disparo / CRM / bot ZapFlow | `atender-zapflow` |

---

## Deploy bot em produção

```bash
rsync -avz hermes-chat/.../stresser-bot/ hostinger-zapflow:/opt/hermes-chat/zapflow/zapflow-backend/scripts/stresser-bot/
ssh hostinger-zapflow 'docker cp .../config.ts hermes-backend:/app/scripts/stresser-bot/config.ts && \
  docker cp .../apply.ts hermes-backend:/app/scripts/stresser-bot/apply.ts && \
  docker exec hermes-backend npx tsx scripts/patch-stresser-bot.ts'
```

Site (Vercel): push `stresser-digital` `main`.
