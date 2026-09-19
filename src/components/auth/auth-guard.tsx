"use client";

import { useEffect, type ReactNode } from "react";
import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import AuthLoading from "./auth-loading";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data, isPending, isError } = useGetMe();

  const user = data?.data;

  useEffect(() => {
    if (!isPending && (isError || !user)) {
      router.push("/login");
    }
  }, [isPending, isError, user, router]);

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return null;
  }

  return <div>{children}</div>;
};

export default AuthGuard;
