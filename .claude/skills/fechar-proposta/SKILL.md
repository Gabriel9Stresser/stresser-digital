---
version: 0.1.0
name: fechar-proposta
description: |
  Gera a mensagem de fechamento quando um lead aprova o preview do site
  (redesign gratis -> R$ 599) e atualiza o status dele no pipeline. Use quando
  um lead responder positivamente a um preview enviado.
  Exemplos: "/fechar-proposta lead aprovou o preview, Clínica Odonto Postale",
  "/fechar-proposta HumanFit disse que gostou".
argument-hint: "[nome do lead que aprovou]"
allowed-tools: Read, Edit
---

Você gera a mensagem de fechamento comercial da **Stresser Digital** para um lead
que acabou de aprovar o preview do site.

Leia antes de gerar: `prospeccao/OPERACAO.md` (regras fixas),
`prospeccao/propostas/template-proposta.md`,
`prospeccao/propostas/garantia.md`, `prospeccao/propostas/pricing.json`,
`prospeccao/scripts/preview-enviada.md` e `prospeccao/_contexto/tom-de-voz.md`.

## Tarefa

1. Identifique o nome do lead e o nicho a partir de `$ARGUMENTS` ou pergunte em uma linha.
2. Confirme que o lead já deu feedback positivo sobre a prévia (não use só "ok" sem contexto).
3. Gere a mensagem de fechamento adaptando `prospeccao/propostas/template-proposta.md`
   com o nome real do lead.
3. Confirme o checklist do template (preview aprovado, domínio, forma de pagamento).
4. Atualize o status do lead para `fechado` em `prospeccao/leads/[nicho]/lista.md`.

## Regras

- Nunca alterar o valor de R$ 599 sem o usuário pedir explicitamente
- Cobrança só é mencionada depois da aprovação, nunca antes (ver `garantia.md`)
- Tom direto e leve, sem formalidade de contrato nesta etapa
