import type { Metadata } from "next";
import SubmitProviderForm from "./SubmitProviderForm";

export const metadata: Metadata = {
  title: "Als KI-Anbieter listen lassen – KI Graz",
  description:
    "Werden Sie Teil der führenden KI-Plattform für Graz und die Steiermark. Kostenlose Listung, verifiziertes Profil und direkter Zugang zu KMU-Kunden.",
  alternates: { canonical: "https://kigraz.com/submit-provider" },
  openGraph: {
    title: "Als KI-Anbieter listen lassen – KI Graz",
    description: "Kostenlose Listung auf der führenden KI-Plattform für Graz. Jetzt bewerben.",
    type: "website",
    url: "https://kigraz.com/submit-provider",
  },
};

export default function SubmitProviderPage() {
  return <SubmitProviderForm />;
}
