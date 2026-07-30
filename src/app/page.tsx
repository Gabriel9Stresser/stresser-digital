"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    name: "DS.Marketing & DS.art",
    cat: "Marketing Digital / SaaS",
    emoji: "📊",
    result: "Plataforma de criação e automação para milhares de clientes",
    desc: "Na Datasales, fui responsável por dois aplicativos React Native (CLI e Expo) e pela plataforma web DS.Marketing e DS.art — ferramentas de criação e automação de conteúdo de marketing. Desenvolvi bots de atendimento com IA, CRUDs com Node.js e integrações serverless na AWS.",
    outcomes: ["2 apps React Native (iOS & Android)","Bots de atendimento com IA","Integrações AWS Serverless"],
    color: "#2563eb",
    company: "Datasales · 3 anos e meio",
  },
  {
    name: "Zelo Saúde — Fiocruz",
    cat: "Saúde",
    emoji: "🏥",
    result: "5 aplicações entregues em um único projeto",
    desc: "Projeto para a Fiotec/Fiocruz: desenvolvimento da plataforma Zelo Saúde com 5 aplicações integradas — 2 apps React Native, 2 frontends React e 1 API Node.js. Fui responsável pelo planejamento técnico e execução completa do ecossistema.",
    outcomes: ["2 apps mobile (React Native)","2 painéis web (React)","API Node.js + PostgreSQL"],
    color: "#10b981",
    company: "Fiotec / Fiocruz",
  },
  {
    name: "PHAST — Fisioterapia Digital",
    cat: "Saúde / Mobile",
    emoji: "💪",
    result: "App de fisioterapia e monitoramento de pacientes",
    desc: "App web e mobile para fisioterapia e monitoramento de pacientes — plataforma completa com agendamentos, evolução clínica, comunicação profissional/paciente e gestão de sessões. Stack full-stack: React Native, React e Node.js com MongoDB.",
    outcomes: ["App iOS & Android (React Native)","Painel web para profissionais","Monitoramento e evolução clínica"],
    color: "#f59e0b",
    company: "Freelance · 8 meses",
  },
  {
    name: "MyGuard — Segurança Patrimonial",
    cat: "Segurança Patrimonial",
    emoji: "🔒",
    result: "Plataforma multi-tenant para operações de segurança",
    desc: "Plataforma completa para o GroupMyGuard: app mobile para equipes de campo, painel administrativo e painel B2B para empresas clientes. Controle de rondas, ocorrências e relatórios em tempo real. Arquitetura multi-tenant escalável com Node.js, React Native e React.",
    outcomes: ["App para equipes de campo (React Native)","Painel B2B para empresas clientes","Relatórios automáticos de rondas"],
    color: "#f97316",
    company: "GroupMyGuard",
  },
  {
    name: "ZapFlow — Automação de Marketing",
    cat: "Startup / SaaS",
    emoji: "⚡",
    result: "SaaS próprio de automação via WhatsApp e canais digitais",
    desc: "Fundei e construí o ZapFlow do zero como Founder & CTO — plataforma SaaS de automação de marketing para grupos de WhatsApp e Telegram. Backend Node.js com Prisma, integração real com WhatsApp via Baileys e dashboard do cliente em React.",
    outcomes: ["WhatsApp & Telegram integrados","Dashboard self-service","Cobrança recorrente"],
    color: "#8b5cf6",
    company: "ZapFlow · Founder & CTO",
  },
  {
    name: "IanApp — Gestão de Estoque",
    cat: "Varejo / Mobile",
    emoji: "📦",
    result: "App de inventário para cliente internacional",
    desc: "Aplicativo mobile de gestão de estoque e inventário desenvolvido para cliente internacional. Fluxo completo de entrada e saída, leitura de código de barras, relatórios e sincronização em tempo real. Entrega em 4 meses com comunicação em inglês.",
    outcomes: ["App de inventário (React Native)","Leitura de código de barras","Relatórios e sincronização"],
    color: "#06b6d4",
    company: "Freelance · cliente internacional",
  },
];

