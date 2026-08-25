import { Fraunces, Manrope } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { LibelaStructuredData } from "./StructuredData";
import { PREVIEW_URL, SEO } from "./seo";
import { SITE } from "./data";
import "./libela.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libela-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libela-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PREVIEW_URL),
  /** absolute: evita o template do root (`· Stresser Digital`) vazar na prévia. */
  title: { absolute: SEO.title },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: "Stresser Digital",
  alternates: {
    canonical: PREVIEW_URL,
    languages: { "pt-BR": PREVIEW_URL },
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: PREVIEW_URL,
    siteName: SITE.name,
    title: SEO.title,
    description: SEO.description,
    images: [{ url: SITE.heroPhoto, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SITE.heroPhoto],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Santana, São Paulo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a8f8c",
};

export default function LibelaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <LibelaStructuredData />
      {children}
    </div>
  );
}
