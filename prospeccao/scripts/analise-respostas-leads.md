# Análise de respostas dos leads — 22/08/2026

Base: 2ª leva de disparo (52 templates) + respostas do dia.

**Bot:** ver mapa completo em [`../bot/README.md`](../bot/README.md) · config em `hermes-chat/.../scripts/stresser-bot/config.ts`

## Como os leads se comunicam

### 1. Aceite direto (curto)
Leads que já entenderam a oferta respondem com **1–3 palavras**:

| Exemplo real | Rota ideal |
|---|---|
| `Pode enviar` | → prévia |
| `Quero` / `Eu quero` | → prévia |
| `Sim` | → prévia |
| `Poder, pode` | → prévia |

**Ação no bot:** aresta `triagem → preview` com `pode enviar`, `eu quero`, `pode mandar`, etc. (sem exigir botão interativo).

### 2. Recusa educada
Padrão muito comum em clínicas e escritórios:

| Exemplo | Rota ideal |
|---|---|
| `Não, obrigada!` | → perdido |
| `Não, obrigado` | → perdido |

**Ação:** keyword `obrigad` + frases completas; **não** usar `agora não` solto (falso positivo em “agora não faço mais”).

### 3. Contexto longo + dúvidas (não é recusa)
Leads com site ou histórico no Google explicam a situação antes de aceitar:

- Domínio / hospedagem (“preciso de acesso ao domínio?”)
- Prévia provisória vs site no ar (“mudariam e mostrariam?”)
- Google / SEO / propaganda (“não faço mais propaganda no Google”)
- Links (`share.google`, URL do site atual)
- Perguntas sobre processo (“o que achou do meu site?”)

**Caso PsicaNadia:** thread longa; bot marcou **perdido** por match errado em “agora não **faço mais**”; depois “Quero” caiu em handoff interno.

**Ação:** nó `esclarecimento_previa` antes da prévia; dúvidas de domínio/Google não vão direto a perdido.

### 4. Correção após erro do bot
| Exemplo | Rota ideal |
|---|---|
| `Não recusei` | → preview (recuperação) |
| `Eu quero` após despedida | → preview |

**Ação:** aresta `perdido → preview` com `não recusei`, `eu quero`.

### 5. Ruído — autoresposta WhatsApp Business
Muitos números comercial respondem com **menu automático** ao receber template frio:

- “agradece seu contato”
- horário de atendimento
- “digite 1️⃣ 2️⃣ 3️⃣”
- “em instantes um atendente…”

Exemplos observados: Integrata, Saraiva, Rina, Andréa Pimentel, CTVM, etc.

**Problema:** bot trata como conversa real → triagem + “Não entendi” indevido.

**Ação:** filtro `isWhatsAppBusinessAutoReply` no ia-service e no encaminhamento ao bot (não inicia/avanca fluxo).

### 6. “Já tenho site” com link
Não é só a frase — muitas vezes mandam **URL** ou Google Share:

- `Já tenho site` + link
- Só o link `https://…`

**Ação:** `ja_tenho` com keywords `http`, `share.google`, `domínio`; resposta convida `pode enviar` / `quero prévia`.

## Resumo de mudanças aplicadas

Ver [`../bot/README.md`](../bot/README.md) para mapa do fluxo e manutenção.

| Camada | Mudança |
|---|---|
| Motor (`flowExecutor`) | Filtro autoresposta WB; keywords com limite de palavra; handoff interno silencioso |
| Backend (`IAServiceClient`) | Não encaminha autoresposta ao ia-service |
| Bot (`stresser-bot/config.ts`) | Grafo unificado: esclarecimento, engajamento, recuperação, CRM, alertas |

## Monitorar

- Leads que **só** autoresposta: não contar como “respondeu”; follow-up humano se o negócio vale.
- Threads longas: preferir handoff Gabriel cedo se 2+ fallbacks.
- PsicaNadia: deal deve estar em **Pediu prévia** / **Qualificando** (não Perdido).

## Próximos refinamentos (backlog)

Ver também [`../bot/README.md`](../bot/README.md#backlog).

- Template `stresser_alert_gabriel` end-to-end testado
- Detectar mídia/link no `preview_wait` como material recebido