const SERVICES = [
  { icon: "📱", title: "App Mobile", sub: "iOS & Android", desc: "Seu app nas mãos dos clientes em semanas. Mais engajamento, mais retenção e um canal de vendas direto no celular de cada cliente." },
  { icon: "🤖", title: "Automação & Atendimento", sub: "WhatsApp · 24h · Sem custo adicional", desc: "Atenda, qualifique e converta clientes automaticamente — sem contratar mais. Processos repetitivos eliminados, custo operacional reduzido." },
  { icon: "🌐", title: "Site & Landing Page", sub: "Que gera leads e vende", desc: "Site profissional que aparece no Google, carrega rápido e converte visitas em clientes. Métricas reais, não só \"páginas bonitas\"." },
  { icon: "🔗", title: "Integração de Sistemas", sub: "Elimine retrabalho manual", desc: "Seus sistemas conversando entre si automaticamente. Sem planilha manual, sem dado duplicado, sem erro humano no meio do processo." },
  { icon: "🧠", title: "Inteligência Artificial", sub: "Atendimento e decisão em tempo real", desc: "Atendimento ao cliente 24h, relatórios gerados automaticamente e análise de dados que ajudam você a tomar decisões mais rápidas e precisas." },
  { icon: "🚀", title: "Produto Digital do Zero", sub: "SaaS · Plataforma · MVP", desc: "Da ideia ao lançamento com cronograma claro, sem surpresas. Seu produto digital pronto para crescer e escalar desde o primeiro cliente." },
];

const PROCESS = [
  { n: "01", title: "Briefing & Estratégia", desc: "Entendemos seu negócio, mapeamos objetivos e definimos a melhor solução técnica antes de escrever uma linha de código." },
  { n: "02", title: "Design & Protótipo", desc: "Criamos o layout e fluxos para aprovação. Nada de surpresas: você vê exatamente o que será entregue." },
  { n: "03", title: "Desenvolvimento", desc: "Stack moderna, código limpo, testes e boas práticas. Atualizações semanais de progresso." },
  { n: "04", title: "Entrega & Suporte", desc: "Deploy completo com CI/CD, treinamento da sua equipe e suporte pós-entrega incluído." },
];

const FAQS = [
  { q: "Qual o prazo médio de entrega?", a: "Depende da complexidade. Landing pages em 5-7 dias. Apps e SaaS entre 4-12 semanas. Sempre definimos o prazo em contrato antes de começar." },
  { q: "Trabalham com clientes fora do Brasil?", a: "Sim, atendemos clientes no Brasil, Portugal, EUA e Europa. Comunicação em português e inglês." },
  { q: "Consigo acompanhar o desenvolvimento?", a: "Sempre. Usamos ferramentas de gestão transparente e você tem acesso em tempo real ao progresso do projeto." },
  { q: "Vocês assumem projetos que outra empresa começou?", a: "Sim. Fazemos revisão técnica do código existente e assumimos a continuidade com responsabilidade." },
  { q: "Como funciona o suporte após a entrega?", a: "30 dias de suporte incluso. Planos de manutenção mensal disponíveis para quem precisa de suporte contínuo." },
];

