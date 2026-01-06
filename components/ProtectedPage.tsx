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
    const isProtectedRoute =
      pathname === "/recruitment-forms/create" ||
      pathname.startsWith("/recruitment-forms/update");

    if (!isProtectedRoute) return;

    const userRaw = sessionStorage.getItem("user");

    if (!userRaw) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(userRaw);

    if (user.role !== "admin") {
      router.replace("/unauthorized-page");
      return;
    }
  }, [pathname, router]);

  return <>{children}</>;
}
