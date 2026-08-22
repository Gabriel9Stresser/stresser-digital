# Notificação WhatsApp → Gabriel (prospecção)

Quando o bot move um lead no CRM ou precisa de humano, a **API oficial Mente em foco** avisa o Gabriel no pessoal.

| Campo | Valor |
|---|---|
| Conexão disparo | **Mente em foco** · `cmrz3oczf001oj14urgnlnu18` · `+55 11 94626-4798` |
| Destino (Gabriel) | `+55 11 99419-4504` · E.164: `5511994194504` |
| Bot | `Stresser Digital — Atendimento Prospecção` · `cmt2rfch7001ycxpl0d4096g1` |

## Como funciona no ZapFlow

Nós com `blockPresetId: notificacao` e `notifyPhone: 5511994194504` **não falam com o lead**: enviam mensagem só para o Gabriel, usando a mesma conexão oficial.

Variáveis disponíveis no texto:

- `{nome_contato}` · `{nome}` · `{phone}` · `{resposta}` (última msg do lead)

Nós de alerta (após mover CRM):

| Nó | Quando dispara | Coluna CRM |
|---|---|---|
| `notify_preview_pediu` | Lead pediu prévia | Pediu prévia |
| `notify_material` | Lead enviou material | Material recebido |
| `notify_humano` | Pediu falar com Gabriel | Qualificando |
| `notify_ganho` | Aprovou / quer fechar | Ganho |

Depois do alerta o fluxo segue para **handoff** (bot para, Gabriel assume no painel).

## Template Meta (obrigatório fora da janela 24h)

Cadastre na Meta Business Manager → WhatsApp → Message templates.

| Campo | Valor |
|---|---|
| Nome | `stresser_alert_gabriel` |
| Idioma | `pt_BR` |
| Categoria | **UTILITY** (atualização de solicitação / handoff interno) |

**Corpo:**

```
🔔 Stresser · prospecção

Lead: {{1}}
Tel: {{2}}
CRM: {{3}}

{{4}}
```

**Exemplos de variáveis (para aprovação Meta):**

| {{1}} | {{2}} | {{3}} | {{4}} |
|---|---|---|---|
| Clínica Odonto Postale | 5511998739823 | Pediu prévia | Abra o ZapFlow e acompanhe o material. |
| Academia HumanFit | 5511982016670 | Material recebido | Produzir prévia e responder ao lead. |
| Dr. Silva Advocacia | 5511981935674 | Pediu humano | Lead pediu falar com Gabriel. Assuma o chat. |
| Studio Belle | 5511974445843 | Ganho R$599 | Confirmar pagamento e kickoff de entrega. |

Até o template ser **APPROVED**, o bot usa só `notifyMessage` (texto livre). Isso só entrega se o Gabriel tiver janela 24h aberta com o número Mente em foco — por isso priorize aprovar o template.

## Texto livre (fallback / preview no painel)

```
🔔 Stresser · prospecção

Lead: {nome_contato}
Tel: {phone}
CRM: {etapa}

{acao}
```

Substitua `{etapa}` e `{acao}` conforme a tabela acima.

## Manutenção

- Script que aplica os nós no bot: `prospeccao/scripts/patch-bot-notificacoes.mjs` (via MCP ZapFlow)
- Revisar no editor: ZapFlow → Bots → **Stresser Digital — Atendimento Prospecção**