/* ─── COMPONENTS ──────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", background: scrolled ? "rgba(255,255,255,0.96)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none", transition: "all 0.3s" }}>
      <a href="#" aria-label="Stresser Digital — início" style={{ textDecoration: "none" }}>
        <Logo size={36} tone={scrolled ? "dark" : "light"} />
      </a>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Serviços","Projetos","Processo","FAQ"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ textDecoration: "none", fontSize: 15, fontWeight: 500, color: scrolled ? "#334155" : "rgba(255,255,255,0.85)", transition: "color 0.2s" }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = scrolled ? "#0B1F3A" : "#fff"}
            onMouseLeave={e => (e.target as HTMLElement).style.color = scrolled ? "#334155" : "rgba(255,255,255,0.85)"}>{l}</a>
        ))}
        <a href="#contato" style={{ background: "#f97316", color: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 14px rgba(249,115,22,0.4)" }}>
          Fale conosco
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const words = ["apps sob medida.", "automações inteligentes.", "SaaS escalável.", "bots que vendem.", "integrações robustas."];
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx(i => (i+1)%words.length), 2400); return () => clearInterval(t); }, []);

  return (
    <section style={{ minHeight: "100vh", background: "linear-gradient(145deg, #071525 0%, #0B1F3A 38%, #163A5F 72%, #1E4D73 100%)", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "100px 40px 60px", gap: 60, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 18% 78%, rgba(249,115,22,0.18) 0%, transparent 42%), radial-gradient(circle at 82% 18%, rgba(56,189,248,0.16) 0%, transparent 46%)", pointerEvents: "none" }} />

      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
          <span style={{ color: "rgba(255,255,255,0.92)", fontSize: 13, fontWeight: 600 }}>Agência digital para todo tipo de negócio</span>
        </div>

        <h1 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 20 }}>
          Entregamos{" "}
          <span style={{ display: "block" }}>
            <AnimatePresence mode="wait">
              <motion.span key={idx} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }} style={{ background: "linear-gradient(90deg,#fdba74,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
          Transformamos ideias em produtos digitais claros e úteis — para quem está começando e para quem já precisa escalar com segurança.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
          <a href="#contato" style={{ background: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,115,22,0.5)" }}>
            Solicitar orçamento →
          </a>
          <a href="#projetos" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
            Ver projetos
          </a>
        </div>

        {/* Social proof */}
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[{n:"50+",l:"Projetos entregues"},{n:"8 anos",l:"No mercado"},{n:"20+",l:"Tecnologias"},{n:"100%",l:"Entregues no prazo"}].map(s => (
            <div key={s.l}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#fff" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — visual mockup */}
      <motion.div initial={{ opacity: 0, x: 40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16,1,0.3,1] }} style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
        {/* Browser mockup */}
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 40px 80px rgba(0,0,0,0.4)", overflow: "hidden", width: "100%", maxWidth: 520 }}>
          {/* Browser bar */}
          <div style={{ background: "#f3f4f6", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
            <div style={{ flex: 1, background: "#e5e7eb", borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "#9ca3af", marginLeft: 8 }}>stresserdigital.com</div>
          </div>
          {/* Content preview */}
          <div style={{ padding: 28, background: "linear-gradient(135deg,#071525,#0B1F3A,#163A5F)", minHeight: 340 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {PROJECTS.slice(0,4).map(p => (
                <div key={p.name} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: 16, border: `1px solid ${p.color}33` }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, marginBottom: 8 }} />
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{p.cat}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, height: 6, background: "linear-gradient(90deg,#0B1F3A,#163A5F,#F97316)", borderRadius: 3 }} />
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              {["React Native","Node.js","NestJS","Next.js"].map(t => (
                <span key={t} style={{ background: "rgba(99,102,241,0.25)", color: "#a5b4fc", fontSize: 10, padding: "3px 8px", borderRadius: 100 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: -20, right: -20, background: "#fff", borderRadius: 14, padding: "10px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <div><div style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>Performance A+</div><div style={{ fontSize: 10, color: "#888" }}>GTmetrix · Core Web Vitals</div></div>
        </motion.div>
        <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} style={{ position: "absolute", bottom: 20, left: -30, background: "#fff", borderRadius: 14, padding: "10px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>🤖</span>
          <div><div style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>IA integrada</div><div style={{ fontSize: 10, color: "#888" }}>Claude · OpenAI · n8n</div></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function NichesBand() {
  const niches = [
    { icon: "🏦", label: "Mercado Financeiro" },
    { icon: "🏥", label: "Saúde & Clínicas" },
    { icon: "🔒", label: "Segurança Patrimonial" },
    { icon: "🛒", label: "Varejo & E-commerce" },
    { icon: "🏢", label: "Empresas B2B" },
    { icon: "📲", label: "Startups & SaaS" },
    { icon: "⚖️", label: "Jurídico & Compliance" },
    { icon: "🏨", label: "Hospitalidade & Turismo" },
    { icon: "🎓", label: "Educação & EdTech" },
    { icon: "🚚", label: "Logística & Operações" },
  ];
  return (
    <div style={{ background: "#fff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "0" }}>
      <div style={{ padding: "12px 40px 0", textAlign: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#9ca3af", textTransform: "uppercase" }}>Segmentos que já atendemos</span>
      </div>
      <div style={{ overflow: "hidden", padding: "14px 0" }}>
        <div style={{ display: "flex", gap: 0, animation: "scroll 35s linear infinite", width: "max-content" }}>
          {[...niches,...niches].map((n,i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 28px", whiteSpace: "nowrap", borderRight: "1px solid #f3f4f6" }}>
              <span style={{ fontSize: 16 }}>{n.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Services() {
  return (
    <section id="serviços" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>NOSSOS SERVIÇOS</span>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12, lineHeight: 1.15 }}>Soluções que fazem seu<br/><span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>negócio crescer de verdade.</span></h2>
        <p style={{ color: "#6b7280", fontSize: 17, marginTop: 16, maxWidth: 560, margin: "16px auto 0" }}>Não vendemos tecnologia. Vendemos resultado — mais clientes, menos custo, mais escala.</p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
        {SERVICES.map((s,i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1, duration: 0.6 }}
            style={{ background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #e5e7eb", cursor: "default", transition: "all 0.3s", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#0B1F3A"; el.style.boxShadow = "0 8px 30px rgba(11,31,58,0.10)"; el.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#e5e7eb"; el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)"; el.style.transform = "translateY(0)"; }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#E8EEF5,#D7E3F0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>{s.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#0B1F3A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{s.sub}</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.5px" }}>{s.title}</h3>
            <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: 15 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];
  return (
    <section id="projetos" style={{ background: "#f9fafb", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 56 }}>
          <span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>PORTFÓLIO</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12, lineHeight: 1.15 }}>Projetos que<br/><span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>entregam resultado.</span></h2>
          <p style={{ color: "#6b7280", fontSize: 16, marginTop: 16 }}>Clientes de diferentes setores. Resultados reais, entrega dentro do prazo.</p>
        </motion.div>

        {/* Tab nav */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {PROJECTS.map((proj, i) => (
            <button key={proj.name} onClick={() => setActive(i)} style={{ padding: "8px 18px", borderRadius: 100, border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer", background: active===i ? "#0B1F3A" : "#fff", color: active===i ? "#fff" : "#6b7280", boxShadow: active===i ? "0 4px 12px rgba(11,31,58,0.28)" : "0 1px 3px rgba(0,0,0,0.08)", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}>
              <span>{proj.emoji}</span>{proj.cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, background: "#fff", borderRadius: 24, padding: 48, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}>
            {/* Left — story */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: 36 }}>{p.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: p.color, background: p.color+"18", padding: "5px 14px", borderRadius: 100 }}>{p.cat}</span>
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 6, lineHeight: 1.1 }}>{p.name}</h3>
              {"company" in p && <div style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 10, letterSpacing: "0.04em" }}>{(p as typeof p & {company:string}).company}</div>}
              <div style={{ fontSize: 15, fontWeight: 700, color: p.color, marginBottom: 20 }}>✓ {p.result}</div>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, marginBottom: 0 }}>{p.desc}</p>
            </div>
            {/* Right — outcomes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>O que entregamos</div>
              {p.outcomes.map((o, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 14, fontWeight: 900 }}>✓</span>
                  </div>
                  <span style={{ fontWeight: 700, color: "#111", fontSize: 15 }}>{o}</span>
                </div>
              ))}
              <a href="#contato" style={{ marginTop: 8, background: p.color, color: "#fff", padding: "14px 24px", borderRadius: 10, fontWeight: 800, fontSize: 15, textDecoration: "none", textAlign: "center", boxShadow: `0 4px 14px ${p.color}44` }}>
                Quero algo parecido →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>COMO TRABALHAMOS</span>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12 }}>Processo transparente,<br/><span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>entrega garantida.</span></h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 2 }}>
        {PROCESS.map((p,i) => (
          <motion.div key={p.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.12, duration: 0.6 }}
            style={{ padding: 32, background: i%2===0 ? "#fff" : "#f9fafb", border: "1px solid #e5e7eb", borderRadius: i===0?"20px 0 0 20px":i===3?"0 20px 20px 0":"0", position: "relative" }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: "#e5e7eb", lineHeight: 1, marginBottom: 20 }}>{p.n}</div>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.5px" }}>{p.title}</h3>
            <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: 14 }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ maxWidth: 900, margin: "0 auto", background: "linear-gradient(135deg,#071525,#0B1F3A,#163A5F)", borderRadius: 28, padding: "72px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%,rgba(168,85,247,0.4) 0%,transparent 50%)", pointerEvents: "none" }} />
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", marginBottom: 20, position: "relative" }}>
          Pronto para transformar<br/>sua ideia em produto?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, marginBottom: 36, position: "relative" }}>
          Fale com nossa equipe e receba uma proposta em até 24 horas.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
          <a href="#contato" style={{ background: "#f97316", color: "#fff", padding: "16px 36px", borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,115,22,0.5)" }}>
            Solicitar proposta →
          </a>
          <a href="https://wa.me/5511975558289" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "16px 36px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
            💬 WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" style={{ padding: "100px 40px", maxWidth: 800, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>DÚVIDAS FREQUENTES</span>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12 }}>Perguntas<br/><span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>frequentes.</span></h2>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FAQS.map((f,i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}
            style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", cursor: "pointer" }} onClick={() => setOpen(open===i?null:i)}>
            <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>{f.q}</span>
              <span style={{ fontSize: 20, color: "#0B1F3A", fontWeight: 300, transform: open===i?"rotate(45deg)":"rotate(0)", transition: "transform 0.2s" }}>+</span>
            </div>
            <AnimatePresence>
              {open===i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                  style={{ overflow: "hidden" }}>
                  <div style={{ padding: "0 24px 20px", color: "#6b7280", lineHeight: 1.7, fontSize: 15 }}>{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"", service:"" });
  const inp: React.CSSProperties = { width:"100%", background:"#f9fafb", border:"1px solid #e5e7eb", borderRadius:10, padding:"13px 16px", fontSize:15, color:"#111", outline:"none", fontFamily:"inherit", transition:"border-color 0.2s" };
  return (
    <section id="contato" style={{ background: "#f9fafb", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>CONTATO</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12, marginBottom: 20 }}>Vamos construir<br/><span style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>algo incrível?</span></h2>
          <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>Conte sobre seu projeto. Nossa equipe analisa e retorna com uma proposta em até 24 horas.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[{icon:"📧",label:"E-mail",val:"gabriel.augusto99@hotmail.com"},{icon:"💬",label:"WhatsApp",val:"+55 (11) 97555-8289"},{icon:"📍",label:"Localização",val:"São Paulo, SP — Brasil"}].map(c=>(
              <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#E8EEF5,#D7E3F0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{c.icon}</div>
                <div><div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 600 }}>{c.label}</div><div style={{ fontWeight: 700, color: "#111" }}>{c.val}</div></div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "60px 32px", background: "#fff", borderRadius: 20, border: "1px solid #d1fae5" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Recebemos sua mensagem!</h3>
              <p style={{ color: "#6b7280" }}>Nossa equipe retorna em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{ background: "#fff", borderRadius: 20, padding: 40, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input required placeholder="Seu nome" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="#0B1F3A")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
                <input required type="email" placeholder="Seu e-mail" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="#0B1F3A")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
              </div>
              <input placeholder="WhatsApp" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="#0B1F3A")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
              <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={{...inp, color: form.service?"#111":"#9ca3af"}}>
                <option value="">Tipo de projeto</option>
                <option>App Mobile</option>
                <option>Site / Landing Page</option>
                <option>Automação / Bot</option>
                <option>SaaS / Plataforma</option>
                <option>Integração de API</option>
                <option>Outro</option>
              </select>
              <textarea required rows={4} placeholder="Descreva seu projeto..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{...inp,resize:"vertical"}} onFocus={e=>(e.target.style.borderColor="#0B1F3A")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
              <button type="submit" style={{ background: "linear-gradient(135deg,#0B1F3A,#163A5F)", color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 14px rgba(11,31,58,0.35)" }}>
                Solicitar proposta gratuita →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#071525", color: "#fff", padding: "60px 40px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ marginBottom: 16 }}>
              <Logo size={36} tone="light" />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: 14, maxWidth: 320 }}>Agência digital especializada em apps, sites, automações, SaaS e integrações. Atendemos negócios de todos os portes — São Paulo, Brasil.</p>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>SERVIÇOS</div>
            {["Apps Mobile","Sites & LP","Automações","SaaS","Integrações API","IA & Bots"].map(s=>(
              <div key={s} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10, cursor: "pointer" }}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>CONTATO</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10 }}>gabriel.augusto99@hotmail.com</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10 }}>+55 (11) 97555-8289</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>São Paulo, SP</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>© {new Date().getFullYear()} Stresser Digital. Todos os direitos reservados.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["GitHub","LinkedIn","Instagram","WhatsApp"].map(s=>(
              <a key={s} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={e=>((e.target as HTMLElement).style.color="#F97316")}
                onMouseLeave={e=>((e.target as HTMLElement).style.color="rgba(255,255,255,0.4)")}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <NichesBand/>
        <Services/>
        <Projects/>
        <Process/>
        <CTA/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
