 "use client";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Logo = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="currentColor" opacity="0.12" />
    <path d="M28 36h44v10H56v28H44V46H28z" fill="currentColor" />
  </svg>
);

const SERVICES = [
  {
    title: "Brindes personalizados",
    desc: "Canecas, camisetas, canetas, squeezes, ecobags, mochilas e muito mais.",
    bullets: ["Sublimação e silk", "Baixas e altas tiragens", "Kits corporativos"],
    image: "https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg",
  },
  {
    title: "Materiais gráficos",
    desc: "Folders, flyers, cartões de visita, adesivos, banners e catálogos.",
    bullets: ["Papéis e acabamentos premium", "Design e diagramação", "Entrega rápida"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Soluções corporativas",
    desc: "Kits de boas-vindas, brindes para eventos, agendas e planners.",
    bullets: ["Curadoria de itens", "Personalização total", "Empacotamento e envio"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    title: "Storage de materiais",
    desc: "Armazenagem e gestão de brindes e impressos para empresas.",
    bullets: ["Controle de estoque", "Envio sob demanda", "Relatórios personalizados"],
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
  },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-900">
          <Logo className="w-8 h-8 text-slate-900" />
          <div className="leading-tight">
            <p className="font-bold tracking-tight">TANTUM CORE</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Brand Solutions</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => goTo("servicos")} className="hover:text-slate-900 text-slate-600">Serviços</button>
          <button onClick={() => goTo("portfolio")} className="hover:text-slate-900 text-slate-600">Portfólio</button>
          <button onClick={() => goTo("contato")} className="hover:text-slate-900 text-slate-600">Contato</button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <motion.section className="relative pt-28 md:pt-32 pb-20 bg-gradient-to-b from-white to-slate-50"
      initial="hidden" animate="visible" variants={fadeIn}>
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeIn} className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Soluções criativas para <span className="underline decoration-4 decoration-slate-900/30 underline-offset-4">brindes</span> e impressos
          </h1>
          <p className="text-slate-600 text-lg">
            A Tantum Core transforma ideias em produtos que fortalecem marcas: brindes personalizados, folders, flyers, cartões e muito mais.
          </p>
          <div className="flex gap-3">
            <button onClick={() => goTo("contato")} className="rounded-2xl bg-slate-900 text-white px-5 py-3">Solicitar orçamento</button>
            <button onClick={() => goTo("portfolio")} className="rounded-2xl border px-5 py-3">Ver portfólio</button>
          </div>
        </motion.div>
        <motion.div variants={fadeIn}>
          <img src="https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg" alt="Brindes" className="rounded-2xl shadow-xl border object-cover w-full h-80" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function Services() {
  return (
    <motion.section id="servicos" className="py-20 bg-slate-50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Serviços</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {SERVICES.map((s, i) => (
            <article key={i} className="rounded-2xl bg-white border shadow-sm p-4 flex flex-col h-full">
              <img src={s.image} alt={s.title} className="rounded-xl mb-4 w-full h-40 object-cover" />
              <h3 className="font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 flex-1">
                {s.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Portfolio() {
  const imgs = [
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    "https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg",
    "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
  ];
  return (
    <motion.section id="portfolio" className="py-20 bg-white"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Portfólio</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {imgs.map((src, i) => <img key={i} src={src} alt={`Portfólio ${i+1}`} className="aspect-square rounded-xl object-cover border shadow-sm" />)}
        </div>
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section id="contato" className="py-20 bg-white"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicite um orçamento</h2>
          <form className="mt-6 space-y-4">
            <input required placeholder="Seu nome" className="w-full p-3 border rounded-2xl" />
            <input required type="email" placeholder="Seu e-mail" className="w-full p-3 border rounded-2xl" />
            <input placeholder="Telefone/WhatsApp" className="w-full p-3 border rounded-2xl" />
            <textarea required placeholder="Conte sobre o projeto" rows={5} className="w-full p-3 border rounded-2xl" />
            <div className="flex gap-3">
              <button type="submit" className="rounded-2xl bg-slate-900 text-white px-6 py-3">Enviar</button>
              <a href="https://wa.me/5511963141890" target="_blank" className="rounded-2xl border px-6 py-3">WhatsApp</a>
            </div>
          </form>
          <div className="mt-6 text-sm text-slate-600">
            📧 tantumcore@gmail.com <br /> 📞 +55 (11) 96314-1890
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CTA() {
  return (
    <section className="py-16 bg-slate-900 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Transforme sua marca em experiências memoráveis</h2>
      <p className="mt-2 text-white/80">Brindes e impressos de qualidade que deixam sua marca em evidência.</p>
      <div className="mt-6">
        <button onClick={() => goTo("contato")} className="rounded-2xl bg-white text-slate-900 px-6 py-3">Solicitar orçamento</button>
      </div>
    </section>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="https://wa.me/5511963141890" target="_blank" className="bg-green-500 text-white p-4 rounded-full shadow-lg">📱</a>
      <a href="mailto:tantumcore@gmail.com" className="bg-blue-600 text-white p-4 rounded-full shadow-lg">✉️</a>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="font-sans antialiased text-slate-900">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <CTA />
      </main>
      <footer className="py-6 bg-white border-t text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Tantum Core. Todos os direitos reservados.
      </footer>
      <FloatingActions />
    </div>
  );
}
