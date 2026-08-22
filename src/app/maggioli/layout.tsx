import { Oswald, Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { MaggioliStructuredData } from "./StructuredData";
import { PREVIEW_URL, SEO } from "./seo";
import { SITE } from "./data";
import "./maggioli.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PREVIEW_URL),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: "Stresser Digital",
  category: "health",
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
    siteName: `${SITE.name} · ${SITE.title}`,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SITE.heroPhoto,
        width: 1200,
        height: 630,
        alt: `${SITE.name}, psicólogo clínico em Perdizes, terapia online e presencial`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SITE.heroPhoto],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": "-23.5325;-46.6789",
    ICBM: "-23.5325, -46.6789",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#037f8c",
};

export default function MaggioliLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.variable} ${montserrat.variable}`}>
      <MaggioliStructuredData />
      {children}
    </div>
  );
}
