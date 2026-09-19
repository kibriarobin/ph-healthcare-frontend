"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/svg/Logo";
import type { UserRole } from "@/types";
import { adminRoutes, doctorRoutes, patientRoutes } from "@/routes";
import type { NavRoutes } from "@/types/sidebar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarRoutes: Partial<Record<UserRole, NavRoutes>> = {
  SUPER_ADMIN: adminRoutes,
  ADMIN: adminRoutes,
  DOCTOR: doctorRoutes,
  PATIENT: patientRoutes,
};

export function DashboardSidebar({ role }: { role: UserRole }) {
  const pathname = usePathname();

  const routes = sidebarRoutes[role] ?? [];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span>PH Healthcare</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {routes.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={<Link href={item.url}></Link>}
                      isActive={pathname === item.url}
                    >
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
