import { Fraunces, Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { RebekaStructuredData } from "./StructuredData";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { WhatsAppFab } from "./components/WhatsAppFab";
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
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.siteOriginal }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "food",
  classification: "Business",
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
    images: [
      {
        url: SITE.heroPhoto,
        width: 1200,
        height: 1800,
        alt: "Pudim cremoso da Doceria da Rebeka com calda dourada",
      },
      {
        url: SITE.pudimPhoto,
        width: 1200,
        height: 800,
        alt: "Pudim de 120g Doceria da Rebeka",
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
    "geo.placename": "São José dos Campos",
    "geo.position": "-23.2237;-45.9009",
    ICBM: "-23.2237, -45.9009",
    "business:contact_data:street_address": `${SITE.address}, ${SITE.addressDetail}`,
    "business:contact_data:locality": "São José dos Campos",
    "business:contact_data:region": "SP",
    "business:contact_data:postal_code": SITE.cep,
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:email": SITE.email,
    "business:contact_data:phone_number": `+${SITE.phone}`,
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
    <div className={`${display.variable} ${sans.variable} rbk-clone min-h-screen bg-background`}>
      <RebekaStructuredData />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
