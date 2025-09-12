import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tantum Core",
  description: "Soluções Inteligentes em Logística",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Favicon principal */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Alternativas para compatibilidade */}
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
