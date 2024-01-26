import { routes } from "@/constants/routes";
import { isLoggedIn } from "@/utils/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default function ProtectedRouteLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!isLoggedIn()) return redirect(routes.LOGIN);

  return <>{children}</>;
}
