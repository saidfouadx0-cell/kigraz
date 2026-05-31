import Link from "next/link";
import { Star, CheckCircle, ExternalLink } from "lucide-react";
import { Provider } from "@/types";
import { cn } from "@/lib/utils";

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link href={`/providers/${provider.slug}`}>
      <div
        className={cn(
          "group bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200",
          provider.featured && "ring-2 ring-blue-100"
        )}
      >
        {provider.featured && (
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-3">
            Empfohlen
          </span>
        )}

        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-blue-700 font-bold text-lg flex-shrink-0">
            {provider.name[0]}
          </div>
          {provider.verified && (
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          )}
        </div>

        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
          {provider.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{provider.short_description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {provider.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {cat}
            </span>
          ))}
          {provider.categories.length > 2 && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
              +{provider.categories.length - 2}
            </span>
          )}
        </div>

        {provider.rating && (
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{provider.rating}</span>
            <span className="text-gray-400">({provider.review_count} Bewertungen)</span>
          </div>
        )}
      </div>
    </Link>
  );
}
