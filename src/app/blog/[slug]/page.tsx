import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/db";
import { mockBlogPosts } from "@/lib/mock-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts().catch(() => mockBlogPosts);
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Blog
        </Link>

        <article className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.read_time} Min. Lesezeit
            </span>
            <span>{new Date(post.published_at).toLocaleDateString("de-AT")}</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="prose prose-blue max-w-none text-gray-600">
            <p>
              Dieser Artikel wird in Kürze vollständig verfügbar sein. Melden Sie sich für unseren
              Newsletter an, um benachrichtigt zu werden.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
