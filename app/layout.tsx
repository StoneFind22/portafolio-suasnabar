import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Suasnabar | UNCP FIS - José Pablo Osorio Mallqui",
  description: "Portafolio oficial y catálogo de entregas para la asignatura Desarrollo de Aplicaciones Web impartida por el Dr. Jaime Suasnabar Terrel (UNCP FIS), complementado con el ecosistema de 54 repositorios GitHub.",
  icons: {
    icon: "/assets/logo-uncp.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
