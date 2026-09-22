import { FAQ, SITE } from "./data";

export const PREVIEW_URL = "https://stresserdigital.com.br/doceria-rebeka";

export const SEO = {
  title: "Doceria da Rebeka | Pudins e Brigadeirões no Atacado · SJC",
  description:
    "Pudim e brigadeirão no atacado para mercados e distribuidores. Fábrica em São José dos Campos, +11 mil pontos de venda. Fale com o comercial no WhatsApp.",
  keywords: [
    "pudim atacado",
    "brigadeirão atacado",
    "Doceria da Rebeka",
    "fábrica de pudim São José dos Campos",
    "doce atacado SP",
    "pudim para mercado",
    "distribuidor pudim",
  ],
};

export function buildJsonLd() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${PREVIEW_URL}#org`,
    name: SITE.name,
    description: SEO.description,
    url: PREVIEW_URL,
    telephone: `+${SITE.phone}`,
    email: SITE.email,
    image: SITE.heroPhoto,
    logo: SITE.logo,
    servesCuisine: "Confeitaria",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address}, ${SITE.addressDetail}`,
      addressLocality: "São José dos Campos",
      addressRegion: "SP",
      postalCode: SITE.cep,
      addressCountry: "BR",
    },
    sameAs: [SITE.siteOriginal, SITE.instagram, SITE.facebook],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": PREVIEW_URL,
    url: PREVIEW_URL,
    name: SEO.title,
    description: SEO.description,
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: PREVIEW_URL },
  };

  return [org, webPage, faqPage];
}
