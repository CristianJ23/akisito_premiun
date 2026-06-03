import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akisito - Loja auténtica, en tu bolsillo",
  description: "Plataforma de asistencia turística gastronómica con IA para Loja, Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/../video/logo reducido.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
