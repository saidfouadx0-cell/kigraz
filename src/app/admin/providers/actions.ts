"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.app_metadata?.role !== "admin") throw new Error("Unauthorized");
  return supabase;
}

export async function toggleVerified(id: string, verified: boolean) {
  const supabase = await requireAdmin();
  await supabase.from("providers").update({ verified: !verified }).eq("id", id);
  revalidatePath("/admin/providers");
  revalidatePath("/providers");
}

export async function toggleFeatured(id: string, featured: boolean) {
  const supabase = await requireAdmin();
  await supabase.from("providers").update({ featured: !featured }).eq("id", id);
  revalidatePath("/admin/providers");
  revalidatePath("/");
}

export async function deleteProvider(id: string) {
  const supabase = await requireAdmin();
  await supabase.from("providers").delete().eq("id", id);
  revalidatePath("/admin/providers");
  revalidatePath("/providers");
}
