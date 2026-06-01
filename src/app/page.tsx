import Link from "next/link";
import { CheckCircle, Euro, Users, Zap, ArrowRight } from "lucide-react";
import ProviderCard from "@/components/providers/ProviderCard";
import { getProviders, getBlogPosts } from "@/lib/db";
import { mockProviders, mockBlogPosts } from "@/lib/mock-data";
import { createClient } from "@/lib/supabase/server";

async function getStats() {
  try {
    const supabase = await createClient();
    const { count } = await supabase
      .from("providers")
      .select("id", { count: "exact", head: true })
      .eq("verified", true);
    return { verifiedProviders: count ?? 6 };
  } catch {
    return { verifiedProviders: 6 };
  }
}

const features = [
  {
    icon: CheckCircle,
    title: "Verifizierte Anbieter",
    description: "Alle KI-Anbieter auf unserer Plattform sind geprüft und zertifiziert.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Euro,
    title: "Bis zu 75% Förderung",
    description: "Wir helfen Ihnen, staatliche Fördermittel für Ihre KI-Projekte zu beantragen.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Users,
    title: "Lokale Expertise",
    description: "Alle Anbieter sind in Graz und der Steiermark ansässig — kurze Wege, lokales Verständnis.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Zap,
    title: "Schnelle Vermittlung",
    description: "In wenigen Klicks zum passenden KI-Partner — kostenlos und unverbindlich.",
    color: "text-orange-600 bg-orange-50",
  },
];

export default async function HomePage() {
  const [providers, posts, stats] = await Promise.all([
    getProviders().catch(() => mockProviders),
    getBlogPosts().catch(() => mockBlogPosts),
    getStats(),
  ]);
  const featuredProviders = providers.filter((p) => p.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 3);
  const dynamicStats = [
    { value: `${stats.verifiedProviders}+`, label: "Verifizierte Anbieter" },
    { value: "75%", label: "Max. Förderquote" },
    { value: "100+", label: "Betreute KMUs" },
    { value: "Gratis", label: "Nutzung der Plattform" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-blue-300 bg-blue-800/50 px-3 py-1 rounded-full mb-6">
              🇦🇹 Graz &amp; Steiermark
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              KI-Lösungen für <span className="text-blue-300">Ihr Unternehmen</span> in Graz
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              Finden Sie verifizierte KI-Anbieter aus der Steiermark, profitieren Sie von bis zu
              75% staatlicher Förderung und starten Sie Ihre KI-Transformation noch heute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/providers"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                KI-Anbieter entdecken
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/funding"
                className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800/50 transition-colors"
              >
                Förderung berechnen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dynamicStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum KI Graz?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Wir machen KI für Grazer Unternehmen einfach, sicher und leistbar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Empfohlene Anbieter</h2>
              <p className="text-gray-500">Verifizierte KI-Experten aus Graz und der Steiermark</p>
            </div>
            <Link
              href="/providers"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Alle anzeigen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/providers"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Alle Anbieter anzeigen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Funding CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bis zu 75% Ihrer KI-Investition gefördert</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-lg">
            Österreichische KMUs können staatliche Fördermittel für KI-Projekte beantragen. Wir
            helfen Ihnen kostenlos dabei.
          </p>
          <Link
            href="/funding"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Förderung jetzt prüfen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Aktuelles aus dem Blog</h2>
              <p className="text-gray-500">Praxis-Tipps und Neuigkeiten rund um KI für Ihr Unternehmen</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Alle Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all h-full">
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.read_time} Min. Lesezeit</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bereit, KI in Ihrem Unternehmen einzusetzen?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Registrieren Sie sich kostenlos und finden Sie noch heute den passenden KI-Anbieter für
            Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Kostenlos registrieren
            </Link>
            <Link
              href="/providers"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Anbieter durchsuchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
