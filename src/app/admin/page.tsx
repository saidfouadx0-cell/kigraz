import { createClient } from "@/lib/supabase/server";
import { Building2, Users2, MessageSquare, FileText, Mail } from "lucide-react";

export const metadata = { title: "Admin – Übersicht | KI Graz" };

async function getStats() {
  const supabase = await createClient();
  const [providers, applications, quotes, posts, messages] = await Promise.all([
    supabase.from("providers").select("id", { count: "exact", head: true }),
    supabase.from("provider_applications").select("id", { count: "exact", head: true }).eq("status", "pending"),
    supabase.from("quote_requests").select("id", { count: "exact", head: true }),
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
    supabase.from("contact_messages").select("id", { count: "exact", head: true }),
  ]);
  return {
    providers: providers.count ?? 0,
    pendingApplications: applications.count ?? 0,
    quotes: quotes.count ?? 0,
    posts: posts.count ?? 0,
    messages: messages.count ?? 0,
  };
}

async function getRecentActivity() {
  const supabase = await createClient();
  const [quotes, applications] = await Promise.all([
    supabase.from("quote_requests").select("id, name, company, created_at").order("created_at", { ascending: false }).limit(5),
    supabase.from("provider_applications").select("id, company_name, status, created_at").order("created_at", { ascending: false }).limit(5),
  ]);
  return { quotes: quotes.data ?? [], applications: applications.data ?? [] };
}

export default async function AdminPage() {
  const [stats, activity] = await Promise.all([getStats(), getRecentActivity()]);

  const cards = [
    { label: "Anbieter", value: stats.providers, icon: Building2, color: "bg-blue-500" },
    { label: "Offene Bewerbungen", value: stats.pendingApplications, icon: Users2, color: "bg-amber-500" },
    { label: "Angebotsanfragen", value: stats.quotes, icon: MessageSquare, color: "bg-green-500" },
    { label: "Blog-Artikel", value: stats.posts, icon: FileText, color: "bg-purple-500" },
    { label: "Kontaktanfragen", value: stats.messages, icon: Mail, color: "bg-rose-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Übersicht</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.color}`}>
              <c.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{c.value}</div>
              <div className="text-xs text-gray-500">{c.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent quotes */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Neueste Anfragen</h2>
          {activity.quotes.length === 0 ? (
            <p className="text-sm text-gray-400">Noch keine Anfragen.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {activity.quotes.map((q: any) => (
                <li key={q.id} className="py-3 text-sm">
                  <span className="font-medium text-gray-800">{q.name}</span>
                  {q.company && <span className="text-gray-400"> · {q.company}</span>}
                  <span className="block text-xs text-gray-400 mt-0.5">
                    {new Date(q.created_at).toLocaleDateString("de-AT")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent applications */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Neueste Bewerbungen</h2>
          {activity.applications.length === 0 ? (
            <p className="text-sm text-gray-400">Noch keine Bewerbungen.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {activity.applications.map((a: any) => (
                <li key={a.id} className="py-3 text-sm flex items-center justify-between">
                  <span className="font-medium text-gray-800">{a.company_name}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    a.status === "pending" ? "bg-amber-100 text-amber-700"
                    : a.status === "approved" ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}>
                    {a.status === "pending" ? "Offen" : a.status === "approved" ? "Genehmigt" : "Abgelehnt"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
