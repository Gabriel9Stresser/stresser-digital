/** Doceria da Rebeka · prévia Stresser. Fontes: site oficial, Instagram, Maps. */

const asset = (path: string) => `https://doceriadarebeka.com.br/${path}`;

export const BASE = "/doceria-rebeka";

export const SITE = {
  name: "Doceria da Rebeka",
  tagline: "A maior fábrica de pudim do mundo é joseense",
  phone: "5512981285713",
  phoneDisplay: "(12) 98128-5713",
  email: "contato@doceriadarebeka.com.br",
  address: "Rodovia Geraldo Scavone, 2730",
  addressDetail: "Rua 03, Nº 353, Jardim Califórnia",
  city: "São José dos Campos, SP",
  cityShort: "São José dos Campos",
  cep: "12305-490",
  hours: "Segunda a sexta, 8h às 18h",
  serviceArea: "Atendimento nacional no atacado, com base em São José dos Campos/SP",
  siteOriginal: "https://doceriadarebeka.com.br",
  instagram: "https://www.instagram.com/doceria.darebeka/",
  instagramHandle: "@doceria.darebeka",
  facebook: "https://www.facebook.com/doceriadaRebeka/?locale=pt_BR",
  catalogPath: `${BASE}/catalogo`,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rodovia+Geraldo+Scavone+2730+S%C3%A3o+Jos%C3%A9+dos+Campos",
  mapsEmbed:
    "https://www.google.com/maps?q=Rodovia+Geraldo+Scavone,+2730,+S%C3%A3o+Jos%C3%A9+dos+Campos&output=embed",
  logo: asset("logo.png"),
  heroPhoto: asset("pudim-hero.jpg"),
  aboutPhoto: asset("historia.jpg"),
  pudimPhoto: asset("pudim-produto.jpg"),
  brigadeiroPhoto: asset("brigadeirao-produto.png"),
  qualityPhoto: asset("gal2.jpg"),
  gallery: [
    { src: asset("gal2.jpg"), alt: "Pudim com calda dourada" },
    { src: asset("gal1.jpg"), alt: "Detalhe cremoso do pudim" },
    { src: asset("gal5.png"), alt: "Embalagem Doceria da Rebeka" },
    { src: asset("gal4.png"), alt: "Composição de doces" },
    { src: asset("gal3.jpg"), alt: "Close do pudim" },
    { src: asset("compos.png"), alt: "Linha de produtos" },
  ],
};

