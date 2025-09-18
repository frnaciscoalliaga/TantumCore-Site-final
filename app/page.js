"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Hero />

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
          A Tantum Core oferece soluções inteligentes em logística, materiais,
          storage e serviços personalizados para sua empresa.
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
        <div className="flex justify-center items-center gap-4">
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
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
