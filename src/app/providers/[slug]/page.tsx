import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Star, Globe, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { getProviders, getProviderBySlug } from "@/lib/db";
import { mockProviders } from "@/lib/mock-data";
import QuoteForm from "./QuoteForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const providers = await getProviders().catch(() => mockProviders);
  return providers.map((p) => ({ slug: p.slug }));
}

export default async function ProviderPage({ params }: Props) {
  const { slug } = await params;
  const provider = await getProviderBySlug(slug);
  if (!provider) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/providers"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Übersicht
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-700 font-bold text-2xl flex-shrink-0">
                  {provider.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-gray-900">{provider.name}</h1>
                    {provider.verified && (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-gray-500">{provider.short_description}</p>
                  {provider.rating && (
                    <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{provider.rating}</span>
                      <span className="text-gray-400">({provider.review_count} Bewertungen)</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {provider.categories.map((cat) => (
                  <span key={cat} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {cat}
                  </span>
                ))}
              </div>

              <h2 className="font-semibold text-gray-900 mb-3">Über das Unternehmen</h2>
              <p className="text-gray-600 leading-relaxed">{provider.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {provider.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Kontakt</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a href={`mailto:${provider.email}`} className="hover:text-blue-600">
                    {provider.email}
                  </a>
                </div>
                {provider.phone && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${provider.phone}`} className="hover:text-blue-600">
                      {provider.phone}
                    </a>
                  </div>
                )}
                {provider.website && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a
                      href={provider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 truncate"
                    >
                      Website besuchen
                    </a>
                  </div>
                )}
                {provider.address && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    {provider.address}
                  </div>
                )}
              </div>
            </div>

            {/* Quote form */}
            <QuoteForm providerId={provider.id} providerName={provider.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
