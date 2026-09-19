import type { ReactNode } from "react";
import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard allowedRoles={["PATIENT"]}>
      <DashboardShell role="PATIENT">{children}</DashboardShell>
    </RoleGuard>
  );
}
