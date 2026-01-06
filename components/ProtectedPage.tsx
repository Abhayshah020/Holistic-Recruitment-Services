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
    // 🔒 Protected routes
    const isProtectedRoute =
      pathname.startsWith("/recruitment-forms")

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
