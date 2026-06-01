"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.app_metadata?.role !== "admin") throw new Error("Unauthorized");
  return supabase;
}

export async function updateApplicationStatus(id: string, status: "approved" | "rejected") {
  const supabase = await requireAdmin();
  await supabase.from("provider_applications").update({ status }).eq("id", id);
  revalidatePath("/admin/applications");
  revalidatePath("/admin");
}
