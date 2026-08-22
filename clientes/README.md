# Clientes em andamento

Esta pasta é o **contexto persistente** de clientes que já fecharam ou estão em entrega.
O agente usa isso via skill `atender-cliente` — **nunca** misturar com `prospeccao/` (leads frios).

## Estrutura

```
clientes/
  registry.json           ← quem é cliente fechado (ack WA + botEnabled=false)
  _indice.md              ← tabela rápida (slug → vínculos)
  _contexto/              ← regras e tom de atendimento a cliente
  _template/              ← copiar para novo cliente
  <slug>/
    cliente.md            ← vínculo ZapFlow + Trello + projeto + resumo
    notas.md              ← histórico curto (opcional)
    decisoes.md           ← decisões combinadas com o cliente (opcional)
```

## Dois bots no WhatsApp oficial
- **Prospecção** — leads fora do `registry.json` → bot Stresser (prévia / R$599).
- **Clientes** — quem está no registry → ack automático (“recebi… retorno em até 3h”
  + lembrete Trello). Detalhe humano depois via skill `atender-cliente`.

Espelho técnico do registry (deploy ZapFlow):
`hermes-chat/zapflow/zapflow-backend/src/config/clientAckRegistry.json`

CRM de entrega: pipeline **Stresser Digital — Clientes** (não misturar com
**Stresser Digital — Prospecção**).

## Regra de ouro
Demanda só entra em execução se existir **card no Trello** do cliente.
Pedido novo no WhatsApp → criar/mover card → só então planejar no projeto.
