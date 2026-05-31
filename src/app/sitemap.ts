import type { MetadataRoute } from "next";
import { getBlogPosts, getProviders } from "@/lib/db";
import { mockBlogPosts, mockProviders } from "@/lib/mock-data";

const BASE = "https://kigraz.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [providers, posts] = await Promise.all([
    getProviders().catch(() => mockProviders),
    getBlogPosts().catch(() => mockBlogPosts),
  ]);

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/providers`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/funding`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/submit-provider`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...providers.map((p) => ({
      url: `${BASE}/providers/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.published_at),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
