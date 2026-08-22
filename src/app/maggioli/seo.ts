import { FAQ, SITE } from "./data";

export const PREVIEW_URL = "https://stresserdigital.com.br/maggioli";

export const SEO = {
  title: "Igor Maggioli | Psicólogo Clínico em Perdizes | Terapia Online e Presencial",
  description:
    "Psicólogo clínico em Perdizes, São Paulo. Psicoterapia online e presencial para adultos. Pós-graduado em Saúde Mental. CRP 06/177930. Agende por WhatsApp.",
  keywords: [
    "psicólogo Perdizes",
    "psicólogo São Paulo",
    "psicoterapia online",
    "psicoterapia presencial",
    "psicólogo clínico adultos",
    "terapia ansiedade",
    "terapia depressão",
    "Igor Maggioli psicólogo",
    "psicólogo Av Antártica",
    "CRP 06/177930",
    "saúde mental São Paulo",
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

  const professional = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PREVIEW_URL}#professional`,
    name: SITE.name,
    jobTitle: SITE.title,
    description: SEO.description,
    image: SITE.heroPhoto,
    url: PREVIEW_URL,
    telephone: `+${SITE.phone}`,
    hasCredential: SITE.crp,
    knowsAbout: [
      "Psicoterapia",
      "Saúde mental",
      "Depressão",
      "Ansiedade",
      "Bipolaridade",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5325,
      longitude: -46.6789,
    },
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    sameAs: [SITE.siteOriginal],
    identifier: SITE.crp,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${PREVIEW_URL}#business`,
    name: `${SITE.name}, ${SITE.title}`,
    description: SEO.description,
    url: PREVIEW_URL,
    image: SITE.heroPhoto,
    telephone: `+${SITE.phone}`,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "05003-000",
      addressCountry: "BR",
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": PREVIEW_URL,
    url: PREVIEW_URL,
    name: SEO.title,
    description: SEO.description,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: PREVIEW_URL,
    },
    about: { "@id": `${PREVIEW_URL}#professional` },
    primaryImageOfPage: { "@type": "ImageObject", url: SITE.heroPhoto },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: PREVIEW_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Psicoterapia Perdizes",
        item: `${PREVIEW_URL}#servicos`,
      },
    ],
  };

  return [professional, localBusiness, webPage, faqPage, breadcrumb];
}
