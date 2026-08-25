import { FAQ, SITE } from "./data";

export const PREVIEW_URL = "https://stresserdigital.com.br/alem-santinho";

export const SEO = {
  title: "Alem Santinho Advocacia | Advogado em Vila Romana, São Paulo",
  description:
    "Pedro Alem Santinho, OAB/SP 456.185. Advocacia em direito trabalhista, previdenciário e público em Vila Romana. Nota 5,0 no Google. Fale no WhatsApp.",
  keywords: [
    "advogado Vila Romana",
    "advogado trabalhista São Paulo",
    "advogado previdenciário SP",
    "direito público advogado",
    "Pedro Alem Santinho",
    "Alem Santinho Advocacia",
    "OAB 456185",
    "advogado Cerro Corá",
    "advogado Moema Vila Romana",
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

  const person = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${PREVIEW_URL}#lawyer`,
    name: SITE.lawyer,
    jobTitle: "Advogado",
    description: SEO.description,
    url: PREVIEW_URL,
    telephone: `+${SITE.phone}`,
    image: SITE.heroPhoto,
    hasCredential: SITE.oab,
    knowsAbout: [
      "Direito trabalhista",
      "Direito previdenciário",
      "Direito administrativo",
      "Direito público",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: SITE.cep,
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: SITE.googleReviews,
      bestRating: "5",
    },
    sameAs: [SITE.siteOriginal, "https://pedroalemsantinho.jusbrasil.com.br/"],
  };

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${PREVIEW_URL}#office`,
    name: SITE.name,
    description: SEO.description,
    url: PREVIEW_URL,
    telephone: `+${SITE.phone}`,
    image: SITE.heroPhoto,
    address: person.address,
    priceRange: "$$",
    employee: { "@id": `${PREVIEW_URL}#lawyer` },
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

  return [person, legalService, webPage, faqPage];
}
