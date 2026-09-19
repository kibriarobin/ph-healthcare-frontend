"use client";

import { useEffect, type ReactNode } from "react";
import { useGetMe } from "@/hooks";
import AuthLoading from "@/components/auth/auth-loading";
import type { UserRole } from "@/types";
import AccessDenied from "./access-denied";

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: UserRole[];
}

const RoleGuard = ({ children, allowedRoles }: RoleGuardProps) => {
  const { data, isPending } = useGetMe();
  const user = data?.data;

  const isAuthorized = !!user && allowedRoles.includes(user.role);

  useEffect(() => {
    if (!isPending && !isAuthorized) {
    }
  }, [isPending, isAuthorized]);

  if (isPending) {
    return <AuthLoading />;
  }

  if (!isAuthorized) {
    return <AccessDenied />;
  }

  return <>{children}</>;
};

export default RoleGuard;
