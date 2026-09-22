import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { PREVIEW_URL, SEO } from "../seo";
import { SITE } from "../data";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rbk-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rbk-sans",
  display: "swap",
});

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
  return <div className={`${display.variable} ${sans.variable}`}>{children}</div>;
}
