export const projects = [
  {
    slug: "cripto-hack",
    title: "Cripto Hack",
    tagline: "Plataforma de trading automatizado com Ethereum",
    description:
      "SaaS completo de trading algorítmico com ledger financeiro próprio, paper trading, sniper de oportunidades, liquidação e conciliação. Monorepo com API NestJS, worker BullMQ, dois frontends Next.js (usuário e admin), PostgreSQL, Redis e integração Ethereum.",
    tags: ["NestJS", "Next.js", "BullMQ", "Redis", "PostgreSQL", "Ethereum", "Prisma", "Turborepo"],
    category: "SaaS / Fintech",
    highlight: true,
    color: "#6c63ff",
  },
  {
    slug: "relateai",
    title: "RelateAI",
    tagline: "Plataforma SaaS de relacionamentos com IA",
    description:
      "Monorepo full-stack com app web em Next.js, API em NestJS, app mobile em Expo, banco PostgreSQL, uploads em S3/MinIO e inteligência artificial via OpenAI. Arquitetura escalável pensada para crescimento.",
    tags: ["Next.js", "NestJS", "Expo", "PostgreSQL", "OpenAI", "S3", "MinIO", "pnpm"],
    category: "SaaS / IA",
    highlight: true,
    color: "#fa6d9e",
  },
  {
    slug: "marketflow",
    title: "MarketFlow",
    tagline: "Automação de afiliados via WhatsApp e Telegram",
    description:
      "SaaS de automação de marketing para grupos de WhatsApp e Telegram. Backend Node.js com Prisma e Baileys para integração real com WhatsApp, dashboard do cliente em React.",
    tags: ["Node.js", "Baileys", "WhatsApp API", "Prisma", "React", "Telegram"],
    category: "Automação / SaaS",
    highlight: true,
    color: "#43e97b",
  },
  {
    slug: "myguard",
    title: "MyGuard",
    tagline: "Sistema de gestão de segurança patrimonial",
    description:
      "Plataforma multi-tenant com API, app mobile, painel administrativo e painel para empresas. Arquitetura pensada para escalar operações de segurança com controle em tempo real.",
    tags: ["Node.js", "React Native", "React", "PostgreSQL", "Docker"],
    category: "Enterprise / SaaS",
    highlight: false,
    color: "#f7971e",
  },
  {
    slug: "digital-wallet",
    title: "Digital Wallet",
    tagline: "App de carteira digital em React Native",
    description:
      "Aplicativo mobile de carteira digital com navegação por tabs, fluxo de transações e design focado em UX financeira. Desenvolvido com React Navigation e arquitetura escalável.",
    tags: ["React Native", "Expo", "React Navigation", "TypeScript"],
    category: "Mobile",
    highlight: false,
    color: "#4facfe",
  },
  {
    slug: "hermes-chat",
    title: "Hermes Chat",
    tagline: "Motor de automação para WhatsApp Business",
    description:
      "Engine de automação de mensagens WhatsApp com injeção de scripts, gestão de sessões e arquitetura orientada a eventos. Ideal para atendimento automatizado em escala.",
    tags: ["Node.js", "WhatsApp", "Automação", "JavaScript"],
    category: "Automação",
    highlight: false,
    color: "#7c6dfa",
  },
];

export const services = [
  {
    icon: "📱",
    title: "Apps Mobile",
    description: "React Native e Expo: iOS e Android com uma base de código, performance nativa.",
  },
  {
    icon: "⚙️",
    title: "Automações & Bots",
    description: "WhatsApp, Telegram, n8n, scraping, robôs de trading. Processo sem toque humano.",
  },
  {
    icon: "🌐",
    title: "Sites & Landing Pages",
    description: "Next.js, WordPress e Elementor: rápido, responsivo e otimizado para conversão.",
  },
  {
    icon: "🔗",
    title: "Integrações de API",
    description: "Mercado Pago, Strava, Meta, Stripe, Supabase, Firebase. Conectamos tudo.",
  },
  {
    icon: "🤖",
    title: "IA & LLMs",
    description: "Agentes com Claude/OpenAI, chatbots inteligentes e pipelines de dados com IA.",
  },
  {
    icon: "🏗️",
    title: "SaaS do zero",
    description: "Arquitetura escalável, monorepo, auth, billing e deploy. Produto completo.",
  },
];

export const stack = [
  "React Native", "Next.js", "Node.js", "TypeScript", "NestJS",
  "PostgreSQL", "Prisma", "Redis", "Docker", "AWS S3",
  "Supabase", "Firebase", "WhatsApp API", "Meta API", "n8n",
  "Framer Motion", "Tailwind", "BullMQ", "Turborepo", "Vercel",
];
