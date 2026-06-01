import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { togglePublished, deletePost } from "./actions";
import { Plus } from "lucide-react";

export const metadata = { title: "Admin – Blog | KI Graz" };

export default async function AdminBlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, title, author, category, published, published_at, read_time")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Blog-Artikel</h1>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Neuer Artikel
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Titel</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Kategorie</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Status</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600">Datum</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(posts ?? []).map((p: any) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="font-medium text-gray-900">{p.title}</div>
                  <div className="text-xs text-gray-400">{p.author} · {p.read_time} Min.</div>
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">{p.category}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <form action={togglePublished.bind(null, p.id, p.published)}>
                    <button
                      type="submit"
                      className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                        p.published
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {p.published ? "Veröffentlicht" : "Entwurf"}
                    </button>
                  </form>
                </td>
                <td className="px-5 py-3 text-gray-400 text-xs">
                  {new Date(p.published_at).toLocaleDateString("de-AT")}
                </td>
                <td className="px-4 py-3 text-right">
                  <form action={deletePost.bind(null, p.id)}>
                    <button
                      type="submit"
                      className="text-xs text-red-500 hover:text-red-700 transition-colors"
                      onClick={(e) => { if (!confirm("Artikel wirklich löschen?")) e.preventDefault(); }}
                    >
                      Löschen
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {(posts ?? []).length === 0 && (
          <p className="text-center py-12 text-sm text-gray-400">Noch keine Artikel.</p>
        )}
      </div>
    </div>
  );
}
