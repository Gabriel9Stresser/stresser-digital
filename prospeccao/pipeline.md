# Pipeline de Prospecção

CRM: [Stresser Digital — Prospecção](https://trello.com/b/oQMaTX3G/stresser-digital-prospec%C3%A7%C3%A3o)  
Canal: `prospeccao/_contexto/canal-whatsapp.md` + perfil `whatsapp-perfil-stresser.md`  
**Regras operacionais (bot, prévia, oferta):** `prospeccao/OPERACAO.md`

## Resumo (22/08 — 1º + 2º disparo oficial concluídos)

Templates `stresser_*` **APPROVED**. Abordagem enviada via **Mente em foco** (API oficial Meta).

| Leva | Contatados | Observação |
|---|---|---|
| 1ª leva | 55 | 7 retries reenviados hoje (contato ausente na 1ª tentativa) |
| 2ª leva | 45 | Disparo concluído 22/08 ~08:00 |

**Total contatado:** 107 leads com WhatsApp válido · Templates rotacionados: `stresser_previa`, `stresser_convite_previa`, `stresser_hello_negocio`.

## 2ª leva — concluída (22/08)

| Nicho | Disparados |
|---|---|
| Odontologia | 11 novos + 5 retries |
| Estética | 8 |
| Academias | 6 |
| Advocacia | 12 + 1 retry |
| Psicologia | 8 + 1 retry |

Log: `prospeccao/scripts/_disparo_leva2_resultado.jsonl` (+ retry manual dos 7 da 1ª leva).

## Resumo 1ª leva (referência)

## Alertas WhatsApp → Gabriel

Bot com nós `notify_*` → **5511994194504** (Mente em foco / API oficial).  
Template Meta: `stresser_alert_gabriel` — ver `prospeccao/_contexto/notificacao-gabriel.md`.

Disparam após mover CRM: pediu prévia · material recebido · pediu humano · ganho.

## Próximos passos
1. Monitorar respostas no ZapFlow — bot **Stresser Digital — Atendimento Prospecção**
2. Leads que responderem: skill `responder-lead` ou `fechar-proposta` se aprovar preview
3. Follow-up D+3/D+7 para quem não responder
4. Atualizar cards no Trello conforme respostas

## 3ª leva — concluída (22/08 ~18:25)

| Nicho | Disparados |
|---|---|
| Fisioterapia | 5 |
| Nutrição | 2 |
| Veterinário | 3 |

**Total 3ª leva:** 10 · **0 falhas** · Log: `prospeccao/scripts/_disparo_leva3_resultado.jsonl`  
Script: `prospeccao/scripts/disparo_leva3.py`

**Total contatado (1ª + 2ª + 3ª):** 117 leads com template Meta · bot Stresser ativo na triagem.

### Ainda pendente (sem WhatsApp móvel validado)

| Motivo | Qtd |
|---|---|
| `(a prospectar)` — falta cadastrar no Maps/Doctoralia | 18 |
| `confirmar Doctoralia` — sem número público | 2 |
| Fixo / sem WhatsApp (odontologia, advocacia, vet Perdizes) | 4 |

Próximo: pesquisar Maps e preencher listas vazias antes de nova leva.

## 3ª leva — preparação (referência)

Ângulo: nota alta no Google/Maps mas site lento no celular, WhatsApp escondido, SEO técnico fraco.

| Nicho | Lista | Status |
|---|---|---|
| Fisioterapia | `leads/fisioterapia/lista.md` | números parciais verificados |
| Nutrição | `leads/nutricao/lista.md` | confirmar Doctoralia |
| Veterinário | `leads/veterinario/lista.md` | números parciais verificados |
| Contabilidade | `leads/contabilidade/lista.md` | a prospectar (Maps) |
| Salões | `leads/saloes/lista.md` | a prospectar (Maps) |
| Medicina | `leads/medicina/lista.md` | a prospectar (Maps) |

Bot atualizado: keywords de performance (`site lento`, `trava no celular`, etc.) → fluxo `ja_tenho` / esclarecimento.

Scripts: `scripts/abordagem-inicial.md` (templates por nicho) · `scripts/objecoes.md` (site lento, já no Google).

## ZapFlow (oficial apenas)
- Conexão: **Mente em foco** · `cmrz3oczf001oj14urgnlnu18` · `+55 11 94626-4798`
- **Proibido** API não-oficial nestes disparos
- Bot: Stresser Digital — Atendimento Prospecção · `cmt2rfch7001ycxpl0d4096g1`
- CRM pipeline: `Stresser Digital — Prospecção` · `cmt2u2033004wdn0ukxj4hrqg`

## Log do disparo
Detalhes em `prospeccao/scripts/_disparo_resultado.jsonl` (22/08/2026).
