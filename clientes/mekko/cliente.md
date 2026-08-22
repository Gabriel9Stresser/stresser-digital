# MEKKO (Autopeças / Meq)

## Identidade
| Campo | Valor |
|---|---|
| slug | mekko |
| nome | MEKKO |
| tipo | saas |
| status | ativo |
| nicho | marketplace B2B autopeças |
| contato principal | Sérgio Fontes |
| tom preferido | direto / técnico |
| aliases | Meq, Autopeças, Oficina |

## ZapFlow — pessoas e grupos
Histórico veio da conexão **QR antiga** (`5511975558289`). Qualquer um abaixo → contexto MEKKO.

| Papel | Nome no ZapFlow | contactId | telefone |
|---|---|---|---|
| Time | Sergio Fontes | `cmsyq5771016w7jnvjhrudvj6` | `5511986245337` |
| Time | Lucas | `cmq1jmyh5222r5ujgml0lvglf` | `5511963672435` |
| Time | Gustavo Pereira | `cmt2w34id00019q27i99qcalh` | `5511985652069` |
| Grupo | Mvp | `cmsq1cfwp01vnt560mkhmh1bk` | `120363429498139477` |

| Campo | Valor |
|---|---|
| organizationId | cmf04by6q000111a1mtcwe3mi |
| contactId (principal) | `cmsyq5771016w7jnvjhrudvj6` |
| telefone (principal) | `5511986245337` |
| e-mail produto | contato@mekko.com.br |
| canal histórico | QR antigo ZapFlow |
| canal destino | Mente em foco (oficial) — migração em andamento |
| CRM pipeline | Stresser Digital — Clientes (`cmt2x3nbm004our32furh9jie`) |
| dealId | `cmt2x4sos005eur32yl5hry28` (Em entrega) |
| registry | `clientes/registry.json` → ack automático + botEnabled=false |

## Trello
| Campo | Valor |
|---|---|
| boardId | 6a71223509b3652e53ad8216 |
| boardNome | Oficina |
| boardUrl | https://trello.com/b/6bP06I7B/oficina |
| listaBacklog | To Do (`6a849b84d1764eee5c12d8e5`) |
| listaAndamento | Developing (`6a849b88842cb8c1e42e0621`) |
| listaTeste | Testing (`6a849b94270b1fe608d67fb4`) / Ready To Test (`6a849b91b47ddfc4acf51b3b`) |
| listaAguardandoCliente | Returned by Tester (`6a849d1cb39a2a41163ce532`) |
| listaFeito | Approved (`6a849b9ac0904d6d7ace9c61`) |

Outras: ChangeLog, Developed, Documentação.

Regra: demandas novas → To Do. Só priorizar o que estiver no board Oficina.

## Projeto (Cursor / disco)
| Campo | Valor |
|---|---|
| path | /Users/gabrielstresser/Documents/autopecas |
| repo / remote | — |
| stack resumida | Next.js 16, TypeScript, Tailwind, PostgreSQL 16, Prisma, JWT, worker, Caddy |
| docs chave | `docs/` (visão geral → handoff) |
| ambiente | VPS servidor único (ver `docs/09-servidor-unico.md`) |

## Contexto geral (ler sempre)
Marketplace B2B de autopeças (marca MEKKO). Time Sérgio, Lucas e Gustavo Pereira;
demandas e alinhamentos no grupo WhatsApp **Mvp**. Board Trello **Oficina**.
Não tratar como lead de site Stresser.

## Em andamento agora
- Ver Developing / Testing / Ready To Test no board Oficina
- Integrações (pagamento, frete, e-mail) costumam ser o gargalo — ver grupo Mvp

## Não fazer / limites
- Não misturar com board de prospecção Stresser
- Só demandas no Trello Oficina
- Não usar tom/scripts de prospecção com esses contatos
