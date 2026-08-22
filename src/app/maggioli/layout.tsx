import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igor Maggioli | Psicólogo Clínico",
  description:
    "Psicoterapia online e presencial em Perdizes, São Paulo. Atendimento para adultos. CRP 06/177930.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function MaggioliLayout({ children }: { children: React.ReactNode }) {
  return children;
}
