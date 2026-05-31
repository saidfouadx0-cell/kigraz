import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

const BASE = "https://kigraz.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "KI Graz – KI-Lösungen für Grazer Unternehmen",
    template: "%s | KI Graz",
  },
  description:
    "Die führende Plattform für KI-Lösungen in Graz und der Steiermark. Finden Sie verifizierte KI-Anbieter und erhalten Sie bis zu 75% Förderung für Ihre KI-Projekte.",
  keywords: [
    "KI Graz",
    "Künstliche Intelligenz Graz",
    "KI-Anbieter Steiermark",
    "KMU Digitalisierung",
    "KI Förderung Österreich",
    "Machine Learning Graz",
    "AI Consulting Graz",
    "Automatisierung KMU",
  ],
  authors: [{ name: "KI Graz", url: BASE }],
  creator: "KI Graz",
  publisher: "KI Graz",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: BASE,
    siteName: "KI Graz",
    title: "KI Graz – KI-Lösungen für Grazer Unternehmen",
    description:
      "Verifizierte KI-Anbieter in Graz finden und bis zu 75% staatliche Förderung für Ihr KI-Projekt erhalten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KI Graz – KI-Lösungen für Grazer Unternehmen",
    description:
      "Verifizierte KI-Anbieter in Graz finden und bis zu 75% staatliche Förderung erhalten.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "KI Graz",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.ico` },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hallo@kigraz.com",
        telephone: "+43-316-000-000",
        contactType: "customer service",
        areaServed: "AT",
        availableLanguage: "German",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Graz",
        addressRegion: "Steiermark",
        addressCountry: "AT",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "KI Graz",
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "de-AT",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/providers?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
