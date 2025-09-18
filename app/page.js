"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main className="font-sans antialiased text-slate-900">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          {/* Logo no canto esquerdo */}
          <Image src="/images/logo.png" alt="Logo Tantum Core" width={80} height={80} />
          {/* Navegação */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="text-slate-600 hover:text-slate-900">Sobre</a>
            <a href="#servicos" className="text-slate-600 hover:text-slate-900">Serviços</a>
            <a href="#portfolio" className="text-slate-600 hover:text-slate-900">Portfólio</a>
            <a href="#contato" className="text-slate-600 hover:text-slate-900">Contato</a>
          </nav>
        </div>
      </header>

      {/* Compensa o header fixo */}
      <div className="h-24" />

      {/* Hero */}
      <section id="hero" className="relative flex items-center bg-gray-900 text-white">
        <Image
          src="/images/hero.jpg"
          alt="Imagem Hero"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Bem-vindo à Tantum Core</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Soluções inteligentes em logística, materiais, storage e serviços personalizados para sua empresa.
          </p>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
            <p className="text-lg text-slate-600 max-w-prose">
              A Tantum Core oferece soluções completas e inovadoras, unindo tecnologia e expertise para otimizar processos
              logísticos, gestão de materiais, armazenamento e serviços sob medida.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/hero1.jpg"
              alt="Equipe Tantum Core"
              width={500}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos Serviços</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Image src="/images/service-brindes.jpg" alt="Brindes" width={400} height={300} className="mx-auto rounded-lg shadow" />
              <h3 className="mt-4 text-xl font-semibold">Brindes</h3>
            </div>
            <div>
              <Image src="/images/service-materiais.jpg" alt="Materiais" width={400} height={300} className="mx-auto rounded-lg shadow" />
              <h3 className="mt-4 text-xl font-semibold">Materiais</h3>
            </div>
            <div>
              <Image src="/images/service-storage.jpg" alt="Storage" width={400} height={300} className="mx-auto rounded-lg shadow" />
              <h3 className="mt-4 text-xl font-semibold">Storage</h3>
            </div>
            <div>
              <Image src="/images/service-solucoes.jpg" alt="Soluções" width={400} height=
