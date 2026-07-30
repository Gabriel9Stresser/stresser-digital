import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stresser Digital — Desenvolvimento sob medida",
  description:
    "Agência de tecnologia especializada em apps, automações, bots, SaaS e integração de APIs. Entregamos soluções digitais completas para negócios que querem crescer.",
  openGraph: {
    title: "Stresser Digital",
    description: "Apps, automações, bots e SaaS — entregamos tudo.",
    url: "https://stresserdigital.com",
    siteName: "Stresser Digital",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
