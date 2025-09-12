"use client";

import Image from "next/image";
import { Mail, CheckCircle } from "lucide-react";

// Hero Section
function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900">
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Soluções Inteligentes em Logística
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Armazenagem, transporte e gestão de materiais em um só lugar.
        </p>
      </div>
    </section>
  );
}

// Sobre Section
function About() {
  return (
    <section id="sobre" className="py-16 px-6 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png" // Novo logo
            alt="Logo Tantum Core"
            width={100}
            height={100}
            className="mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-700 leading-relaxed">
            A Tantum Core é especializada em soluções logísticas completas.
            Atuamos em diversos segmentos, oferecendo serviços de armazenagem,
            gestão de estoque, transporte e soluções personalizadas para sua
            empresa.
          </p>
        </div>
      </div>
    </section>
  );
}

// Serviços Section
function Services() {
  const services = [
    { title: "Armazenagem", image: "/services1.jpg" },
    { title: "Gestão de Materiais", image: "/services2.jpg" },
    { title: "Transporte", image: "/services3.jpg" },
    { title: "Soluções Integradas", image: "/services4.jpg" },
  ];

  return (
    <section id="servicos" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

// Portfólio Section
function Portfolio() {
  const portfolioItems = [
    "/portfolio1.jpg",
    "/portfolio2.jpg",
    "/portfolio3.jpg",
    "/portfolio4.jpg",
    "/portfolio5.jpg",
    "/portfolio6.jpg",
  ];

  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Portfólio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={item}
              alt={`Portfólio ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Contato Section
function Contact() {
  return (
    <section id="contato" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>
      <p className="text-gray-700 mb-8">
        Entre em contato conosco para mais informações sobre nossos serviços.
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-lg text-gray-800">
          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-green-500"
          >
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 2.088.546 4.127 1.582 5.926L.5 23.5l5.694-1.55A11.47 11.47 0 0 0 12 23.5c6.352 0 11.5-5.148 11.5-11.5S18.352.5 12 .5Zm0 20.917a9.37 9.37 0 0 1-4.783-1.306l-.342-.201-3.379.919.902-3.295-.224-.338A9.417 9.417 0 1 1 21.417 12c0 5.191-4.226 9.417-9.417 9.417Zm5.164-7.075c-.283-.141-1.672-.825-1.932-.919-.26-.095-.449-.141-.638.141-.19.283-.732.919-.897 1.109-.165.19-.33.212-.613.071-.283-.142-1.192-.439-2.27-1.399-.839-.747-1.404-1.67-1.57-1.953-.165-.283-.017-.436.124-.577.128-.128.283-.331.425-.496.142-.165.189-.283.283-.472.095-.19.047-.354-.024-.496-.071-.142-.638-1.54-.874-2.107-.23-.553-.465-.478-.638-.487-.165-.009-.354-.011-.543-.011-.189 0-.496.071-.756.354-.26.283-.992.969-.992 2.364s1.015 2.74 1.157 2.928c.142.189 2.002 3.05 4.852 4.276.679.293 1.21.468 1.624.598.682.217 1.301.187 1.79.113.546-.082 1.672-.683 1.908-1.343.236-.66.236-1.225.165-1.343-.071-.118-.26-.189-.543-.331Z"/>
          </svg>
          <span>(11) 99999-9999</span>
        </div>
        <div className="flex items-center gap-2 text-lg text-gray-800">
          <Mail className="w-6 h-6 text-blue-500" />
          <span>contato@tantumcore.com</span>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Tantum Core. Todos os direitos reservados.</p>
    </footer>
  );
}

// Main Page
export default function TantumCoreOnePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
