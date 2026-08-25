import { Newsreader, Source_Sans_3 } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { AlemStructuredData } from "./StructuredData";
import { PREVIEW_URL, SEO } from "./seo";
import { SITE } from "./data";
import "./alem.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alem-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alem-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PREVIEW_URL),
  title: { absolute: SEO.title },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SITE.lawyer }],
  creator: SITE.lawyer,
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
    "geo.placename": "Vila Romana, São Paulo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#12263f",
};

export default function AlemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <AlemStructuredData />
      {children}
    </div>
  );
}
