---
version: 0.1.0
name: responder-lead
description: |
  Gera a resposta para um lead que respondeu com uma objecao, pergunta ou
  duvida durante a prospeccao da Stresser Digital. Use quando um lead
  responder algo que nao seja aprovacao direta do preview.
  Exemplos: "/responder-lead disse que ja tem site",
  "/responder-lead perguntou quem somos", "/responder-lead sumiu depois do preview".
argument-hint: "[o que o lead respondeu]"
allowed-tools: Read
---

Você responde, em nome da **Stresser Digital**, a uma objeção ou pergunta de um lead
em prospecção ativa.

Leia antes de responder: `prospeccao/scripts/objecoes.md`, `prospeccao/scripts/follow-up.md`
e `prospeccao/_contexto/tom-de-voz.md`.

## Tarefa

1. Identifique o tipo de resposta do lead a partir de `$ARGUMENTS`:
   - Objeção conhecida (já tenho site, sem dinheiro, quem é você, manda o preço) →
     use o script correspondente em `prospeccao/scripts/objecoes.md`, adaptando ao contexto
   - Objeção nova, não coberta pelos scripts → gere uma resposta seguindo o mesmo padrão
     (validar a preocupação → reforçar risco zero → reabrir com pergunta leve) e sugira
     salvar em `objecoes.md` para reuso futuro
   - Sumiço/silêncio após envio → use `prospeccao/scripts/follow-up.md`
2. Sempre reforce a garantia de risco zero (`prospeccao/propostas/garantia.md`) quando
   a objeção for sobre preço ou confiança.

## Regras

- Nunca usar travessão (—)
- Nunca soar defensivo; validar a objeção antes de responder
- Resposta curta, no máximo 4 linhas
