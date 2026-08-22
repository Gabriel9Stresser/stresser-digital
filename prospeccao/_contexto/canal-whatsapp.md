# Canal WhatsApp — oficial

Centralize **todos** os disparos e o atendimento dos leads de prospecção neste canal.

| Campo | Valor |
|---|---|
| Conexão ZapFlow | **Mente em foco** |
| Número | `+55 11 94626-4798` |
| connectionId | `cmrz3oczf001oj14urgnlnu18` |
| Tipo | WhatsApp Cloud API (oficial) |
| Status | Ativa |

## Bot de atendimento

| Campo | Valor |
|---|---|
| Nome | Stresser Digital — Atendimento Prospecção |
| flowId | `cmt2rfch7001ycxpl0d4096g1` |
| Ativo | sim |
| Disparo | nova conversa ou keywords (oi, preço, prévia, site, quem…) |

Fluxo: triagem com botões → prévia (pede site/Instagram/cores) → handoff Gabriel  
Objeções cobertas: preço, quem somos, já tenho site, falar com humano.

## Perfil (nome que o lead vê)
Hoje o chip ainda pode aparecer como **Mente em foco**. Para marcar como Stresser Digital:
ver `whatsapp-perfil-stresser.md` (Meta WhatsApp Manager, aprovação do nome de exibição).

## Regra (dura)
- **Só** esta conexão oficial. **Proibido** Baileys/Zapo/QR, outro número ou API não-oficial.
- Tom Stresser Digital nas mensagens (mesmo que o chip ainda diga "Mente em foco").

## Abordagem fria (só oficial Meta)
Texto livre só se o lead **respondeu nas últimas 24h**. Fora disso: template APPROVED.

| Situação | Ferramenta |
|---|---|
| Lead frio / primeira mensagem | `zapflow_send_template` → `stresser_previa` (pt_BR), `variables: {"1": "Nome"}` |
| Lead já respondeu (&lt; 24h) | `zapflow_send_text` |

Sem template APPROVED → **não disparar** (e não improvisar canal paralelo).  
Template na WABA: `stresser_previa` (criado 21/08).
