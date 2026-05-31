import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogOut, User, Building2, Mail } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const meta = user.user_metadata;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Willkommen, {meta?.full_name ?? "Benutzer"}!
            </h1>
            <p className="text-gray-500 text-sm mt-1">Ihr KI Graz Dashboard</p>
          </div>
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Abmelden
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Ihr Profil</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-600">
                <User className="w-4 h-4 text-gray-400" />
                {meta?.full_name ?? "—"}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                {user.email}
              </div>
              {meta?.company && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  {meta.company}
                </div>
              )}
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  meta?.role === "provider"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-blue-100 text-blue-700"
                }`}>
                  {meta?.role === "provider" ? "KI-Anbieter" : "Unternehmen"}
                </span>
                {user.email_confirmed_at && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                    Verifiziert
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Schnellzugriff</h2>
            <div className="space-y-2">
              {[
                { href: "/providers", label: "KI-Anbieter durchsuchen" },
                { href: "/funding", label: "Förderungen prüfen" },
                { href: "/blog", label: "Blog lesen" },
                { href: "/contact", label: "Support kontaktieren" },
                ...(meta?.role === "provider" ? [{ href: "/submit-provider", label: "Anbieter-Profil bearbeiten" }] : []),
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-600 hover:text-blue-600 py-2 border-b border-gray-100 last:border-0 transition-colors"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
