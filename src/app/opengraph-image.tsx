import { ImageResponse } from "next/og";

export const alt = "Stresser Digital — Agência digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0B1F3A 0%, #163A5F 55%, #1E4D73 100%)",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#0B1F3A",
              border: "2px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>
              Stresser Digital
            </div>
            <div style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
              Agência digital · São Paulo
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15, letterSpacing: -1.5 }}>
            Apps, sites e automações que fazem o negócio crescer.
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.72)", lineHeight: 1.4 }}>
            Do varejo à saúde, de startups a empresas consolidadas — tecnologia sob medida para o seu público.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#F97316",
            }}
          />
          <div style={{ fontSize: 22, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
            stresserdigital.com.br
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
