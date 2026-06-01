import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – KI Graz",
  description: "Datenschutzerklärung der KI Graz Plattform.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Datenschutzerklärung</h1>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">2. Datenerfassung auf dieser Website</h2>
            <p className="mb-3"><strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <p className="mb-3"><strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — etwa durch das Ausfüllen unserer Kontakt- oder Registrierungsformulare. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.</p>
            <p><strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Die Daten werden erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten und um Anfragen über unser Kontaktformular bearbeiten zu können.</p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">3. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Vercel ist ein Anbieter aus den USA. Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von Vercel verarbeitet. Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">4. Cookies & Authentifizierung</h2>
            <p>
              Für die Benutzeranmeldung verwenden wir Supabase. Dabei werden Session-Cookies gesetzt, die für die Aufrechterhaltung Ihrer Anmeldung notwendig sind. Diese Cookies werden nach dem Abmelden oder nach Ablauf der Session gelöscht. Es werden keine Tracking- oder Marketing-Cookies verwendet.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-900 mb-3 text-base">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden: <a href="mailto:hallo@kigraz.com" className="text-blue-600 hover:underline">hallo@kigraz.com</a>.
            </p>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">Stand: Juni 2026</p>
        </div>
      </div>
    </div>
  );
}
