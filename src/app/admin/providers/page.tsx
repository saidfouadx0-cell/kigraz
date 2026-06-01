import { createClient } from "@/lib/supabase/server";
import { CheckCircle, Star } from "lucide-react";
import { toggleVerified, toggleFeatured } from "./actions";

export const metadata = { title: "Admin – Anbieter | KI Graz" };

export default async function AdminProvidersPage() {
  const supabase = await createClient();
  const { data: providers } = await supabase
    .from("providers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Anbieter</h1>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Name</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Kategorien</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Verifiziert</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Featured</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Bewertung</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(providers ?? []).map((p: any) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="font-medium text-gray-900">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.email}</div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex flex-wrap gap-1">
                    {(p.categories ?? []).slice(0, 2).map((c: string) => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{c}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <form action={toggleVerified.bind(null, p.id, p.verified)}>
                    <button
                      type="submit"
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                        p.verified ? "bg-green-100 text-green-600 hover:bg-green-200" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                      title={p.verified ? "Verifizierung entfernen" : "Verifizieren"}
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3 text-center">
                  <form action={toggleFeatured.bind(null, p.id, p.featured)}>
                    <button
                      type="submit"
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                        p.featured ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                      title={p.featured ? "Von Featured entfernen" : "Featured setzen"}
                    >
                      <Star className="w-4 h-4" />
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {p.rating ? `${p.rating} ★` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {(providers ?? []).length === 0 && (
          <p className="text-center py-12 text-sm text-gray-400">Noch keine Anbieter.</p>
        )}
      </div>
    </div>
  );
}
