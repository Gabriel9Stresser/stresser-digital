#!/usr/bin/env node
/**
 * Insere nós de notificação (Gabriel 5511994194504) no bot de prospecção Stresser.
 * Requer MCP ZapFlow (token em stresser-digital/.cursor/mcp.json).
 *
 * Uso: node prospeccao/scripts/patch-bot-notificacoes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const FLOW_ID = 'cmt2rfch7001ycxpl0d4096g1';
const NOTIFY_PHONE = '5511994194504';
const TEMPLATE = 'stresser_alert_gabriel';

const mcpPath = path.resolve(process.cwd(), '.cursor/mcp.json');
const mcp = JSON.parse(fs.readFileSync(mcpPath, 'utf8'));
const token = mcp?.mcpServers?.zapflow?.headers?.Authorization;
const baseUrl = mcp?.mcpServers?.zapflow?.url || 'https://api.zapflowapp.com.br/mcp';

if (!token) {
  console.error('Token MCP não encontrado em .cursor/mcp.json');
  process.exit(1);
}

async function mcpCall(name, args) {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: { name, arguments: args },
    }),
  });
  const json = await res.json();
  if (json.error) throw new Error(JSON.stringify(json.error));
  const text = json.result?.content?.[0]?.text;
  return text ? JSON.parse(text) : json.result;
}

function notifyNode(id, label, crmStage, actionHint, y) {
  const notifyMessage = [
    '🔔 Stresser · prospecção',
    '',
    'Lead: {nome_contato}',
    'Tel: {phone}',
    `CRM: ${crmStage}`,
    '',
    actionHint,
  ].join('\n');

  return {
    flowId: FLOW_ID,
    id,
    type: 'message',
    y,
    data: {
      label,
      blockPresetId: 'notificacao',
      notifyPhone: NOTIFY_PHONE,
      notifyMessage,
      waTemplateName: TEMPLATE,
      waTemplateLanguage: 'pt_BR',
      waTemplateVariables: {
        '1': '{nome_contato}',
        '2': '{phone}',
        '3': crmStage,
        '4': actionHint,
      },
      interactiveType: 'none',
      interactiveButtons: { items: [], footer: '' },
      crmAction: { enabled: false, pipelineId: '', stageId: '', dealTitleTemplate: '' },
      delay: 0,
    },
  };
}

const NOTIFY_NODES = [
  notifyNode(
    'notify_preview_pediu',
    'Alerta · Pediu prévia',
    'Pediu prévia',
    'Lead pediu prévia grátis. Acompanhe se enviar link/material.',
    420
  ),
  notifyNode(
    'notify_material',
    'Alerta · Material recebido',
    'Material recebido',
    'Lead enviou material. Produzir prévia e avisar quando estiver pronta.',
    820
  ),
  notifyNode(
    'notify_humano',
    'Alerta · Pediu humano',
    'Qualificando',
    'Lead pediu falar com Gabriel. Assuma a conversa no ZapFlow.',
    420
  ),
  notifyNode(
    'notify_ganho',
    'Alerta · Ganho',
    'Ganho R$599',
    'Lead sinalizou fechamento. Confirmar pagamento e próximos passos.',
    420
  ),
];

const REWIRE = [
  ['preview', 'notify_preview_pediu', 'preview_wait'],
  ['preview_ok', 'notify_material', 'preview_handoff'],
  ['humano', 'notify_humano', 'humano_handoff'],
  ['ganho', 'notify_ganho', 'ganho_handoff'],
];

async function main() {
  console.log('Lendo fluxo…');
  await mcpCall('zapflow_get_flow', { flowId: FLOW_ID, full: true });

  for (const node of NOTIFY_NODES) {
    console.log('Upsert nó', node.id);
    await mcpCall('zapflow_upsert_flow_node', node);
  }

  for (const [source, notifyId, target] of REWIRE) {
    console.log(`Rewire ${source} → ${notifyId} → ${target}`);
    await mcpCall('zapflow_disconnect_flow_nodes', { flowId: FLOW_ID, source, target });
    await mcpCall('zapflow_connect_flow_nodes', { flowId: FLOW_ID, source, target: notifyId, keyword: '' });
    await mcpCall('zapflow_connect_flow_nodes', { flowId: FLOW_ID, source: notifyId, target, keyword: '' });
  }

  const summary = await mcpCall('zapflow_get_flow', { flowId: FLOW_ID, full: false });
  console.log('Concluído.', summary?.graph?.nodeCount, 'nós,', summary?.graph?.edgeCount, 'arestas');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
