"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Função para scroll suave
const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Logo inline (hexágono + T)
const Logo = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="currentColor" opacity="0.12" />
    <path d="M28 36h44v10H56v28H44V46H28z" fill="currentColor" />
  </svg>
);

// Cabeçalho
const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b">
    <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 text-slate-900">
        <Logo className="w-8 h-8 text-slate-900" />
        <div className="leading-tight">
          <p className="font-bold tracking-tight">TANTUM CORE</p>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Brand Solutions</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <button onClick={() => goTo("sobre")} className="text-slate-600 hover:text-slate-900">Sobre</button>
        <button onClick={() => goTo("servicos")} className="text-slate-600 hover:text-slate-900">Serviços</button>
        <button onClick={() => goTo("portfolio")} className="text-slate-600 hover:text-slate-900">Portfólio</button>
        <button onClick={() => goTo("contato")} className="text-slate-600 hover:text-slate-900">Contato</button>
      </nav>
    </div>
  </header>
);

// Hero simplificado (1 imagem)
const Hero = () => (
  <section className="relative pt-28 md:pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
    <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs">
          <CheckCircle2 className="w-4 h-4" />
          Personalização & Materiais Gráficos
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Soluções criativas para <span className="underline decoration-4 decoration-slate-900/30 underline-offset-4">brindes</span> e impressos
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          A Tantum Core Brand Solutions transforma ideias em produtos que fortalecem marcas: brindes personalizados, folders, flyers, cartões e muito mais.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="border rounded-2xl overflow-hidden bg-white shadow">
          <Image src="/images/hero1.jpg" alt="Hero Image" width={600} height={400} className="object-cover w-full h-full" />
        </div>
      </motion.div>
    </div>
  </section>
);

// Seção Sobre
const Sobre = () => (
  <section id="sobre" className="py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-12 gap-10 items-center">
      <div className="md:col-span-5">
        <Logo className="w-16 h-16 text-slate-900" />
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Sobre a Tantum Core</h2>
        <p className="mt-3 text-slate-600">
          Somos especialistas em <strong>personalização de brindes</strong> e <strong>materiais gráficos</strong> que criam conexões reais entre marcas e pessoas.
        </p>
      </div>
      <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
        {[
          { title: "Foco no cliente", desc: "Atendimento próximo e soluções sob medida." },
          { title: "Agilidade", desc: "Prazos enxutos sem abrir mão da qualidade." },
          { title: "Qualidade", desc: "Impressão premium e acabamentos especiais." },
          { title: "Atendimento nacional", desc: "Enviamos para todo o Brasil e Chile." },
        ].map((item, i) => (
          <div key={i} className="p-6 border rounded-2xl shadow-sm">
            <p className="font-semibold text-slate-900">{item.title}</p>
            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Seção Serviços
const Servicos = () => {
  const services = useMemo(() => ([
    { title: "Brindes personalizados", desc: "Canecas, camisetas, squeezes, mochilas e muito mais.", img: "/images/service-brindes.jpg", bullets: ["Sublimação e silk", "Baixas e altas tiragens", "Kits corporativos"] },
    { title: "Materiais gráficos", desc: "Folders, flyers, cartões de visita, adesivos, banners e catálogos.", img: "/images/service-materiais.jpg", bullets: ["Papéis e acabamentos premium", "Design e diagramação", "Entrega rápida"] },
    { title: "Storage de materiais", desc: "Gestão de estoque e envio de materiais promocionais.", img: "/images/service-storage.jpg", bullets: ["Armazenagem segura", "Controle de inventário", "Logística sob demanda"] },
    { title: "Soluções criativas", desc: "Ideias inovadoras para campanhas e branding.", img: "/images/service-solucoes.jpg", bullets: ["Campanhas personalizadas", "Marketing promocional", "Consultoria criativa"] },
  ]), []);

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">Serviços</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow-sm flex flex-col">
              <Image src={s.img} alt={s.title} width={400} height={300} className="rounded-xl object-cover mb-4" />
              <h3 className="font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seção Portfólio
const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-slate-900">Portfólio</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-slate-100 border shadow-sm overflow-hidden">
            <Image src={`/images/portfolio${i+1}.jpg`} alt={`Portfólio ${i+1}`} width={300} height={300} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contato
const Contato = () => (
  <section id="contato" className="py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-slate-900">Solicite um orçamento</h2>
      <p className="mt-2 text-slate-600">Entre em contato via WhatsApp ou e-mail.</p>
      <div className="mt-6 text-slate-700">
        📧 tantumcore@gmail.com <br />
        📱 +55 (11) 96314-1890
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-10 bg-white border-t text-center text-slate-500 text-sm">
    © {new Date().getFullYear()} Tantum Core Brand Solutions
  </footer>
);

// Export principal
export default function TantumCoreOnePage() {
  return (
    <main className="font-sans antialiased text-slate-900">
      <Nav />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contato />
      <Footer />
    </main>
  );
}
