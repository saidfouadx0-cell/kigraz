import { createClient } from "@/lib/supabase/server";
import { updateApplicationStatus } from "./actions";

export const metadata = { title: "Admin – Bewerbungen | KI Graz" };

const statusLabel: Record<string, string> = {
  pending: "Offen",
  approved: "Genehmigt",
  rejected: "Abgelehnt",
};
const statusStyle: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default async function AdminApplicationsPage() {
  const supabase = await createClient();
  const { data: applications } = await supabase
    .from("provider_applications")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Anbieter-Bewerbungen</h1>

      <div className="space-y-4">
        {(applications ?? []).length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-sm text-gray-400">
            Noch keine Bewerbungen eingegangen.
          </div>
        )}
        {(applications ?? []).map((app: any) => (
          <div key={app.id} className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-semibold text-gray-900">{app.company_name}</h2>
                <p className="text-sm text-gray-500">{app.contact_name} · {app.email}</p>
                {app.phone && <p className="text-sm text-gray-500">{app.phone}</p>}
                {app.website && (
                  <a href={app.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                    {app.website}
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[app.status] ?? statusStyle.pending}`}>
                  {statusLabel[app.status] ?? "Offen"}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(app.created_at).toLocaleDateString("de-AT")}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {(app.categories ?? []).map((c: string) => (
                <span key={c} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{c}</span>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">{app.description}</p>

            {app.status === "pending" && (
              <div className="flex gap-3">
                <form action={updateApplicationStatus.bind(null, app.id, "approved")}>
                  <button
                    type="submit"
                    className="text-sm font-semibold bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition-colors"
                  >
                    Genehmigen
                  </button>
                </form>
                <form action={updateApplicationStatus.bind(null, app.id, "rejected")}>
                  <button
                    type="submit"
                    className="text-sm font-semibold border border-red-300 text-red-600 px-5 py-2 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    Ablehnen
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
