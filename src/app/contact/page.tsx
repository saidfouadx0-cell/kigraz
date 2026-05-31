import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – KI Graz",
  description:
    "Kontaktieren Sie KI Graz für eine kostenlose Beratung zu KI-Förderungen und KI-Projekten in Graz und der Steiermark. Wir antworten innerhalb von 24 Stunden.",
  alternates: { canonical: "https://kigraz.com/contact" },
  openGraph: {
    title: "Kontakt – KI Graz",
    description: "Kostenlose Beratung zu KI-Förderungen und KI-Projekten in Graz und der Steiermark.",
    type: "website",
    url: "https://kigraz.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
