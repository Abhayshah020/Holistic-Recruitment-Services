"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedPage({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Public route (explicit allow)
    if (pathname === "/recruitment-forms/agent-referral/create") {
      return;
    }

    // 🔒 Protected routes
    const isProtectedRoute =
      pathname === "/recruitment-forms/create" ||
      pathname.startsWith("/recruitment-forms/update") ||
      pathname.startsWith("/recruitment-forms/agent-referral");

    if (!isProtectedRoute) return;

    const userRaw = sessionStorage.getItem("user");

    if (!userRaw) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(userRaw);

    if (user.role !== "admin") {
      router.replace("/unauthorized-page");
    }
  }, [pathname, router]);

  return <>{children}</>;
}
