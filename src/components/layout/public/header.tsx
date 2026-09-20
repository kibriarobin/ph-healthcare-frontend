"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/svg/Logo";
import { useGetMe, useLogout } from "@/hooks";
import { toast } from "@/components/ui/toast";
import { useQueryClient } from "@tanstack/react-query";
import type { UserRole } from "@/types";

export default function Header() {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about-us" },
    { name: "Apply as Doctor", url: "/apply" },
  ];

  const dashboardRoutes: Record<UserRole, string> = {
    SUPER_ADMIN: "/admin",
    ADMIN: "/admin",
    DOCTOR: "/doctor",
    PATIENT: "/patient",
  };

  const { data, isLoading } = useGetMe();
  const { mutate: logout } = useLogout();
  const queryClient = useQueryClient();

  const role = !!data?.data && data?.data.role;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Logged out successfully",
          description: "See you soon!",
          type: "success",
        });
        queryClient.removeQueries({
          queryKey: ["user"],
        });
      },
      onError: (err) => {
        toast.add({
          title: "Logout failed",
          description: err.message || "Something went wrong. Please try again.",
          type: "error",
        });
      },
    });
  };

  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
          <span>PH Healthcare</span>
        </div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}

          {
            role && <Link href={dashboardRoutes[role]}>Dashboard</Link>
          }
        </nav>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login">Login</Link>}
              nativeButton={false}
            >
              login
            </Button>
          )}

          {!isLoading && data && (
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
