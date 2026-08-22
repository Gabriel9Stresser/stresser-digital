import { Oswald, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./maggioli.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Igor Maggioli | Psicólogo Clínico",
  description:
    "Psicoterapia online e presencial em Perdizes, São Paulo. Atendimento para adultos. CRP 06/177930.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function MaggioliLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
}
