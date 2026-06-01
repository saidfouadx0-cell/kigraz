import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – KI Graz",
  description: "Impressum der KI Graz Plattform.",
  robots: { index: false, follow: false },
};

export default function ImprintPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Impressum</h1>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">Angaben gemäß § 5 ECG</h2>
            <p>KI Graz<br />
            Graz, Steiermark<br />
            Österreich</p>
            <p className="mt-3">E-Mail: <a href="mailto:hallo@kigraz.com" className="text-blue-600 hover:underline">hallo@kigraz.com</a></p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">Links zu externen Websites</h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
