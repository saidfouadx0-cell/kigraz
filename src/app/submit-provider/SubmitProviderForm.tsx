"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { PROVIDER_CATEGORIES } from "@/types";
import { createClient } from "@/lib/supabase/client";

const benefits = [
  "Kostenlose Listung auf der Plattform",
  "Direkter Kontakt zu KMU-Kunden in Graz",
  "Verifizierungsbadge nach Prüfung",
  "Förderberatung für Ihre Kunden",
];

export default function SubmitProviderForm() {
  const [form, setForm] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    website: "",
    phone: "",
    description: "",
    categories: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleCategory(cat: string) {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter((c) => c !== cat)
        : [...f.categories, cat],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.categories.length === 0) return;
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error: dbError } = await supabase.from("provider_applications").insert({
      ...form,
      status: "pending",
    });
    if (dbError) {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
      setLoading(false);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md w-full">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Bewerbung eingegangen!</h1>
          <p className="text-gray-500">
            Wir prüfen Ihre Bewerbung und melden uns innerhalb von 3 Werktagen bei Ihnen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Als KI-Anbieter listen lassen</h1>
          <p className="text-gray-500">
            Werden Sie Teil der führenden KI-Plattform für Graz und die Steiermark.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Ihre Vorteile</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 text-sm text-blue-700">
              <strong className="block mb-1">Verifizierungsprozess</strong>
              Alle Anbieter werden manuell geprüft. Nach erfolgreicher Prüfung erhalten Sie ein
              Verifizierungsbadge auf Ihrem Profil.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="font-semibold text-gray-900 mb-6">Bewerbungsformular</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unternehmensname *</label>
                    <input
                      required
                      type="text"
                      value={form.company_name}
                      onChange={(e) => setForm({ ...form, company_name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ansprechperson *</label>
                    <input
                      required
                      type="text"
                      value={form.contact_name}
                      onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="url"
                    placeholder="https://ihrewebsite.at"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategorien * (mind. 1 auswählen)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROVIDER_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                          form.categories.includes(cat)
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Unternehmen und Ihre KI-Dienstleistungen…"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={loading || form.categories.length === 0}
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {loading ? "Wird gesendet…" : "Bewerbung absenden"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
