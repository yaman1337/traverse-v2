import { routes } from "@/constants/routes";
import { isLoggedIn } from "@/utils/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  if (isLoggedIn()) {
    return redirect(routes.DASHBOARD);
  }

  return <>{children}</>;
}
