"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.app_metadata?.role !== "admin") throw new Error("Unauthorized");
  return supabase;
}

export async function togglePublished(id: string, published: boolean) {
  const supabase = await requireAdmin();
  const update: Record<string, unknown> = { published: !published };
  if (!published) update.published_at = new Date().toISOString();
  await supabase.from("blog_posts").update(update).eq("id", id);
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}

export async function deletePost(id: string) {
  const supabase = await requireAdmin();
  await supabase.from("blog_posts").delete().eq("id", id);
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}

export async function createPost(formData: FormData) {
  const supabase = await requireAdmin();
  const title = formData.get("title") as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const { error } = await supabase.from("blog_posts").insert({
    title,
    slug,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    author: formData.get("author") as string,
    category: formData.get("category") as string,
    read_time: parseInt(formData.get("read_time") as string) || 5,
    published: false,
    published_at: new Date().toISOString(),
  });
  if (error) throw error;
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}
