import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminNav from "./AdminNav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 text-white flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="px-4 py-5 border-b border-gray-700">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Admin</p>
          <p className="text-sm font-bold text-white mt-0.5">KI Graz</p>
        </div>
        <AdminNav />
      </aside>

      {/* Main */}
      <div className="flex-1 ml-56">
        <div className="max-w-6xl mx-auto px-6 py-8">{children}</div>
      </div>
    </div>
  );
}
