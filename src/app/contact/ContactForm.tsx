"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const faqs = [
  {
    question: "Wie lange dauert eine typische KI-Implementierung?",
    answer:
      "Das hängt stark vom Umfang ab. Ein einfacher KI-Chatbot oder ein Automatisierungsprojekt ist oft in 4–8 Wochen umgesetzt. Komplexere Projekte wie maßgeschneiderte ML-Modelle oder unternehmensweite Automatisierung dauern in der Regel 3–6 Monate.",
  },
  {
    question: "Was kostet eine Beratung durch KI Graz?",
    answer:
      "Die Erstberatung ist für Sie vollständig kostenlos und unverbindlich. Dabei klären wir gemeinsam, welche KI-Lösungen und Förderungen für Ihr Unternehmen in Frage kommen. Erst bei konkreten Projekten besprechen wir Konditionen.",
  },
  {
    question: "Brauche ich technisches Know-how, um KI einzusetzen?",
    answer:
      "Nein. Die meisten modernen KI-Tools sind auch ohne Programmierkenntnisse nutzbar. Wir begleiten Sie von der Strategie über die Auswahl der richtigen Tools bis zur Schulung Ihrer Mitarbeiter – ganz nach Ihrem Wissensstand.",
  },
  {
    question: "Welche Förderungen gibt es für KI-Projekte in der Steiermark?",
    answer:
      "Österreichische KMUs können über Programme wie FFG, AWS und die Steirische Wirtschaftsförderung (SFG) zwischen 30 % und 75 % ihrer KI-Investition gefördert bekommen. Wir helfen Ihnen kostenlos dabei, die passenden Programme zu identifizieren und den Antrag zu stellen.",
  },
  {
    question: "Ist KI auch für meine Branche geeignet?",
    answer:
      "KI findet in nahezu jeder Branche sinnvolle Anwendung – von Produktion und Handel über Gastronomie und Gesundheitswesen bis hin zu Dienstleistung und Handwerk. Der Schlüssel liegt darin, den richtigen Anwendungsfall zu finden. Genau dabei helfen wir Ihnen.",
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error: dbError } = await supabase.from("contact_messages").insert(form);
    if (dbError) {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
      setLoading(false);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kontakt</h1>
          <p className="text-gray-500">Wir helfen Ihnen gerne weiter.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Kontaktdaten</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">E-Mail</div>
                    <a href="mailto:hallo@kigraz.com" className="hover:text-blue-600">
                      hallo@kigraz.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Telefon</div>
                    <span>+43 316 000 000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Adresse</div>
                    <span>Graz, Steiermark, Österreich</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                Erreichbarkeit
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Montag – Freitag</span>
                  <span className="font-medium text-gray-800">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag – Sonntag</span>
                  <span className="text-gray-400">Geschlossen</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">Antwort per E-Mail innerhalb von 24 Stunden</p>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Kostenlose Förderberatung</h3>
              <p className="text-sm text-blue-700">
                Möchten Sie wissen, welche Förderungen für Ihr KI-Projekt infrage kommen? Schreiben
                Sie uns — wir beraten Sie kostenlos.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl border border-green-100 p-6">
              <h3 className="font-semibold text-green-900 mb-3">Was passiert nach Ihrer Anfrage?</h3>
              <ol className="space-y-2 text-sm text-green-800">
                <li className="flex gap-2"><span className="font-bold shrink-0">1.</span> Wir melden uns innerhalb von 24 Stunden</li>
                <li className="flex gap-2"><span className="font-bold shrink-0">2.</span> Kostenloses 30-minütiges Erstgespräch</li>
                <li className="flex gap-2"><span className="font-bold shrink-0">3.</span> Individuelle Empfehlungen für Ihr Unternehmen</li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 rounded-2xl border border-green-200 p-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-green-700 font-bold text-xl mb-2">Nachricht gesendet!</div>
                <p className="text-green-700">
                  Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="font-semibold text-gray-900 mb-6">Nachricht senden</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Ihr Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      required
                      type="email"
                      placeholder="E-Mail-Adresse"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Unternehmen (optional)"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Betreff"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    required
                    rows={6}
                    placeholder="Ihre Nachricht…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Wird gesendet…" : "Nachricht senden"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Häufig gestellte Fragen</h2>
          <p className="text-gray-500 mb-8">Antworten auf die häufigsten Fragen rund um KI-Projekte und unsere Beratung.</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
