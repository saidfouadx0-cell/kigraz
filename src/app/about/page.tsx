import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Target, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns – KI Graz",
  description: "KI Graz ist die führende Plattform für KI-Lösungen in Graz und der Steiermark. Wir verbinden Unternehmen mit verifizierten KI-Experten.",
  alternates: { canonical: "https://kigraz.com/about" },
};

const values = [
  { icon: Target, title: "Unsere Mission", description: "KI für jedes Grazer Unternehmen zugänglich machen — unabhängig von Größe oder Budget. Wir bauen die Brücke zwischen KMUs und KI-Expertise." },
  { icon: Shield, title: "Vertrauen & Qualität", description: "Jeder Anbieter auf unserer Plattform wird manuell geprüft. Nur wer unsere Qualitätsstandards erfüllt, erhält das Verifizierungsbadge." },
  { icon: Users, title: "Lokale Expertise", description: "Wir sind in Graz verwurzelt und kennen die Bedürfnisse steirischer Unternehmen. Kurze Wege, direkter Kontakt, lokales Verständnis." },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Über KI Graz</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Wir sind die führende Plattform für KI-Lösungen in Graz und der Steiermark — gegründet mit dem Ziel, die digitale Transformation für jedes KMU erreichbar zu machen.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Geschichte</h2>
            <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
              <p>
                KI Graz entstand aus einer einfachen Beobachtung: Viele Grazer Unternehmen wissen, dass KI ihre Prozesse revolutionieren könnte — aber sie wissen nicht, wo sie anfangen sollen. Gleichzeitig gibt es in der Steiermark eine Vielzahl hervorragender KI-Anbieter, die genau diese Probleme lösen können.
              </p>
              <p>
                Unser Ziel ist es, diese Lücke zu schließen. Als neutrales Verzeichnis verbinden wir Unternehmen mit verifizierten KI-Experten aus der Region — transparent, kostenlos und ohne Provisionen.
              </p>
              <p>
                Zusätzlich helfen wir Unternehmen dabei, staatliche Fördermittel zu beantragen. Denn in Österreich können KMUs bis zu 75% ihrer KI-Investitionen gefördert bekommen — ein Vorteil, den viele noch nicht nutzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit loszulegen?</h2>
          <p className="text-gray-500 mb-8">Finden Sie den passenden KI-Anbieter für Ihr Unternehmen — kostenlos und unverbindlich.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/providers" className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              KI-Anbieter entdecken
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
