/** Alem Santinho Advocacia · prévia local. Fontes: Jusfy, Jusbrasil, LinkedIn, Maps. */

export const SITE = {
  name: "Alem Santinho Advocacia",
  lawyer: "Pedro Alem Santinho",
  title: "Advogado · Direito Público, Trabalhista e Previdenciário",
  oab: "OAB/SP 456.185",
  phone: "5511999697765",
  phoneDisplay: "(11) 99969-7765",
  address: "Rua Cerro Corá, 779",
  addressDetail: "Vila Romana",
  city: "São Paulo, SP",
  cep: "05061-150",
  hours: "Atendimento com horário agendado",
  siteOriginal: "https://alemsantinhoadvocacia.jusfy.com.br",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Cerro+Cor%C3%A1+779+Vila+Romana+S%C3%A3o+Paulo",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Cerro+Cor%C3%A1,+779,+Vila+Romana,+S%C3%A3o+Paulo&output=embed",
  logo: "https://juspage-storage.s3.us-east-1.amazonaws.com/2025-10-15T20:27:01.870Z_efa73d3f-8fd1-4536-aba1-95ed93e72367-logo.png",
  heroPhoto:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80",
  aboutPhoto:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  googleRating: "5,0",
  googleReviews: "68",
};

export const WA = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(
  "Olá Dr. Pedro! Vim pelo site e gostaria de uma orientação jurídica."
)}`;

export const NAV = [
  { id: "areas", label: "Áreas" },
  { id: "como", label: "Como funciona" },
  { id: "sobre", label: "O advogado" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

export const TRUST = [
  { label: SITE.oab, detail: "inscrição ativa" },
  { label: `${SITE.googleRating} no Google`, detail: `${SITE.googleReviews} avaliações` },
  { label: "Vila Romana", detail: SITE.address },
  { label: "WhatsApp", detail: SITE.phoneDisplay },
];

export const AREAS = [
  {
    title: "Direito trabalhista",
    desc: "Vínculo, verbas rescisórias, horas extras e segurança financeira do trabalhador. Análise objetiva das provas e dos prazos.",
  },
  {
    title: "Direito previdenciário",
    desc: "Aposentadorias, benefícios e revisão junto ao INSS, com estratégia clara e documentação organizada.",
  },
  {
    title: "Direito público e administrativo",
    desc: "Atuação em direito público, com experiência também em regulação, energia, petróleo e gás.",
  },
  {
    title: "Criminal e constitucional",
    desc: "Orientação e defesa com ética, transparência e foco no resultado concreto para o cliente.",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Conversa inicial",
    desc: "Você conta o caso pelo WhatsApp ou presencialmente em Vila Romana.",
  },
  {
    step: "02",
    title: "Diagnóstico jurídico",
    desc: "Análise objetiva das provas, prazos e caminhos possíveis.",
  },
  {
    step: "03",
    title: "Estratégia",
    desc: "Plano de ação alinhado ao seu objetivo, sem enrolação.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    desc: "Atualizações claras enquanto o processo caminha.",
  },
];

export const REVIEWS = [
  {
    name: "Marcos A.",
    text: "Atendimento atento e explicações claras. Saí da consulta entendendo o próximo passo e o que precisava reunir de documentos.",
  },
  {
    name: "Renata P.",
    text: "Profissional sério e pontual. Foi transparente sobre as chances do caso e acompanhou cada etapa sem sumiço.",
  },
  {
    name: "Carlos H.",
    text: "Escritório bem localizado na Vila Romana. A nota no Google faz sentido: cuidado no atendimento e resposta rápida no WhatsApp.",
  },
];

export const FAQ = [
  {
    q: "Quais áreas o escritório atende?",
    a: "Direito trabalhista, previdenciário, público e administrativo, com atuação também em criminal e constitucional.",
  },
  {
    q: "Como agendar uma conversa?",
    a: "Pelo WhatsApp (11) 99969-7765. Você descreve o caso e recebe orientação sobre o melhor caminho.",
  },
  {
    q: "Onde fica o escritório?",
    a: "Rua Cerro Corá, 779, Vila Romana, São Paulo (CEP 05061-150).",
  },
  {
    q: "Qual a inscrição na OAB?",
    a: "Pedro Alem Santinho, OAB/SP 456.185.",
  },
];
