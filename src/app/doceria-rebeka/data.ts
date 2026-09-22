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
  cep: "12305-490",
  siteOriginal: "https://doceriadarebeka.com.br",
  instagram: "https://www.instagram.com/doceria.darebeka/",
  instagramHandle: "@doceria.darebeka",
  facebook: "https://www.facebook.com/doceriadarebeka",
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

export const WA = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero saber sobre o atacado da Doceria da Rebeka."
)}`;

export const NAV = [
  { id: "historia", label: "História" },
  { id: "produtos", label: "Produtos" },
  { id: "atacado", label: "Atacado" },
  { id: "galeria", label: "Galeria" },
  { id: "contato", label: "Contato" },
];

export const TRUST = [
  { label: "+11 mil", detail: "pontos de venda no Brasil" },
  { label: "SJC / SP", detail: "produção em escala" },
  { label: "Atacado", detail: "mercados e distribuidores" },
  { label: "WhatsApp", detail: SITE.phoneDisplay },
];

export const PRODUCTS = [
  {
    id: "pudim",
    badge: "Campeão de vendas",
    name: "Pudim de 120g",
    desc: "Textura cremosa, calda no ponto e sabor caseiro que vende sozinho na gôndola. Porção individual, ideal para grandes mercados.",
    image: SITE.pudimPhoto,
    points: ["Textura cremosa", "Calda no ponto", "Embalagem prática", "Alta aceitação"],
  },
  {
    id: "brigadeirao",
    badge: "Clássico de vitrine",
    name: "Brigadeirão de 80g",
    desc: "Chocolate intenso em porção individual. Apelo visual forte para vitrines e gôndolas que precisam girar produto todo dia.",
    image: SITE.brigadeiroPhoto,
    points: ["Chocolate intenso", "Porção individual", "Alto apelo visual", "Pronto para venda"],
  },
];

export const WHOLESALE = [
  {
    step: "01",
    title: "Produto pronto",
    desc: "Sai da fábrica pronto para a gôndola, com padrão visual e de sabor.",
  },
  {
    step: "02",
    title: "Aceitação alta",
    desc: "Receitas que o consumidor já conhece e volta a comprar.",
  },
  {
    step: "03",
    title: "Escala de verdade",
    desc: "Produção pensada para redes, mercados e distribuidores.",
  },
  {
    step: "04",
    title: "Comercial próximo",
    desc: "Time comercial no WhatsApp para tirar pedido e tirar dúvida.",
  },
];

export const FAQ = [
  {
    q: "Vocês vendem no varejo ou só no atacado?",
    a: "Atendimento exclusivo para mercados, redes varejistas e distribuidores. O foco é atacado B2B.",
  },
  {
    q: "Quais produtos estão disponíveis?",
    a: "Pudim de 120g (campeão de vendas) e Brigadeirão de 80g, ambos em porção individual.",
  },
  {
    q: "Onde fica a fábrica?",
    a: "Rodovia Geraldo Scavone, 2730, Rua 03 Nº 353, Jardim Califórnia, São José dos Campos/SP, CEP 12305-490.",
  },
  {
    q: "Como falar com o comercial?",
    a: `WhatsApp ${SITE.phoneDisplay} ou e-mail ${SITE.email}. Resposta rápida para pedido e condições.`,
  },
];
