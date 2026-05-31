import type { Metadata } from "next";
import { getProviders } from "@/lib/db";
import { mockProviders } from "@/lib/mock-data";
import ProvidersClient from "./ProvidersClient";

export const metadata: Metadata = {
  title: "KI-Anbieter in Graz & Steiermark – Verzeichnis",
  description:
    "Finden Sie verifizierte KI-Anbieter aus Graz und der Steiermark. Filtern nach Kategorie, bewerten Sie Angebote und fordern Sie kostenlos Angebote an.",
  keywords: [
    "KI Anbieter Graz",
    "Künstliche Intelligenz Unternehmen Steiermark",
    "Machine Learning Dienstleister",
    "KI Beratung Graz",
    "AI Consulting Österreich",
  ],
  alternates: { canonical: "https://kigraz.com/providers" },
  openGraph: {
    title: "KI-Anbieter in Graz & Steiermark – Verzeichnis",
    description: "Verzeichnis verifizierter KI-Dienstleister aus Graz. Kostenlos filtern und Angebote anfragen.",
    type: "website",
    url: "https://kigraz.com/providers",
  },
};

export default async function ProvidersPage() {
  const providers = await getProviders().catch(() => mockProviders);
  return <ProvidersClient providers={providers} />;
}
