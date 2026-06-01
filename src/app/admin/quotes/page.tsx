import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Admin – Angebotsanfragen | KI Graz" };

const statusStyle: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  read: "bg-gray-100 text-gray-600",
  closed: "bg-green-100 text-green-700",
};

export default async function AdminQuotesPage() {
  const supabase = await createClient();
  const { data: quotes } = await supabase
    .from("quote_requests")
    .select("*, providers(name)")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Angebotsanfragen</h1>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Anfragender</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Anbieter</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Nachricht</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Status</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Datum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(quotes ?? []).map((q: any) => (
              <tr key={q.id} className="hover:bg-gray-50 align-top">
                <td className="px-5 py-4">
                  <div className="font-medium text-gray-900">{q.name}</div>
                  <a href={`mailto:${q.email}`} className="text-xs text-blue-600 hover:underline">{q.email}</a>
                  {q.company && <div className="text-xs text-gray-400">{q.company}</div>}
                </td>
                <td className="px-5 py-4 text-gray-600">
                  {(q.providers as any)?.name ?? "—"}
                </td>
                <td className="px-5 py-4 text-gray-600 max-w-xs">
                  <p className="line-clamp-2">{q.message}</p>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyle[q.status] ?? statusStyle.new}`}>
                    {q.status === "new" ? "Neu" : q.status === "read" ? "Gelesen" : "Erledigt"}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">
                  {new Date(q.created_at).toLocaleDateString("de-AT")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {(quotes ?? []).length === 0 && (
          <p className="text-center py-12 text-sm text-gray-400">Noch keine Anfragen.</p>
        )}
      </div>
    </div>
  );
}
