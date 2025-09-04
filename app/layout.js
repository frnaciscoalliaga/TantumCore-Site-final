import "./globals.css";

export const metadata = {
  title: "Tantum Core — Brand Solutions",
  description: "Brindes personalizados, materiais gráficos e soluções corporativas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="font-sans antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
