import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import ThemeProviders from "./components/ThemeProviders";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISO 42001 vs ISO 27001 - Comparativa de Estándares",
  description: "Análisis comparativo detallado entre ISO/IEC 42001 (Gobernanza de IA) e ISO/IEC 27001 (Seguridad de la Información). Descubre la relación y sinergias entre ambos estándares.",
  keywords: ["ISO 42001", "ISO 27001", "Gobernanza de IA", "Seguridad de la Información", "Comparativa", "Estándares Internacionales"],
  authors: [{ name: "Roberto Puyo" }],
  openGraph: {
    title: "ISO 42001 vs ISO 27001 - Comparativa de Estándares",
    description: "Análisis comparativo detallado entre ISO/IEC 42001 e ISO/IEC 27001",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO 42001 vs ISO 27001 - Comparativa de Estándares",
    description: "Análisis comparativo detallado entre ISO/IEC 42001 e ISO/IEC 27001",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${lato.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}