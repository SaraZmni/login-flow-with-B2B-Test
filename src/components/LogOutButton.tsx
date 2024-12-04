"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <button
      onClick={handleLogOut}
      className="rounded bg-red-500 p-2 text-white"
    >
      Log Out
    </button>
  );
}
