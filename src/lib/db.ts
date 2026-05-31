import { createClient } from "@/lib/supabase/server";
import { Provider, BlogPost } from "@/types";

export async function getProviders(): Promise<Provider[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("providers")
    .select("*")
    .order("featured", { ascending: false })
    .order("rating", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function getProviderBySlug(slug: string): Promise<Provider | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("providers")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error) return null;
  return data;
}
