import "./globals.css";

export const metadata = {
  title: "Tantum Core Brand Solutions",
  description: "Brindes e materiais gráficos personalizados.",
  icons: {
    icon: "/favicon.ico", // coloque o favicon em public/favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
