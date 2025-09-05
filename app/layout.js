import "./globals.css";

export const metadata = {
  title: "Tantum Core Brand Solutions",
  description: "Soluções criativas em brindes e materiais gráficos.",
  openGraph: {
    title: "Tantum Core Brand Solutions",
    description: "Soluções criativas em brindes e materiais gráficos.",
    url: "https://seusite.com",
    siteName: "Tantum Core",
    images: [{ url: "/images/hero1.jpg", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tantum Core Brand Solutions",
    description: "Soluções criativas em brindes e materiais gráficos.",
    images: ["/images/hero1.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
