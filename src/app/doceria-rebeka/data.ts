/** Doceria da Rebeka · prévia Stresser. Fontes: site oficial, Instagram, Maps. */

const asset = (path: string) => `https://doceriadarebeka.com.br/${path}`;

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
  catalogPath: "/doceria-rebeka/catalogo",
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

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-comprar", label: "Como comprar" },
  { href: "#atacado", label: "Atacado" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
  { href: "#duvidas", label: "Dúvidas" },
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
    badge: "Campeão de vendas",
    name: "Pudim de 120g",
    desc: "Textura cremosa, calda no ponto e sabor caseiro que vende sozinho na gôndola. Porção individual, ideal para grandes mercados.",
    image: SITE.pudimPhoto,
    points: ["Textura cremosa", "Calda no ponto", "Embalagem prática", "Alta aceitação"],
    specs: [
      { label: "Peso", value: "120g" },
      { label: "Formato", value: "Porção individual" },
      { label: "Uso", value: "Gôndola e refrigerado" },
      { label: "Perfil", value: "Alto giro / aceitação" },
    ],
    waText:
      "Olá! Quero pedir informações de atacado do Pudim de 120g da Doceria da Rebeka.",
  },
  {
    id: "brigadeirao",
    badge: "Clássico de vitrine",
    name: "Brigadeirão de 80g",
    desc: "Chocolate intenso em porção individual. Apelo visual forte para vitrines e gôndolas que precisam girar produto todo dia.",
    image: SITE.brigadeiroPhoto,
    points: ["Chocolate intenso", "Porção individual", "Alto apelo visual", "Pronto para venda"],
    specs: [
      { label: "Peso", value: "80g" },
      { label: "Formato", value: "Porção individual" },
      { label: "Uso", value: "Vitrine e gôndola" },
      { label: "Perfil", value: "Alto apelo visual" },
    ],
    waText:
      "Olá! Quero pedir informações de atacado do Brigadeirão de 80g da Doceria da Rebeka.",
  },
];

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
