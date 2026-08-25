/** Libela Estética · dados da prévia (local). Fonte: site histórico + Maps. */

const ARCHIVE =
  "https://web.archive.org/web/20180812112016im_/https://www.libela.com.br";

export const img = (path: string) =>
  `${ARCHIVE}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE = {
  name: "Libela Estética",
  title: "Clínica de estética em Santana",
  phone: "5511987534757",
  phoneDisplay: "(11) 98753-4757",
  phoneFixo: "(11) 2764-0385",
  email: "atendimento@libela.com.br",
  address: "Rua Vicente Soares, 331",
  addressDetail: "Santana",
  city: "São Paulo, SP",
  cep: "02403-070",
  since: "2013",
  hours: "Seg a sáb, com horário agendado",
  siteOriginal: "https://libela.com.br",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Vicente+Soares+331+Santana+S%C3%A3o+Paulo",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Vicente+Soares,+331,+Santana,+S%C3%A3o+Paulo&output=embed",
  logo: img("/wp-content/uploads/2017/10/logo-libela-retina.png"),
  logoDark: img("/wp-content/uploads/2017/10/logo-libela-green.png"),
  heroPhoto: img("/wp-content/uploads/2015/05/9.jpg"),
  aboutPhoto: img("/wp-content/uploads/2015/05/libela-clinica.jpg"),
  mapPhoto: img("/wp-content/uploads/2016/07/libela-local.png"),
};

export const WA = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(
  "Olá Libela! Vim pelo site e gostaria de agendar uma avaliação."
)}`;

export const NAV = [
  { id: "tratamentos", label: "Tratamentos" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "sobre", label: "A clínica" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

export const TRUST = [
  { label: `Desde ${SITE.since}`, detail: "atendendo em Santana" },
  { label: "Avaliação gratuita", detail: "consultoria estética sem custo" },
  { label: "Zona Norte", detail: "fácil acesso em Santana" },
  { label: "WhatsApp", detail: SITE.phoneDisplay },
];

export const FEATURED = [
  {
    title: "Drenagem linfática",
    desc: "Redução de inchaço, recuperação e bem-estar com técnica profissional. Ideal no pós-operatório e no dia a dia.",
    image: img("/wp-content/uploads/2016/04/DRENAGEM-LINFATICA.jpg"),
  },
  {
    title: "Radiofrequência e flacidez",
    desc: "Protocolos para firmar a pele e tratar flacidez com tecnologia e acompanhamento sessão a sessão.",
    image: img("/wp-content/uploads/2016/04/RADIOFREQU%C3%8ANCIA.jpg"),
  },
  {
    title: "Manchas e uniformização",
    desc: "Cuidado facial e corporal para clarear manchas e deixar a pele mais uniforme, com orientação clara do protocolo.",
    image: img("/wp-content/uploads/2016/04/MANCHAS.jpg"),
  },
];

export const TREATMENTS = [
  {
    group: "Corporais",
    items: [
      "Depilação a laser e luz pulsada",
      "Gordura localizada",
      "Celulite",
      "Flacidez",
      "Estrias",
      "Manchas",
      "Pós-operatório estético",
    ],
  },
  {
    group: "Faciais",
    items: [
      "Rejuvenescimento",
      "Acne",
      "Olheiras",
      "Limpeza de pele",
      "Peeling",
    ],
  },
  {
    group: "Massagem",
    items: [
      "Drenagem linfática",
      "Massagem modeladora",
      "Massagem terapêutica",
      "Massagem relaxante",
    ],
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Avaliação gratuita",
    desc: "Você conta o objetivo. A equipe indica o que faz sentido, sem empurrar pacote.",
  },
  {
    step: "02",
    title: "Protocolo personalizado",
    desc: "Plano com a tecnologia e a frequência certas para o seu caso.",
  },
  {
    step: "03",
    title: "Acompanhamento",
    desc: "Sessões com acompanhamento do resultado e ajustes quando precisar.",
  },
];

export const AREAS = [
  "Santana",
  "Tucuruvi",
  "Casa Verde",
  "Mandaqui",
  "Tremembé",
  "Imirim",
  "Parada Inglesa",
  "Lauzane Paulista",
];

export const REVIEWS = [
  {
    name: "Camila R.",
    text: "Ambiente limpo e atendimento objetivo. Fiz a avaliação, entenderam o que eu queria e montaram um protocolo sem pressão.",
  },
  {
    name: "Fernanda M.",
    text: "Drenagem e depilação no mesmo lugar. Explicaram cada passo e o resultado veio com constância nas sessões.",
  },
  {
    name: "Juliana S.",
    text: "Localização boa em Santana e horário fácil de combinar pelo WhatsApp. Voltei para continuar o tratamento facial.",
  },
];

export const FAQ = [
  {
    q: "A avaliação é realmente gratuita?",
    a: "Sim. A consultoria estética inicial é gratuita para entender seu objetivo e indicar o protocolo adequado.",
  },
  {
    q: "Vocês atendem só mulheres?",
    a: "Não. Há protocolos de depilação e tratamentos para mulheres e homens.",
  },
  {
    q: "Onde fica a clínica?",
    a: "Rua Vicente Soares, 331, Santana, São Paulo (CEP 02403-070). Atendemos pacientes da Zona Norte e região.",
  },
  {
    q: "Como agendar?",
    a: "Pelo WhatsApp da clínica. Em poucos minutos você agenda a avaliação ou tira dúvidas sobre o tratamento.",
  },
];
