type LogoProps = {
  size?: number;
  showWordmark?: boolean;
  /** dark = fundo claro; light = fundo escuro (hero/footer) */
  tone?: "light" | "dark";
  wordmarkClassName?: string;
};

/** Marca Stresser Digital — S geométrico + ponto de energia (coral). */
export function LogoMark({ size = 36 }: { size?: number }) {
  const uid = `sd-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1F3A" />
          <stop offset="1" stopColor="#163A5F" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${uid}-bg)`} />
      <path
        d="M42.5 20.5C42.5 16.2 37.8 13.5 32 13.5C24.2 13.5 19.5 18.2 19.5 23.2C19.5 30.2 26.2 31.8 33.2 34C40.2 36.2 44.5 38.8 44.5 44.5C44.5 50.5 39 54.5 32 54.5C24.8 54.5 19.5 50.6 19.5 45.5"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="44.5" cy="18.5" r="4" fill="#F97316" />
    </svg>
  );
}

export function Logo({
  size = 36,
  showWordmark = true,
  tone = "dark",
  wordmarkClassName,
}: LogoProps) {
  const primary = tone === "light" ? "#FFFFFF" : "#0B1F3A";
  const secondary = tone === "light" ? "rgba(255,255,255,0.78)" : "#64748B";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: Math.max(8, Math.round(size * 0.28)),
        textDecoration: "none",
        lineHeight: 1,
      }}
    >
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className={wordmarkClassName}
          style={{
            fontWeight: 800,
            fontSize: Math.round(size * 0.5),
            letterSpacing: "-0.03em",
            display: "inline-flex",
            alignItems: "baseline",
            gap: "0.28em",
          }}
        >
          <span style={{ color: primary }}>Stresser</span>
          <span style={{ color: secondary, fontWeight: 600 }}>Digital</span>
        </span>
      )}
    </span>
  );
}
