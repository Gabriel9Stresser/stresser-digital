import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/maggioli",
        "/maggioli/",
        "/libela",
        "/libela/",
        "/alem-santinho",
        "/alem-santinho/",
        "/doceria-rebeka",
        "/doceria-rebeka/",
        "/doceria-rebeka/catalogo",
        "/doceria-rebeka/catalogo/",
      ],
    },
    sitemap: "https://stresserdigital.com.br/sitemap.xml",
  };
}
