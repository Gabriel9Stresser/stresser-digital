import { FAQ, PRODUCTS, SITE } from "./data";

export const PREVIEW_URL = "https://www.stresserdigital.com.br/doceria-rebeka";

export const SEO = {
  title: "Doceria da Rebeka | Pudim e Brigadeirão no Atacado em São José dos Campos",
  description:
    "Fábrica de pudim e brigadeirão no atacado em São José dos Campos. +11 mil pontos de venda no Brasil. Atendimento B2B para mercados e distribuidores. WhatsApp (12) 98128-5713.",
  keywords: [
    "pudim atacado",
    "brigadeirão atacado",
    "Doceria da Rebeka",
    "fábrica de pudim São José dos Campos",
    "pudim para mercado",
    "doce atacado SP",
    "distribuidor pudim SJC",
    "pudim 120g atacado",
    "brigadeirão 80g",
    "atacado confeitaria B2B",
    "maior fábrica de pudim",
  ],
};

const address = {
  "@type": "PostalAddress" as const,
  streetAddress: `${SITE.address}, ${SITE.addressDetail}`,
  addressLocality: "São José dos Campos",
  addressRegion: "SP",
  postalCode: SITE.cep,
  addressCountry: "BR",
};

const geo = {
  "@type": "GeoCoordinates" as const,
  latitude: -23.2237,
  longitude: -45.9009,
};

export function buildJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${PREVIEW_URL}#organization`,
    name: SITE.name,
    legalName: SITE.name,
    url: PREVIEW_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 447,
      height: 447,
    },
    image: SITE.heroPhoto,
    email: SITE.email,
    telephone: `+${SITE.phone}`,
    sameAs: [SITE.siteOriginal, SITE.instagram, SITE.facebook],
    address,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "LocalBusiness"],
    "@id": `${PREVIEW_URL}#localbusiness`,
    name: SITE.name,
    description: SEO.description,
    url: PREVIEW_URL,
    telephone: `+${SITE.phone}`,
    email: SITE.email,
    image: [SITE.heroPhoto, SITE.pudimPhoto, SITE.brigadeiroPhoto],
    logo: SITE.logo,
    priceRange: "$$",
    servesCuisine: "Confeitaria",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address,
    geo,
    hasMap: SITE.mapsUrl,
    areaServed: [
      { "@type": "Country", name: "Brasil" },
      { "@type": "AdministrativeArea", name: "São Paulo" },
      { "@type": "City", name: "São José dos Campos" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${SITE.phone}`,
      email: SITE.email,
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
    parentOrganization: { "@id": `${PREVIEW_URL}#organization` },
    sameAs: [SITE.siteOriginal, SITE.instagram, SITE.facebook],
    slogan: SITE.tagline,
  };

  const products = PRODUCTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${PREVIEW_URL}#product-${p.id}`,
    name: p.name,
    description: p.desc,
    image: p.image,
    brand: { "@type": "Brand", name: SITE.name },
    category: "Confeitaria / Atacado",
    manufacturer: { "@id": `${PREVIEW_URL}#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${PREVIEW_URL}#produtos`,
      seller: { "@id": `${PREVIEW_URL}#localbusiness` },
      areaServed: "BR",
      businessFunction: "https://schema.org/Sell",
    },
  }));

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PREVIEW_URL}#website`,
    name: SITE.name,
    url: PREVIEW_URL,
    inLanguage: "pt-BR",
    publisher: { "@id": `${PREVIEW_URL}#organization` },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PREVIEW_URL}#webpage`,
    url: PREVIEW_URL,
    name: SEO.title,
    description: SEO.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${PREVIEW_URL}#website` },
    about: { "@id": `${PREVIEW_URL}#localbusiness` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SITE.heroPhoto,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${PREVIEW_URL}#inicio` },
      { "@type": "ListItem", position: 2, name: "Produtos", item: `${PREVIEW_URL}#produtos` },
      { "@type": "ListItem", position: 3, name: "Atacado", item: `${PREVIEW_URL}#atacado` },
      { "@type": "ListItem", position: 4, name: "Contato", item: `${PREVIEW_URL}#contato` },
      { "@type": "ListItem", position: 5, name: "Dúvidas", item: `${PREVIEW_URL}#duvidas` },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PREVIEW_URL}#faq`,
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return [organization, localBusiness, website, webPage, breadcrumb, faqPage, ...products];
}
