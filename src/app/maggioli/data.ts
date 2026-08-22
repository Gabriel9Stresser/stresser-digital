const BASE = "https://www.igorpsicologo.com";

export const img = (path: string) =>
  `${BASE}/${path.replace(/^\//, "")}`;

export const SITE = {
  name: "Igor Maggioli",
  title: "Psicólogo Clínico",
  crp: "CRP 06/177930",
  phone: "5511939082178",
  phoneDisplay: "(11) 93908-2178",
  address: "Av. Antártica, 675",
  addressDetail: "19º e 20º andar · Perdizes",
  city: "São Paulo — SP",
  siteOriginal: "https://www.igorpsicologo.com",
  logo: img("/adm/imagens/247b89326ec6d080b42de7b4b0558d61.png"),
  heroPhoto: img("/adm/imagens/b835c32a3577e84d6cf618b6afed9ede.90.webp"),
  aboutPhoto: img("/adm/imagens/97b44588642d0526bdfae0f4ea32b304.90.webp"),
  videoId: "J1P609m99Pg",
};

export const WA = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(
  "Olá Igor! Gostaria de agendar uma sessão."
)}`;

export const NAV = [
  { id: "sobre", label: "Sobre mim" },
  { id: "servicos", label: "Como te ajudo" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
];

export const STATS = [
  { value: "+5", label: "anos promovendo saúde mental" },
  { value: "+1.000", label: "horas de estudo e aperfeiçoamento" },
  { value: "+1.000", label: "sessões realizadas" },
];

export const SERVICES = [
  {
    title: "Psicoterapia presencial",
    desc: "Processo terapêutico contínuo em Perdizes, com autoconhecimento e acolhimento em espaço reservado e confortável.",
    image: img("/adm/imagens/86d0dd0365d16ecc31439fa6a149d99b.90.webp"),
    href: WA,
  },
  {
    title: "Psicoterapia online",
    desc: "O mesmo acolhimento da sessão presencial, com flexibilidade para atender de qualquer lugar com privacidade.",
    image: img("/adm/imagens/5d0c8e07b9c5b92a092b510e1078f2ff.90.webp"),
    href: WA,
  },
  {
    title: "Atendimento emergencial",
    desc: "Suporte em momentos de crise, com acolhimento imediato e orientação para estabilização emocional.",
    image: img("/adm/imagens/33fc698223d0235e54a7054131c2962b.90.webp"),
    href: WA,
  },
];

export const TREATMENTS = [
  {
    title: "Depressão",
    desc: "Acompanhamento para recuperar energia, motivação e qualidade de vida quando a tristeza ultrapassa o cotidiano.",
  },
  {
    title: "Bipolaridade",
    desc: "Tratamento para estabilizar mudanças extremas de humor e construir rotinas mais equilibradas.",
  },
  {
    title: "Ansiedade e estresse",
    desc: "Estratégias para reduzir preocupações excessivas, tensão constante e sensação de sobrecarga.",
  },
  {
    title: "Relacionamentos",
    desc: "Espaço para compreender padrões afetivos e desenvolver vínculos mais saudáveis.",
  },
];

export const PILLARS = [
  { step: "01", title: "Diagnóstico", desc: "Compreensão clara do que você está vivendo." },
  { step: "02", title: "Plano terapêutico", desc: "Objetivos definidos em conjunto, com metas realistas." },
  { step: "03", title: "Processo", desc: "Sessões regulares com acompanhamento contínuo." },
  { step: "04", title: "Alta", desc: "Encerramento quando os objetivos são alcançados." },
];

export const REVIEWS = [
  {
    name: "Janaina Duarte",
    text: "Amei ter passado com Dr. Igor e vou seguir meu tratamento. Amei a forma acolhedora e profissional.",
    avatar: img("/adm/imagens/07164165c2001d7dda341e36bc4c6153.jpg"),
  },
  {
    name: "Paciente Google",
    text: "Depois de um tempo procurando um psicólogo, me identifiquei com o Dr. Igor e estou evoluindo bastante.",
    avatar: img("/adm/imagens/95d27b9ad67bd096fef77290f6efb2e0.jpg"),
  },
  {
    name: "Paciente Google",
    text: "Profissional atencioso, consultório agradável e abordagem que realmente faz diferença no dia a dia.",
    avatar: img("/adm/imagens/fd7173bfb0b25cd3926cdcb162d92dd0.jpg"),
  },
];

export const FAQ = [
  {
    q: "Quanto tempo dura a sessão?",
    a: "50 minutos, com frequência semanal, quinzenal ou pontual conforme sua necessidade.",
  },
  {
    q: "Atendimento online funciona?",
    a: "Pesquisas mostram eficácia equivalente à presencial. A escolha depende da sua preferência e rotina.",
  },
  {
    q: "Aceita plano de saúde?",
    a: "Sim, na modalidade de reembolso. Consulte seu plano para verificar cobertura com psicólogo.",
  },
  {
    q: "Quem pode ser atendido?",
    a: "Jovens e adultos a partir de 18 anos. Online para todo o Brasil ou presencial em São Paulo.",
  },
];
