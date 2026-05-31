import type { Metadata } from "next";
import Link from "next/link";
import { Euro, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Förderungen für österreichische KMUs – bis zu 75%",
  description:
    "Erfahren Sie, wie Sie als österreichisches KMU bis zu 75% Förderung für KI-Projekte erhalten. KMU Digital, SFG, Horizon Europe – wir erklären alle Programme.",
  keywords: ["KI Förderung", "KMU Digital", "SFG Förderung", "KI Investition Österreich", "aws Förderung"],
  alternates: { canonical: "https://kigraz.com/funding" },
  openGraph: {
    title: "KI-Förderungen für österreichische KMUs – bis zu 75%",
    description: "KMU Digital, SFG und Horizon Europe: Holen Sie sich bis zu 75% Förderung für Ihr KI-Projekt.",
    type: "website",
    url: "https://kigraz.com/funding",
  },
};

const fundingPrograms = [
  {
    name: "KMU Digital",
    funder: "Wirtschaftsministerium Österreich",
    maxFunding: "bis zu 75%",
    maxAmount: "€ 50.000",
    description:
      "Förderung für KMUs zur Umsetzung digitaler Transformation inkl. KI-Projekte. Antrag über die aws (Austria Wirtschaftsservice).",
    eligible: ["Digitalisierungsstrategie", "KI-Implementierung", "Prozessautomatisierung"],
    link: "#",
  },
  {
    name: "Steirische Wirtschaftsförderung (SFG)",
    funder: "Steirische Wirtschaftsförderungsgesellschaft",
    maxFunding: "bis zu 50%",
    maxAmount: "€ 200.000",
    description:
      "Die SFG unterstützt steirische Unternehmen bei Investitionen in Digitalisierung und Innovation, darunter KI-Projekte.",
    eligible: ["Forschung & Entwicklung", "Digitalisierung", "Innovationsprojekte"],
    link: "#",
  },
  {
    name: "Horizon Europe",
    funder: "Europäische Union",
    maxFunding: "bis zu 70%",
    maxAmount: "Unbegrenzt",
    description:
      "Das EU-Rahmenprogramm für Forschung und Innovation fördert KI-Projekte mit EU-weiter Relevanz.",
    eligible: ["KI-Forschung", "Kooperationsprojekte", "Innovationsmaßnahmen"],
    link: "#",
  },
];

const steps = [
  {
    step: "1",
    title: "Projektidee definieren",
    description: "Beschreiben Sie Ihr KI-Vorhaben: Was soll automatisiert oder verbessert werden?",
  },
  {
    step: "2",
    title: "Förderprogramm auswählen",
    description: "Gemeinsam identifizieren wir das optimale Förderprogramm für Ihr Projekt.",
  },
  {
    step: "3",
    title: "Antrag stellen",
    description: "Wir unterstützen Sie bei der Vorbereitung und Einreichung des Förderantrags.",
  },
  {
    step: "4",
    title: "Projekt umsetzen",
    description: "Nach Genehmigung starten Sie mit dem geförderten KI-Projekt.",
  },
];

export default function FundingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-green-200 bg-green-800/40 px-3 py-1 rounded-full mb-6">
              Österreichische Förderprogramme
            </span>
            <h1 className="text-4xl font-bold mb-4">
              Bis zu 75% Ihrer KI-Investition gefördert
            </h1>
            <p className="text-green-100 text-lg leading-relaxed">
              Als österreichisches KMU können Sie staatliche Fördermittel für KI-Projekte
              beantragen. Wir erklären Ihnen, wie — kostenlos und unverbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Relevante Förderprogramme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingPrograms.map((program) => (
              <div key={program.name} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Euro className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-600 text-sm">{program.maxFunding}</div>
                    <div className="text-xs text-gray-400">max. {program.maxAmount}</div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{program.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{program.funder}</p>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-1.5">
                  {program.eligible.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            So kommen Sie zu Ihrer Förderung
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Lassen Sie sich kostenlos beraten</h2>
          <p className="text-blue-100 mb-8">
            Unsere Förderexperten helfen Ihnen dabei, das richtige Programm für Ihr KI-Projekt zu
            finden und den Antrag erfolgreich einzureichen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Kostenlose Beratung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
