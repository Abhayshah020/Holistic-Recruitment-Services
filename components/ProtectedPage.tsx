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
    // Only protect recruitment-forms routes
    const isRecruitmentRoute = pathname.startsWith("/recruitment-forms");
    if (!isRecruitmentRoute) return;

    const userRaw = sessionStorage.getItem("user");
    if (!userRaw) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(userRaw);
    const role = user?.role;

    // Routes allowed for both admin & employee
    const employeeAllowedRoutes = [
      "/recruitment-forms",
      "/recruitment-forms/view",
    ];

    const isEmployeeAllowed =
      employeeAllowedRoutes.some(route =>
        pathname === route || pathname.startsWith(`${route}/`)
      );

    // Admin can access everything
    if (role === "admin") return;

    // Employee can access only allowed routes
    if (role === "employee" && isEmployeeAllowed) return;

    // Otherwise → unauthorized
    router.replace("/unauthorized-page");
  }, [pathname, router]);

  return <>{children}</>;
}
