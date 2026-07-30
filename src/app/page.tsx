"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, services, stack } from "@/data/projects";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Serviços", "Projetos", "Stack", "Contato"];
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 24px",height:64,
      display:"flex",alignItems:"center",justifyContent:"space-between",
      background:scrolled?"rgba(5,5,8,0.85)":"transparent",
      backdropFilter:scrolled?"blur(20px)":"none",
      borderBottom:scrolled?"1px solid var(--border)":"none",transition:"all 0.3s ease",
    }}>
      <a href="#" style={{fontWeight:700,fontSize:18,letterSpacing:"-0.5px",textDecoration:"none"}}>
        <span style={{color:"var(--accent)"}}>Stresser</span><span style={{color:"var(--text)"}}> Digital</span>
      </a>
      <div style={{display:"flex",gap:32,alignItems:"center"}}>
        {links.map(l=>(
          <a key={l} href={`#${l.toLowerCase()}`} style={{color:"var(--muted)",fontSize:14,textDecoration:"none",transition:"color 0.2s"}}
            onMouseEnter={e=>((e.target as HTMLElement).style.color="var(--text)")}
            onMouseLeave={e=>((e.target as HTMLElement).style.color="var(--muted)")}>{l}</a>
        ))}
        <a href="#contato" style={{background:"var(--accent)",color:"#fff",padding:"8px 20px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>
          Fale conosco
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const words = ["apps.","automações.","SaaS.","bots.","integrações.","resultados."];
  const [idx,setIdx] = useState(0);
  useEffect(()=>{const t=setInterval(()=>setIdx(i=>(i+1)%words.length),2200);return()=>clearInterval(t);},[]);
  return (
    <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,109,250,0.15) 0%,transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%,-60%)",pointerEvents:"none"}}/>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}>
        <div style={{display:"inline-block",background:"rgba(124,109,250,0.12)",border:"1px solid rgba(124,109,250,0.3)",borderRadius:100,padding:"6px 16px",fontSize:13,color:"var(--accent)",marginBottom:32,letterSpacing:"0.05em",fontWeight:500}}>
          Agência de tecnologia · São Paulo, BR
        </div>
        <h1 style={{fontSize:"clamp(42px,8vw,96px)",fontWeight:800,lineHeight:1.05,letterSpacing:"-3px",marginBottom:24,maxWidth:900}}>
          Transformamos ideias em{" "}
          <span style={{position:"relative",display:"inline-block"}}>
            <AnimatePresence mode="wait">
              <motion.span key={idx} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.35}} style={{color:"var(--accent)",display:"inline-block"}}>
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p style={{fontSize:"clamp(16px,2vw,20px)",color:"var(--muted)",maxWidth:560,margin:"0 auto 48px",lineHeight:1.7}}>
          Desenvolvemos produtos digitais completos — do MVP ao produto escalável. Apps, automações, bots e SaaS entregues com excelência.
        </p>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="#projetos" style={{background:"var(--accent)",color:"#fff",padding:"14px 32px",borderRadius:10,fontWeight:700,fontSize:16,textDecoration:"none"}}>Ver projetos →</a>
          <a href="#contato" style={{background:"transparent",color:"var(--text)",padding:"14px 32px",borderRadius:10,fontWeight:600,fontSize:16,textDecoration:"none",border:"1px solid var(--border)"}}>Falar com especialista</a>
        </div>
      </motion.div>
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.8}} style={{display:"flex",gap:48,marginTop:80,flexWrap:"wrap",justifyContent:"center"}}>
        {[{n:"100+",label:"Projetos entregues"},{n:"8 anos",label:"De experiência"},{n:"20+",label:"Tecnologias dominadas"},{n:"0",label:"Projetos abandonados"}].map(s=>(
          <div key={s.label} style={{textAlign:"center"}}>
            <div style={{fontSize:32,fontWeight:800,color:"var(--accent)"}}>{s.n}</div>
            <div style={{fontSize:13,color:"var(--muted)",marginTop:4}}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="serviços" style={{padding:"120px 24px",maxWidth:1200,margin:"0 auto"}}>
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
        <p style={{color:"var(--accent)",fontSize:13,fontWeight:600,letterSpacing:"0.1em",marginBottom:12}}>O QUE ENTREGAMOS</p>
        <h2 style={{fontSize:"clamp(32px,5vw,56px)",fontWeight:800,letterSpacing:"-2px",marginBottom:64,lineHeight:1.1}}>Tudo que o seu negócio<br/>digital precisa.</h2>
      </motion.div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:24}}>
        {services.map((s,i)=>(
          <motion.div key={s.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08,duration:0.6}} whileHover={{y:-4}}
            style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"32px",cursor:"default",transition:"border-color 0.3s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(124,109,250,0.4)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border)"}}>
            <div style={{fontSize:36,marginBottom:16}}>{s.icon}</div>
            <h3 style={{fontSize:20,fontWeight:700,marginBottom:10}}>{s.title}</h3>
            <p style={{color:"var(--muted)",lineHeight:1.7,fontSize:15}}>{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const highlighted = projects.filter(p=>p.highlight);
  const rest = projects.filter(p=>!p.highlight);
  return (
    <section id="projetos" style={{padding:"120px 24px",maxWidth:1200,margin:"0 auto"}}>
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} style={{marginBottom:64}}>
        <p style={{color:"var(--accent)",fontSize:13,fontWeight:600,letterSpacing:"0.1em",marginBottom:12}}>PROJETOS SELECIONADOS</p>
        <h2 style={{fontSize:"clamp(32px,5vw,56px)",fontWeight:800,letterSpacing:"-2px",lineHeight:1.1}}>Do código à entrega.</h2>
      </motion.div>
      <div style={{display:"grid",gap:24,marginBottom:24}}>
        {highlighted.map((p,i)=>(
          <motion.div key={p.slug} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.7}} whileHover={{y:-3}}
            style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:20,padding:"40px 48px",position:"relative",overflow:"hidden",cursor:"pointer"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=p.color+"55"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border)"}}>
            <div style={{position:"absolute",top:0,right:0,width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle,${p.color}18 0%,transparent 70%)`,pointerEvents:"none"}}/>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
              <span style={{fontSize:11,fontWeight:600,letterSpacing:"0.08em",color:p.color,background:p.color+"18",padding:"4px 10px",borderRadius:100}}>{p.category}</span>
              <span style={{fontSize:11,fontWeight:600,letterSpacing:"0.08em",color:"var(--accent)",background:"rgba(124,109,250,0.12)",padding:"4px 10px",borderRadius:100}}>DESTAQUE</span>
            </div>
            <h3 style={{fontSize:28,fontWeight:800,marginBottom:10,letterSpacing:"-1px"}}>{p.title}</h3>
            <p style={{fontSize:15,color:"var(--muted)",marginBottom:8,fontWeight:500}}>{p.tagline}</p>
            <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.7,maxWidth:600,marginBottom:24}}>{p.description}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {p.tags.map(t=>(
                <span key={t} style={{fontSize:12,padding:"4px 12px",borderRadius:100,background:"rgba(255,255,255,0.05)",border:"1px solid var(--border)",color:"var(--muted)"}}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:24}}>
        {rest.map((p,i)=>(
          <motion.div key={p.slug} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.6}} whileHover={{y:-4}}
            style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"32px",cursor:"pointer"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=p.color+"55"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border)"}}>
            <span style={{fontSize:11,fontWeight:600,letterSpacing:"0.08em",color:p.color,background:p.color+"18",padding:"4px 10px",borderRadius:100,display:"inline-block",marginBottom:16}}>{p.category}</span>
            <h3 style={{fontSize:20,fontWeight:700,marginBottom:8}}>{p.title}</h3>
            <p style={{fontSize:14,color:"var(--muted)",marginBottom:6,fontWeight:500}}>{p.tagline}</p>
            <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:20}}>{p.description}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {p.tags.slice(0,4).map(t=>(
                <span key={t} style={{fontSize:11,padding:"3px 10px",borderRadius:100,background:"rgba(255,255,255,0.04)",border:"1px solid var(--border)",color:"var(--muted)"}}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" style={{padding:"120px 24px",maxWidth:1200,margin:"0 auto"}}>
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} style={{marginBottom:64}}>
        <p style={{color:"var(--accent)",fontSize:13,fontWeight:600,letterSpacing:"0.1em",marginBottom:12}}>TECNOLOGIAS</p>
        <h2 style={{fontSize:"clamp(32px,5vw,56px)",fontWeight:800,letterSpacing:"-2px",lineHeight:1.1}}>Stack de ponta,<br/>sem atalhos.</h2>
      </motion.div>
      <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
        {stack.map((tech,i)=>(
          <motion.span key={tech} initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.04,duration:0.4}} whileHover={{scale:1.08}}
            style={{padding:"10px 20px",borderRadius:100,background:"var(--surface)",border:"1px solid var(--border)",fontSize:14,fontWeight:500,color:"var(--text)",cursor:"default",display:"inline-block"}}>
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent,setSent] = useState(false);
  const [form,setForm] = useState({name:"",email:"",message:""});
  const inputStyle: React.CSSProperties = {width:"100%",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"14px 16px",fontSize:15,color:"var(--text)",outline:"none",fontFamily:"inherit"};
  return (
    <section id="contato" style={{padding:"120px 24px",maxWidth:700,margin:"0 auto"}}>
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} style={{textAlign:"center",marginBottom:56}}>
        <p style={{color:"var(--accent)",fontSize:13,fontWeight:600,letterSpacing:"0.1em",marginBottom:12}}>VAMOS CONVERSAR</p>
        <h2 style={{fontSize:"clamp(32px,5vw,56px)",fontWeight:800,letterSpacing:"-2px",lineHeight:1.1,marginBottom:20}}>Pronto para começar?</h2>
        <p style={{color:"var(--muted)",fontSize:16,lineHeight:1.7}}>Conte sobre seu projeto e entraremos em contato em até 24 horas.</p>
      </motion.div>
      {sent?(
        <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} style={{textAlign:"center",padding:"60px 32px",background:"var(--surface)",border:"1px solid rgba(67,233,123,0.3)",borderRadius:20}}>
          <div style={{fontSize:48,marginBottom:16}}>✅</div>
          <h3 style={{fontSize:24,fontWeight:700,marginBottom:10}}>Mensagem recebida!</h3>
          <p style={{color:"var(--muted)"}}>Retornaremos em até 24 horas.</p>
        </motion.div>
      ):(
        <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{display:"flex",flexDirection:"column",gap:16}}>
          <input required placeholder="Seu nome" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputStyle}/>
          <input required type="email" placeholder="Seu e-mail" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputStyle}/>
          <textarea required rows={5} placeholder="Descreva seu projeto..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{...inputStyle,resize:"vertical"}}/>
          <button type="submit" style={{background:"var(--accent)",color:"#fff",border:"none",borderRadius:10,padding:"16px",fontSize:16,fontWeight:700,cursor:"pointer",marginTop:8}}>
            Enviar mensagem →
          </button>
        </form>
      )}
      <div style={{textAlign:"center",marginTop:48,color:"var(--muted)",fontSize:14}}>
        Ou fale pelo{" "}
        <a href="https://wa.me/5511999999999" style={{color:"var(--accent)",textDecoration:"none"}}>WhatsApp</a>
        {" · "}
        <a href="mailto:contato@stresserdigital.com" style={{color:"var(--accent)",textDecoration:"none"}}>contato@stresserdigital.com</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{borderTop:"1px solid var(--border)",padding:"32px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1200,margin:"0 auto"}}>
      <span style={{fontWeight:700}}><span style={{color:"var(--accent)"}}>Stresser</span> Digital</span>
      <span style={{color:"var(--muted)",fontSize:13}}>© {new Date().getFullYear()} Stresser Digital. Todos os direitos reservados.</span>
      <div style={{display:"flex",gap:20}}>
        {["GitHub","LinkedIn","WhatsApp"].map(s=>(
          <a key={s} href="#" style={{color:"var(--muted)",fontSize:13,textDecoration:"none"}}
            onMouseEnter={e=>((e.target as HTMLElement).style.color="var(--text)")}
            onMouseLeave={e=>((e.target as HTMLElement).style.color="var(--muted)")}>{s}</a>
        ))}
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
        <Services/>
        <Projects/>
        <StackSection/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
