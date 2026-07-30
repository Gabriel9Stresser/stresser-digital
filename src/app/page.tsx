"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const PROJECTS = [
  { name: "Cripto Hack", cat: "Fintech / SaaS", desc: "Plataforma de trading algorítmico com ledger financeiro, BullMQ, NestJS, dois frontends Next.js e integração Ethereum.", tech: ["NestJS","Next.js","Redis","PostgreSQL","Ethereum"], color: "#6366f1" },
  { name: "RelateAI", cat: "IA / SaaS", desc: "Monorepo full-stack: Next.js + NestJS + Expo + PostgreSQL + S3 + OpenAI. Arquitetura escalável do zero ao produto.", tech: ["Next.js","NestJS","Expo","OpenAI","S3"], color: "#a855f7" },
  { name: "MarketFlow", cat: "Automação / SaaS", desc: "SaaS de automação de afiliados para grupos WhatsApp e Telegram com Node.js, Prisma e Baileys.", tech: ["Node.js","WhatsApp API","Telegram","Prisma"], color: "#06b6d4" },
  { name: "MyGuard", cat: "Enterprise", desc: "Plataforma multi-tenant de segurança patrimonial: API, app mobile, painel admin e painel empresas.", tech: ["Node.js","React Native","React","Docker"], color: "#f59e0b" },
  { name: "Digital Wallet", cat: "Mobile", desc: "App de carteira digital em React Native com fluxo completo de transações e UX financeira.", tech: ["React Native","Expo","TypeScript"], color: "#10b981" },
  { name: "Hermes Chat", cat: "Automação", desc: "Engine de automação WhatsApp Business com injeção de scripts e arquitetura orientada a eventos.", tech: ["Node.js","WhatsApp","Automação"], color: "#ef4444" },
];

const SERVICES = [
  { icon: "📱", title: "Apps Mobile", desc: "iOS e Android com React Native e Expo. Uma base de código, performance nativa e entrega rápida." },
  { icon: "🤖", title: "Automações & Bots", desc: "WhatsApp, Telegram, n8n, robôs de trading, scraping — processos sem toque humano 24/7." },
  { icon: "🌐", title: "Sites & Landing Pages", desc: "Next.js, WordPress e Elementor — rápido, responsivo e pensado para converter visitas em clientes." },
  { icon: "🔗", title: "Integrações de API", desc: "Mercado Pago, Meta, Stripe, Supabase, Firebase, Evolution API — conectamos qualquer sistema." },
  { icon: "✨", title: "IA & Agentes Inteligentes", desc: "Chatbots com Claude/OpenAI, pipelines de dados com IA e agentes autônomos para seu negócio." },
  { icon: "🏗️", title: "SaaS do zero", desc: "Da arquitetura ao deploy: auth, billing, monorepo, CI/CD e escalabilidade desde o primeiro dia." },
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
      <a href="#" style={{ textDecoration: "none", fontWeight: 800, fontSize: 20, letterSpacing: "-0.5px" }}>
        <span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Stresser</span>
        <span style={{ color: scrolled ? "#111" : "#fff" }}> Digital</span>
      </a>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Serviços","Projetos","Processo","FAQ"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ textDecoration: "none", fontSize: 15, fontWeight: 500, color: scrolled ? "#444" : "rgba(255,255,255,0.85)", transition: "color 0.2s" }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = scrolled ? "#6366f1" : "#fff"}
            onMouseLeave={e => (e.target as HTMLElement).style.color = scrolled ? "#444" : "rgba(255,255,255,0.85)"}>{l}</a>
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
    <section style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #6366f1 65%, #a855f7 100%)", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "100px 40px 60px", gap: 60, position: "relative", overflow: "hidden" }}>
      {/* BG noise */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(168,85,247,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.4) 0%, transparent 50%)", pointerEvents: "none" }} />

      {/* LEFT */}
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }} style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 600 }}>Agência de tecnologia · São Paulo, BR</span>
        </div>

        <h1 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 20 }}>
          Entregamos{" "}
          <span style={{ display: "block" }}>
            <AnimatePresence mode="wait">
              <motion.span key={idx} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }} style={{ background: "linear-gradient(90deg,#fde68a,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
          Somos uma agência de desenvolvimento especializada em transformar ideias em produtos digitais que funcionam — e que crescem junto com o seu negócio.
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
          <div style={{ padding: 28, background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)", minHeight: 340 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {PROJECTS.slice(0,4).map(p => (
                <div key={p.name} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: 16, border: `1px solid ${p.color}33` }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, marginBottom: 8 }} />
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{p.cat}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, height: 6, background: "linear-gradient(90deg,#6366f1,#a855f7,#ec4899)", borderRadius: 3 }} />
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

