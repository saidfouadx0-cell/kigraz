import Link from "next/link";
import { createPost } from "../actions";
import { PROVIDER_CATEGORIES } from "@/types";

export const metadata = { title: "Admin – Neuer Artikel | KI Graz" };

const blogCategories = [
  "KI-Strategie", "Förderungen", "Anwendungsfälle", "Machine Learning",
  "Automatisierung", "Digitalisierung", "Praxistipps", "Neuigkeiten",
];

export default function NewBlogPostPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/blog" className="text-sm text-gray-500 hover:text-gray-700">
          ← Blog
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-bold text-gray-900">Neuer Artikel</h1>
      </div>

      <form action={createPost} className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titel *</label>
          <input
            required
            name="title"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="KI im Mittelstand: Wie Grazer Unternehmen profitieren"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategorie *</label>
            <select
              required
              name="category"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Auswählen…</option>
              {blogCategories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lesezeit (Min.) *</label>
            <input
              required
              name="read_time"
              type="number"
              min="1"
              max="60"
              defaultValue="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Autor *</label>
          <input
            required
            name="author"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="KI Graz Redaktion"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kurzbeschreibung (Excerpt) *</label>
          <textarea
            required
            name="excerpt"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Ein prägnanter Teaser für den Artikel (2–3 Sätze)…"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Inhalt *</label>
          <textarea
            required
            name="content"
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono"
            placeholder="Vollständiger Artikel-Inhalt…"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Als Entwurf speichern
          </button>
          <Link
            href="/admin/blog"
            className="text-sm font-medium text-gray-600 px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Abbrechen
          </Link>
        </div>
      </form>
    </div>
  );
}
