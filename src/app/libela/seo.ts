import { FAQ, SITE } from "./data";

/** URL pública futura. Em local: http://localhost:3000/libela */
export const PREVIEW_URL = "https://stresserdigital.com.br/libela";

export const SEO = {
  title: "Libela Estética | Clínica de Estética em Santana, São Paulo",
  description:
    "Clínica de estética em Santana (Zona Norte). Depilação, drenagem linfática, tratamentos faciais e corporais. Avaliação gratuita. Agende pelo WhatsApp.",
  keywords: [
    "clínica estética Santana",
    "estética Zona Norte SP",
    "depilação luz pulsada Santana",
    "drenagem linfática Santana",
    "limpeza de pele Santana",
    "Libela Estética",
    "estética Rua Vicente Soares",
    "massagem modeladora Santana",
    "rejuvenescimento facial São Paulo",
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

  const business = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${PREVIEW_URL}#business`,
    name: SITE.name,
    description: SEO.description,
    url: PREVIEW_URL,
    image: SITE.heroPhoto,
    telephone: `+${SITE.phone}`,
    email: SITE.email,
    priceRange: "$$",
    foundingDate: SITE.since,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: SITE.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5015,
      longitude: -46.6245,
    },
    areaServed: ["Santana", "Zona Norte", "São Paulo"],
    sameAs: [SITE.siteOriginal],
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

  return [business, webPage, faqPage];
}
