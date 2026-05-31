import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KI Graz – KI-Lösungen für Grazer Unternehmen",
  description:
    "Die führende Plattform für KI-Lösungen in Graz und der Steiermark. Finden Sie verifizierte KI-Anbieter und erhalten Sie bis zu 75% Förderung für Ihre KI-Projekte.",
  keywords: "KI, Künstliche Intelligenz, Graz, Steiermark, KMU, Förderung, AI, Machine Learning",
  openGraph: {
    title: "KI Graz – KI-Lösungen für Grazer Unternehmen",
    description:
      "Finden Sie verifizierte KI-Anbieter in Graz und erhalten Sie bis zu 75% Förderung.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
