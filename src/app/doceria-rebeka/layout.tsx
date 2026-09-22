import { Fraunces, Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { PREVIEW_URL, SEO } from "./seo";
import { SITE } from "./data";
import "./rebeka.css";

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
  metadataBase: new URL(PREVIEW_URL),
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
    images: [{ url: SITE.heroPhoto, width: 667, height: 1000, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SITE.heroPhoto],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1e2b5e",
};

export default function RebekaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      {/* CSS original do site, estático (evita PostCSS no build) */}
      <link rel="stylesheet" href="/doceria-rebeka/styles.css" />
      {children}
    </div>
  );
}
