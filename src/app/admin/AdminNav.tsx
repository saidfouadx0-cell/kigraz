"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users2, FileText, MessageSquare, Building2, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Übersicht", icon: LayoutDashboard, exact: true },
  { href: "/admin/providers", label: "Anbieter", icon: Building2 },
  { href: "/admin/applications", label: "Bewerbungen", icon: Users2 },
  { href: "/admin/quotes", label: "Anfragen", icon: MessageSquare },
  { href: "/admin/blog", label: "Blog", icon: FileText },
];

export default function AdminNav() {
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive(item.href, item.exact)
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-2 py-4 border-t border-gray-700 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          ← Website
        </Link>
        <form action="/auth/signout" method="POST">
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Abmelden
          </button>
        </form>
      </div>
    </>
  );
}
