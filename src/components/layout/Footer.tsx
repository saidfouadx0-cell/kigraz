import Link from "next/link";
import { Brain, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/providers", label: "KI-Anbieter" },
    { href: "/funding", label: "Förderungen" },
    { href: "/blog", label: "Blog" },
    { href: "/submit-provider", label: "Anbieter werden" },
  ],
  Unternehmen: [
    { href: "/about", label: "Über uns" },
    { href: "/contact", label: "Kontakt" },
    { href: "/imprint", label: "Impressum" },
    { href: "/privacy", label: "Datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              KI Graz
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Die führende Plattform für KI-Lösungen in Graz und der Steiermark. Wir verbinden
              Unternehmen mit verifizierten KI-Experten und helfen bei der Förderbeantragung.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Graz, Steiermark, Österreich
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                hallo@kigraz.com
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-4">{section}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} KI Graz. Alle Rechte vorbehalten.</p>
          <p>Made with ❤️ in Graz</p>
        </div>
      </div>
    </footer>
  );
}
