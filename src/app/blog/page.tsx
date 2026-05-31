import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/db";
import { mockBlogPosts } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Blog – KI-Tipps & Neuigkeiten für Grazer Unternehmen",
  description:
    "Praxis-Tipps, Guides und aktuelle Neuigkeiten rund um Künstliche Intelligenz für österreichische KMUs. KI-Förderungen, Anwendungsfälle und mehr.",
  alternates: { canonical: "https://kigraz.com/blog" },
  openGraph: {
    title: "KI Graz Blog – Praxis-Tipps für KMUs",
    description: "Aktuelle Artikel zu KI-Förderungen, Anwendungsfällen und Digitalisierung für Grazer Unternehmen.",
    type: "website",
    url: "https://kigraz.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts().catch(() => mockBlogPosts);
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-500">Praxis-Tipps, Guides und Neuigkeiten rund um KI in Österreich</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all h-full flex flex-col">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-4 self-start">
                  {post.category}
                </span>
                <h2 className="font-bold text-gray-900 mb-3 leading-snug flex-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    {post.read_time} Min.
                  </div>
                  <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                    Lesen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