function TechBand() {
  const techs = ["React Native","Next.js","Node.js","TypeScript","NestJS","PostgreSQL","Docker","AWS","Supabase","Firebase","WhatsApp API","Meta API","n8n","Redis","Prisma","OpenAI","Expo","Tailwind"];
  return (
    <div style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "20px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 32, animation: "scroll 30s linear infinite", width: "max-content" }}>
        {[...techs,...techs].map((t,i) => (
          <span key={i} style={{ fontSize: 14, fontWeight: 600, color: "#6b7280", whiteSpace: "nowrap", padding: "0 8px" }}>
            <span style={{ color: "#6366f1", marginRight: 6 }}>▸</span>{t}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Services() {
  return (
    <section id="serviços" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>NOSSOS SERVIÇOS</span>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12, lineHeight: 1.15 }}>Tudo que o seu negócio<br/><span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>digital precisa.</span></h2>
        <p style={{ color: "#6b7280", fontSize: 17, marginTop: 16, maxWidth: 560, margin: "16px auto 0" }}>De apps mobile a plataformas SaaS complexas. Escolha a solução certa para o seu estágio.</p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
        {SERVICES.map((s,i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1, duration: 0.6 }}
            style={{ background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #e5e7eb", cursor: "default", transition: "all 0.3s", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#6366f1"; el.style.boxShadow = "0 8px 30px rgba(99,102,241,0.12)"; el.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#e5e7eb"; el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)"; el.style.transform = "translateY(0)"; }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#ede9fe,#e0e7ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>{s.icon}</div>
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
  return (
    <section id="projetos" style={{ background: "#f9fafb", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 56 }}>
          <span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>PORTFÓLIO</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12, lineHeight: 1.15 }}>Projetos que<br/><span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>entregam resultado.</span></h2>
        </motion.div>

        {/* Tab nav */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {PROJECTS.map((p,i) => (
            <button key={p.name} onClick={() => setActive(i)} style={{ padding: "8px 20px", borderRadius: 100, border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer", background: active===i ? "#6366f1" : "#fff", color: active===i ? "#fff" : "#6b7280", boxShadow: active===i ? "0 4px 12px rgba(99,102,241,0.3)" : "0 1px 3px rgba(0,0,0,0.08)", transition: "all 0.2s" }}>{p.name}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, background: "#fff", borderRadius: 24, padding: 48, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}>
            {/* Left */}
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: PROJECTS[active].color, background: PROJECTS[active].color+"18", padding: "4px 12px", borderRadius: 100 }}>{PROJECTS[active].cat}</span>
              <h3 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1.5px", marginTop: 20, marginBottom: 16, lineHeight: 1.1 }}>{PROJECTS[active].name}</h3>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, marginBottom: 28 }}>{PROJECTS[active].desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PROJECTS[active].tech.map(t => (
                  <span key={t} style={{ fontSize: 13, padding: "6px 14px", borderRadius: 100, background: "#f3f4f6", color: "#374151", fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
            {/* Right — visual */}
            <div style={{ background: "linear-gradient(135deg,#0f0c29,#302b63)", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {PROJECTS[active].tech.map((t,i) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: `${60+i*8}%`, height: 8, borderRadius: 4, background: `linear-gradient(90deg,${PROJECTS[active].color},${PROJECTS[active].color}88)`, maxWidth: "90%" }} />
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "auto", padding: 16, background: "rgba(255,255,255,0.05)", borderRadius: 12, border: `1px solid ${PROJECTS[active].color}33` }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>RESULTADO</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>✅ Entregue em produção</div>
              </div>
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
        <span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>COMO TRABALHAMOS</span>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12 }}>Processo transparente,<br/><span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>entrega garantida.</span></h2>
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
        style={{ maxWidth: 900, margin: "0 auto", background: "linear-gradient(135deg,#1e1b4b,#4338ca,#7c3aed)", borderRadius: 28, padding: "72px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
          <a href="https://wa.me/5511999999999" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "16px 36px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
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
        <span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>DÚVIDAS FREQUENTES</span>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12 }}>Perguntas<br/><span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>frequentes.</span></h2>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FAQS.map((f,i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}
            style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", cursor: "pointer" }} onClick={() => setOpen(open===i?null:i)}>
            <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>{f.q}</span>
              <span style={{ fontSize: 20, color: "#6366f1", fontWeight: 300, transform: open===i?"rotate(45deg)":"rotate(0)", transition: "transform 0.2s" }}>+</span>
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
          <span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>CONTATO</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, letterSpacing: "-1.5px", marginTop: 12, marginBottom: 20 }}>Vamos construir<br/><span style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>algo incrível?</span></h2>
          <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>Conte sobre seu projeto. Nossa equipe analisa e retorna com uma proposta em até 24 horas.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[{icon:"📧",label:"E-mail",val:"contato@stresserdigital.com"},{icon:"💬",label:"WhatsApp",val:"+55 (11) 9 9999-9999"},{icon:"📍",label:"Localização",val:"São Paulo, SP — Brasil"}].map(c=>(
              <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#ede9fe,#e0e7ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{c.icon}</div>
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
                <input required placeholder="Seu nome" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="#6366f1")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
                <input required type="email" placeholder="Seu e-mail" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="#6366f1")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
              </div>
              <input placeholder="WhatsApp" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="#6366f1")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
              <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={{...inp, color: form.service?"#111":"#9ca3af"}}>
                <option value="">Tipo de projeto</option>
                <option>App Mobile</option>
                <option>Site / Landing Page</option>
                <option>Automação / Bot</option>
                <option>SaaS / Plataforma</option>
                <option>Integração de API</option>
                <option>Outro</option>
              </select>
              <textarea required rows={4} placeholder="Descreva seu projeto..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{...inp,resize:"vertical"}} onFocus={e=>(e.target.style.borderColor="#6366f1")} onBlur={e=>(e.target.style.borderColor="#e5e7eb")}/>
              <button type="submit" style={{ background: "linear-gradient(135deg,#6366f1,#7c3aed)", color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 14px rgba(99,102,241,0.4)" }}>
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
    <footer style={{ background: "#0f0c29", color: "#fff", padding: "60px 40px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 22, marginBottom: 16 }}>
              <span style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Stresser</span>
              <span style={{ color: "#fff" }}> Digital</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: 14, maxWidth: 320 }}>Agência de tecnologia especializada em apps, automações, bots, SaaS e integrações. São Paulo, Brasil.</p>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>SERVIÇOS</div>
            {["Apps Mobile","Sites & LP","Automações","SaaS","Integrações API","IA & Bots"].map(s=>(
              <div key={s} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10, cursor: "pointer" }}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>CONTATO</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10 }}>contato@stresserdigital.com</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 10 }}>+55 (11) 9 9999-9999</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>São Paulo, SP</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>© {new Date().getFullYear()} Stresser Digital. Todos os direitos reservados.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["GitHub","LinkedIn","Instagram","WhatsApp"].map(s=>(
              <a key={s} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={e=>((e.target as HTMLElement).style.color="#818cf8")}
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
        <TechBand/>
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
