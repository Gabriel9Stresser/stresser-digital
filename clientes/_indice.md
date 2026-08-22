# Índice — Clientes em andamento

Fonte de verdade para o agente **não** tratar cliente ativo como lead de prospecção.
Lista machine-readable (ack WA): [`registry.json`](registry.json).

Canal WA: histórico no QR antigo; migração para **Mente em foco** em andamento.
Se a mensagem for de um `contactId`/telefone do registry → ack automático no
ZapFlow; atendimento fino → skill `atender-cliente` com o `slug` correspondente.

CRM entrega: pipeline **Stresser Digital — Clientes** (`cmt2x3nbm004our32furh9jie`).

| slug | nome | tipo | pessoas (ZapFlow) | grupos | trello | projeto |
|---|---|---|---|---|---|---|
| myguard | MyGuard | saas | Léo `cmsq1vz8j01xjt560opyiwdiw`, Aysha `cmmxrgutz00z311su9t114ocv`, Junior `cmmxpugr20ubfi8s4iztu9c1b` | Group MyGuard + Group Myguar & Shipay | Myguard Connect | `/Users/gabrielstresser/Documents/myguard` |
| mekko | MEKKO (Meq / Autopeças) | saas | Sergio `cmsyq5771016w7jnvjhrudvj6`, Lucas `cmq1jmyh5222r5ujgml0lvglf`, Gustavo Pereira `cmt2w34id00019q27i99qcalh` | Mvp | Oficina | `/Users/gabrielstresser/Documents/autopecas` |
| hiphopside | HipHopSide | app | _(opcional)_ | — | HipHopSide | `/Users/gabrielstresser/Documents/HipHopSide` |

## Lookup rápido por telefone
| telefone | slug |
|---|---|
| 5513978080220 | myguard (Léo) |
| 5511991364112 | myguard (Aysha) |
| 5511978612293 | myguard (Junior) |
| 120363429939948630 | myguard (grupo Shipay) |
| 120363314246793290 | myguard (grupo antigo) |
| 5511986245337 | mekko (Sérgio) |
| 5511963672435 | mekko (Lucas) |
| 5511985652069 | mekko (Gustavo Pereira) |
| 120363429498139477 | mekko (grupo Mvp) |

## Como usar
1. Copie `clientes/_template/` → `clientes/<slug>/`
2. Preencha `cliente.md` e atualize esta tabela
3. Atendimento: skill `/atender-cliente <slug ou nome>`
