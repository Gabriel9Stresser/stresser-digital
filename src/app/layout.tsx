import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://stresserdigital.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stresser Digital — Agência digital de apps, sites e automações",
    template: "%s · Stresser Digital",
  },
  description:
    "Agência digital em São Paulo: apps mobile, sites, automações, SaaS e integrações para negócios de todos os portes — do varejo à saúde, de startups a empresas consolidadas.",
  applicationName: "Stresser Digital",
  authors: [{ name: "Stresser Digital" }],
  creator: "Stresser Digital",
  publisher: "Stresser Digital",
  keywords: [
    "agência digital",
    "desenvolvimento de apps",
    "React Native",
    "automação WhatsApp",
    "SaaS",
    "landing page",
    "integração de sistemas",
    "São Paulo",
  ],
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Stresser Digital — Agência digital",
    description:
      "Apps, sites e automações que fazem o negócio crescer. Atendemos varejo, saúde, startups e empresas B2B.",
    url: siteUrl,
    siteName: "Stresser Digital",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stresser Digital — Agência digital",
    description: "Apps, sites e automações para negócios de todos os portes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1F3A" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1F3A" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