export function waLink(text: string) {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

export const WA = waLink(
  "Olá, gostaria de falar com o comercial da Doceria da Rebeka sobre produtos para atacado."
);

export const WA_CATALOG = waLink(
  "Olá! Quero receber o catálogo de produtos da Doceria da Rebeka para atacado."
);

/** Navegação principal (rotas reais). */
export const NAV = [
  { href: BASE, label: "Início" },
  { href: `${BASE}/quem-somos`, label: "Quem somos" },
  { href: `${BASE}/produtos`, label: "Produtos" },
  { href: `${BASE}/atacado`, label: "Atacado" },
  { href: `${BASE}/galeria`, label: "Galeria" },
  { href: `${BASE}/mundo-rebeka`, label: "Mundo Rebeka" },
  { href: `${BASE}/contato`, label: "Contato" },
];

export const FOOTER_INSTITUCIONAL = [
  { href: `${BASE}/quem-somos`, label: "Nossa história" },
  { href: `${BASE}/produtos`, label: "Produtos" },
  { href: `${BASE}/atacado`, label: "Atacado" },
  { href: `${BASE}/mundo-rebeka`, label: "Mundo Rebeka" },
];

export const FOOTER_SUPORTE = [
  { href: `${BASE}/contato`, label: "Fale conosco" },
  { href: `${BASE}/duvidas`, label: "Dúvidas frequentes" },
  { href: SITE.catalogPath, label: "Catálogo (imprimir)" },
  { href: `${BASE}/galeria`, label: "Galeria e vídeos" },
];

export const BUSINESS_TYPES = [
  { value: "", label: "Selecione o tipo de negócio" },
  { value: "mercado", label: "Mercado / supermercado" },
  { value: "distribuidor", label: "Distribuidor" },
  { value: "rede", label: "Rede varejista" },
  { value: "outro", label: "Outro" },
];

export const TRUST = [
  { label: "+11 mil", detail: "pontos de venda no Brasil" },
  { label: "SJC / SP", detail: "produção em escala" },
  { label: "Atacado", detail: "mercados e distribuidores" },
  { label: "WhatsApp", detail: SITE.phoneDisplay },
];

export const PROOF = [
  {
    title: "+11.000 PDVs",
    desc: "Presença nacional em gôndolas e vitrines de todo o Brasil.",
  },
  {
    title: "Foco 100% atacado",
    desc: "Atendimento pensado para mercados, redes e distribuidores.",
  },
  {
    title: "Dois campeões de giro",
    desc: "Pudim 120g e Brigadeirão 80g com alto apelo visual e sabor.",
  },
  {
    title: "Comercial próximo",
    desc: `Resposta rápida no WhatsApp ${SITE.phoneDisplay}.`,
  },
];

export const PRODUCTS = [
  {
    id: "pudim",
    slug: "pudim",
    badge: "Campeão de vendas",
    name: "Pudim de 120g",
    shortName: "Pudim",
    desc: "Textura cremosa, calda no ponto e sabor caseiro que vende sozinho na gôndola. Porção individual, ideal para grandes mercados.",
    longDesc:
      "O pudim de 120g é o queridinho da gôndola. Textura cremosa, calda no ponto e sabor que lembra receita de casa, em porção individual pronta para o consumidor. Pensado para mercados e redes que precisam de giro constante e apresentação que chama atenção na vitrine.",
    image: SITE.pudimPhoto,
    points: ["Textura cremosa", "Calda no ponto", "Embalagem prática", "Alta aceitação"],
    specs: [
      { label: "Peso", value: "120g" },
      { label: "Formato", value: "Porção individual" },
      { label: "Uso", value: "Gôndola e refrigerado" },
      { label: "Perfil", value: "Alto giro / aceitação" },
    ],
    waText: "Olá! Quero pedir informações de atacado do Pudim de 120g da Doceria da Rebeka.",
  },
  {
    id: "brigadeirao",
    slug: "brigadeirao",
    badge: "Clássico de vitrine",
    name: "Brigadeirão de 80g",
    shortName: "Brigadeirão",
    desc: "Chocolate intenso em porção individual. Apelo visual forte para vitrines e gôndolas que precisam girar produto todo dia.",
    longDesc:
      "O brigadeirão de 80g une chocolate intenso e cremosidade em porção individual. Alto apelo visual para vitrines e gôndolas: o consumidor vê, deseja e leva. Ideal para complementar o mix do pudim e ampliar ticket médio no ponto de venda.",
    image: SITE.brigadeiroPhoto,
    points: ["Chocolate intenso", "Porção individual", "Alto apelo visual", "Pronto para venda"],
    specs: [
      { label: "Peso", value: "80g" },
      { label: "Formato", value: "Porção individual" },
      { label: "Uso", value: "Vitrine e gôndola" },
      { label: "Perfil", value: "Alto apelo visual" },
    ],
    waText: "Olá! Quero pedir informações de atacado do Brigadeirão de 80g da Doceria da Rebeka.",
  },
] as const;

export type Product = (typeof PRODUCTS)[number];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const BUY_STEPS = [
  {
    step: "01",
    title: "Fale com o comercial",
    desc: "Chame no WhatsApp ou envie o formulário com o tipo do seu negócio.",
  },
  {
    step: "02",
    title: "Alinhe pedido e condições",
    desc: "Combinamos mix, volumes e a melhor forma de abastecer o seu ponto.",
  },
  {
    step: "03",
    title: "Receba e venda",
    desc: "Produto pronto para gôndola, com padrão de sabor e apresentação.",
  },
];

export const WHOLESALE = [
  {
    step: "01",
    title: "Produto pronto para venda",
    desc: "Sai da fábrica pronto para a gôndola, com padrão visual e de sabor.",
  },
  {
    step: "02",
    title: "Boa aceitação pelo consumidor",
    desc: "Receitas que o consumidor já conhece e volta a comprar.",
  },
  {
    step: "03",
    title: "Embalagens práticas",
    desc: "Porções individuais pensadas para vitrine, gôndola e consumo rápido.",
  },
  {
    step: "04",
    title: "Produção em escala",
    desc: "Produção pensada para redes, mercados e distribuidores.",
  },
  {
    step: "05",
    title: "Atendimento comercial próximo",
    desc: "Time comercial no WhatsApp para tirar pedido e tirar dúvida.",
  },
  {
    step: "06",
    title: "Marca com presença nacional",
    desc: "Mais de 11 mil pontos de venda pelo Brasil.",
  },
];

export const FAQ = [
  {
    q: "A Doceria da Rebeka vende no varejo ou só no atacado?",
    a: "Atendimento exclusivo para mercados, redes varejistas e distribuidores. O foco é atacado B2B em todo o Brasil.",
  },
  {
    q: "Quais produtos estão disponíveis no atacado?",
    a: "Pudim de 120g (campeão de vendas) e Brigadeirão de 80g, ambos em porção individual, prontos para gôndola e vitrine.",
  },
  {
    q: "Onde fica a fábrica de pudim da Doceria da Rebeka?",
    a: "Rodovia Geraldo Scavone, 2730, Rua 03 Nº 353, Jardim Califórnia, São José dos Campos/SP, CEP 12305-490.",
  },
  {
    q: "Como falar com o comercial para pedir atacado?",
    a: `WhatsApp ${SITE.phoneDisplay} ou e-mail ${SITE.email}. O time responde rápido sobre pedido, condições e logística.`,
  },
  {
    q: "Vocês atendem distribuidores fora de São José dos Campos?",
    a: "Sim. A marca está em mais de 11 mil pontos de venda pelo Brasil e atende mercados e distribuidores em escala nacional.",
  },
  {
    q: "O pudim e o brigadeirão são porções individuais?",
    a: "Sim. O pudim tem 120g e o brigadeirão 80g, com embalagem prática para consumo individual e alto giro no ponto de venda.",
  },
];

export const VIDEOS = [
  {
    id: "bastidores",
    title: "Bastidores da fábrica joseense",
    desc: "Como nasce o pudim que chega em milhares de gôndolas pelo Brasil.",
    thumb: SITE.aboutPhoto,
    status: "coming" as const,
    ctaLabel: "Ver no Instagram",
    ctaHref: SITE.instagram,
  },
  {
    id: "gondola",
    title: "Pudim na gôndola",
    desc: "Apresentação e apelo visual pensados para o ponto de venda.",
    thumb: SITE.pudimPhoto,
    status: "coming" as const,
    ctaLabel: "Ver no Instagram",
    ctaHref: SITE.instagram,
  },
  {
    id: "brigadeirao",
    title: "Brigadeirão na vitrine",
    desc: "Chocolate intenso que chama atenção e gira produto.",
    thumb: SITE.brigadeiroPhoto,
    status: "coming" as const,
    ctaLabel: "Ver no Instagram",
    ctaHref: SITE.instagram,
  },
];

export const ARTICLES = [
  {
    slug: "pudim-individual-na-gondola",
    title: "Como o pudim individual gira na gôndola",
    excerpt:
      "Porção pronta, visual irresistível e sabor que o consumidor já conhece. Entenda por que o pudim de 120g performa no varejo.",
    cover: SITE.pudimPhoto,
    date: "2026-03-10",
    dateLabel: "10 de março de 2026",
    category: "Ponto de venda",
    body: [
      "No atacado de doces, giro é o que importa. O pudim individual de 120g foi pensado para isso: o consumidor vê na gôndola, reconhece o sabor caseiro e leva sem precisar dividir ou preparar em casa.",
      "A embalagem prática e a calda no ponto ajudam na decisão de compra. Para mercados e redes, isso significa menos ruptura de expectativa e mais recompra.",
      "Na Doceria da Rebeka, produzimos em escala em São José dos Campos com padrão de textura e apresentação. O resultado chega pronto para a gôndola refrigerada, com a mesma consistência em cada lote.",
      "Se você abastece mercados ou distribui para varejo, o pudim individual é o ponto de partida do mix. Depois, o brigadeirão complementa a vitrine com apelo de chocolate.",
    ],
  },
  {
    slug: "brigadeirao-vende-pelo-olhar",
    title: "Por que o brigadeirão vende pelo olhar",
    excerpt:
      "Chocolate intenso e porção individual: o clássico que chama atenção na vitrine antes mesmo da primeira colherada.",
    cover: SITE.brigadeiroPhoto,
    date: "2026-03-04",
    dateLabel: "4 de março de 2026",
    category: "Mix de produtos",
    body: [
      "Na vitrine, o olhar decide. O brigadeirão de 80g tem apelo visual forte: chocolate cremoso, porção individual e formato que convida o consumidor a experimentar.",
      "Para o varejista, isso significa produto que se destaca sozinho. Não depende de promoção agressiva para chamar atenção. Depende de estar bem posicionado e com estoque constante.",
      "Combinado com o pudim, o brigadeirão amplia o mix sem complicar a operação. Dois SKUs claros, ambos prontos para venda, ambos com perfil de alto giro.",
      "Nosso time comercial ajuda a montar o pedido certo para o seu perfil de loja. Fale pelo WhatsApp e alinhe volumes e frequência de abastecimento.",
    ],
  },
  {
    slug: "bastidores-fabrica-joseense",
    title: "Bastidores da fábrica joseense",
    excerpt:
      "De São José dos Campos para mais de 11 mil pontos de venda. Como a Doceria da Rebeka une sabor de casa e escala profissional.",
    cover: SITE.aboutPhoto,
    date: "2026-02-20",
    dateLabel: "20 de fevereiro de 2026",
    category: "Institucional",
    body: [
      "A maior fábrica de pudim do mundo, no carinho joseense, fica na Rodovia Geraldo Scavone. Dali saem os pudins e brigadeirões que chegam a milhares de mercados pelo Brasil.",
      "O desafio do atacado é manter sabor caseiro com padrão industrial. Textura, calda, conservação e apresentação precisam ser iguais em cada unidade. É isso que o varejo exige e o consumidor sente na colherada.",
      "Atendemos só B2B: mercados, redes e distribuidores. Sem varejo direto. O foco é parceria comercial, pedido alinhado e produto pronto para performar no ponto de venda.",
      "Quer conhecer a operação de perto ou começar a comprar? Chame o comercial no WhatsApp. Estamos de segunda a sexta, das 8h às 18h.",
    ],
  },
  {
    slug: "atacado-sem-complicacao",
    title: "Atacado sem complicação: do WhatsApp à gôndola",
    excerpt:
      "Três passos para levar a Doceria da Rebeka ao seu mercado. Contato, alinhamento e abastecimento.",
    cover: SITE.gallery[5].src,
    date: "2026-02-12",
    dateLabel: "12 de fevereiro de 2026",
    category: "Como comprar",
    body: [
      "Comprar no atacado não precisa ser burocrático. Na Doceria da Rebeka o caminho é direto: você fala com o comercial, alinha mix e volume, e recebe produto pronto para a gôndola.",
      "O primeiro passo é o WhatsApp ou o formulário do site. Conte o tipo do negócio (mercado, rede ou distribuidor) e o interesse em pudim, brigadeirão ou os dois.",
      "No segundo passo, alinhamos condições e frequência. Produção em escala em SJC permite atender pedidos nacionais com padrão de qualidade.",
      "No terceiro, você recebe e vende. Embalagens individuais, sabor reconhecível e apresentação que ajuda o giro. Simples assim.",
    ],
  },
] as const;

export type Article = (typeof ARTICLES)[number];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Normaliza telefone BR para validação (aceita com/sem 55, com máscara). */
export function normalizePhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("55") && digits.length >= 12) return digits;
  if (digits.length === 10 || digits.length === 11) return `55${digits}`;
  return digits;
}

export function isValidBrPhone(raw: string) {
  const d = normalizePhone(raw);
  return /^55\d{10,11}$/.test(d);
}
