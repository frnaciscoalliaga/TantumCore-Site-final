"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Tantum Core</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Soluções inteligentes em logística, materiais, storage e serviços
            personalizados para sua empresa.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-12 text-center">
        <Image
          src="/images/logo.png"
          alt="Logo Tantum Core"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          A Tantum Core oferece soluções completas e inovadoras, unindo
          tecnologia e expertise para otimizar processos logísticos, gestão de
          materiais, armazenamento e serviços sob medida.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="p-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <Image
              src="/images/service-brindes.jpg"
              alt="Serviços - Brindes"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow"
            />
            <h3 className="mt-4 text-xl font-semibold">Brindes</h3>
          </div>
          <div>
            <Image
              src="/images/service-materiais.jpg"
              alt="Serviços - Materiais"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow"
            />
            <h3 className="mt-4 text-xl font-semibold">Materiais</h3>
          </div>
          <div>
            <Image
              src="/images/service-storage.jpg"
              alt="Serviços - Storage"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow"
            />
            <h3 className="mt-4 text-xl font-semibold">Storage</h3>
          </div>
          <div>
            <Image
              src="/images/service-solucoes.jpg"
              alt="Serviços - Soluções"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow"
            />
            <h3 className="mt-4 text-xl font-semibold">Soluções</h3>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Portfólio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["1", "2", "3", "4", "5", "6"].map((num) => (
            <Image
              key={num}
              src={`/images/portfolio${num}.jpg`}
              alt={`Portfólio ${num}`}
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow"
            />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <Image
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              width={32}
              height={32}
            />
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-green-600"
            >
              +55 (XX) XXXXX-XXXX
            </a>
          </div>

          {/* Telefone */}
          <div className="flex items-center gap-3">
            <Image
              src="/icons/phone.png"
              alt="Telefone"
              width={28}
              height={28}
            />
            <a href="tel:+55XXXXXXXXX" className="text-lg font-medium text-gray-700">
              +55 (XX) XXXXX-XXXX
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Image src="/icons/email.png" alt="E-mail" width={28} height={28} />
            <a
              href="mailto:contato@tantumcore.com"
              className="text-lg font-medium text-gray-700"
            >
              contato@tantumcore.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center bg-gray-900 text-white">
        <p>© {new Date().getFullYear()} Tantum Core. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
