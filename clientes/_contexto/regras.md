# Regras — Cliente ativo

## 1. Identidade do atendimento
- Se o contato está em `clientes/_indice.md` (ou pasta `clientes/<slug>/`) → modo **cliente**.
- Caso contrário → modo **prospecção** (`prospeccao/` + skills de lead).

## 2. Fontes de verdade
| Assunto | Fonte |
|---|---|
| Quem é / telefone / CRM | ZapFlow (contato + deal) |
| O que fazer / prioridade / coluna | Trello do cliente |
| Como está o código / docs | Pasta do projeto Cursor (`projeto.path`) |
| Decisões e tom | `clientes/<slug>/` |

## 3. Demandas
- Só executar / prometer o que estiver no Trello (ou criar o card na hora e confirmar com o cliente).
- Colunas típicas (ajustar por board em `cliente.md`):
  - Backlog / A fazer
  - Em andamento
  - Em teste / Homologação
  - Aguardando cliente
  - Feito / Entregue
- Alinhar com o cliente: “a gente só segue o que está no board”.

## 4. Projeto Cursor
- Antes de planejar ou tirar dúvida técnica: abrir/ler `projeto.path` (README, docs, código relevante).
- Não inventar stack ou arquitetura se o projeto estiver acessível.

## 5. WhatsApp (ZapFlow)
- Canal oficial Stresser quando for esse canal: connectionId `cmrz3oczf001oj14urgnlnu18`.
- Não usar o bot de **prospecção** para clientes em entrega (handoff humano / agente).
- Texto livre só dentro da janela 24h da Meta (oficial).

## 6. Atualização de contexto
Depois de alinhamentos importantes, atualizar `clientes/<slug>/notas.md` ou `decisoes.md` e, se necessário, o `_indice.md`.
