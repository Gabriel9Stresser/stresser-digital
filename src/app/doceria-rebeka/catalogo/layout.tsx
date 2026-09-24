import type { Metadata } from "next";
import { PREVIEW_URL, SEO } from "../seo";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: { absolute: `Catálogo atacado | ${SITE.name}` },
  description: `Catálogo de pudim e brigadeirão no atacado da ${SITE.name}. Imprima ou peça pelo WhatsApp.`,
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW_URL}/catalogo` },
  openGraph: {
    title: `Catálogo atacado | ${SITE.name}`,
    description: SEO.description,
    url: `${PREVIEW_URL}/catalogo`,
    images: [{ url: SITE.pudimPhoto }],
  },
};

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
