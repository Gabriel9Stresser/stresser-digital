---
version: 0.2.0
name: atender-cliente
description: |
  Atende clientes ATIVOS da Stresser Digital (já em entrega/suporte), com contexto
  persistente: pasta do projeto, Trello (demandas) e ZapFlow (contato/CRM).
  Use quando quiser: responder cliente no WhatsApp, alinhar status do kanban,
  planejar com contexto do repositório, abrir/mover card no Trello, ou cadastrar
  um novo cliente no índice — NÃO usar para lead frio / prospecção (aí é
  prospectar-lead / atender-zapflow).
  Exemplos: "/atender-cliente MyGuard o que está em teste",
  "/atender-cliente HipHopSide responder no ZapFlow",
  "/atender-cliente cadastrar cliente X com board Y".
argument-hint: "[slug|nome] [ação: status|responder|planejar|trello|cadastrar]"
---

Você atende **cliente em andamento**, não lead. Nunca recomeçar como se fosse
prospecção (sem oferta R$ 599, sem “topam ver uma prévia?”).

## Dois bots (WhatsApp oficial)

| Quem | O que acontece |
|---|---|
| Lead (fora do registry) | Bot Stresser de **prospecção** (prévia → R$599) |
| Cliente no `clientes/registry.json` | **Ack automático** (“recebi… retorno em até 3h” + lembrete Trello). Sem LLM. |

O ack **não** substitui o atendimento fino. Quando Gabriel pedir para responder
ou detalhar → esta skill (Cursor + Trello + projeto + `zapflow_send_text`).

Fonte de verdade de quem é cliente fechado: `clientes/registry.json`
(espelhado no backend ZapFlow para o ack). Manter `_indice.md` e
`cliente.md` alinhados ao registry.

## Leitura obrigatória (nessa ordem)
1. `clientes/registry.json` + `clientes/_indice.md` — achar o `slug`
2. `clientes/<slug>/cliente.md` — vínculos ZapFlow + Trello + path do projeto
3. `clientes/_contexto/regras.md` + `clientes/_contexto/tom-atendimento.md`
4. `clientes/<slug>/notas.md` e `decisoes.md` (se existirem)
5. Trello do board em `cliente.md` (MCP `user-trello`)
6. Projeto em `projeto.path` (ler README/docs relevantes no disco)

Se o slug não existir: diga que falta cadastrar e ofereça preencher a partir de
`clientes/_template/` — não invente board/path.

## Separação dura
| Situação | Skill |
|---|---|
| Lead frio / funil prévia R$599 | `atender-zapflow` / `prospectar-lead` |
| Cliente ativo / entrega / suporte | **esta skill** |

Board de prospecção (`Stresser Digital — Prospecção`) **não** é board de entrega
do cliente. CRM de entrega: pipeline **Stresser Digital — Clientes**.

## Fluxo padrão
1. Identificar cliente: slug, nome, **telefone** ou `contactId` → registry /
   `_indice.md`. Se o contato estiver listado em `clientes/<slug>/cliente.md`,
   use esse slug mesmo que a conversa seja em grupo.
2. Carregar contexto (passos de leitura acima).
3. Se a pergunta for status/demandas → listar cards por coluna do Trello
   (usar nomes/ids de lista do `cliente.md`).
4. Se for dúvida técnica/planejamento → abrir `projeto.path` e responder com
   base no código/docs + o que está no Trello.
5. Se o cliente pedir demanda nova → **criar card no Trello** (backlog) antes
   de prometer execução; confirmar no WhatsApp.
6. Se for responder no WA → `zapflow_send_text` com o `contactId`/`phone` da
   pessoa certa (não só o “principal”) e o canal adequado. Só texto livre na
   janela 24h na oficial. O ack automático já avisou o prazo; sua resposta é
   o detalhe.
7. Atualizar `notas.md` / `decisoes.md` com o que importar.
8. Novo cliente elegível a ack → incluir em `registry.json` (stresser-digital)
   **e** em `zapflow-backend/src/config/clientAckRegistry.json` (deploy).

## MCPs
- **ZapFlow** (`zapflow_*`): contato, conversas, notas CRM, envio WA.
- **Trello** (`user-trello`): `set_active_board` / `get_lists` / `get_cards_by_list_id` /
  `add_card_to_list` / `move_card` / `add_comment` / `update_card_details`.

Antes de mutações no Trello, confirme o `boardId` do `cliente.md` (chame
`set_active_board` se precisar).

## Resposta ao usuário (Gabriel)
Comece com 1–2 linhas: quem é o cliente, em que coluna está o foco, path do
projeto. Depois o pedido (mensagem pronta / plano / cards). Não despejar dump
inteiro do board sem necessidade.

## Cadastrar cliente novo
1. Copiar `clientes/_template/` → `clientes/<slug>/`
2. Preencher `cliente.md` (ZapFlow + Trello + path)
3. Atualizar linha em `clientes/_indice.md`
4. Incluir no `clientes/registry.json` (+ espelho no backend) se deve receber ack
5. Opcional: puxar listas do board via MCP e gravar os ids no `cliente.md`
