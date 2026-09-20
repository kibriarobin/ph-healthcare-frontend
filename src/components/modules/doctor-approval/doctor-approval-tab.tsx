"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorApprovalTable from "./doctor-approval-table";
import { Suspense, useState } from "react";
import DoctorApprovalLoading from "./doctor-approval-loading";
import type { DoctorParams, DoctorVerificationStatus } from "@/types";

const verificationStatus: DoctorVerificationStatus[] = [
  "APPROVED",
  "PENDING",
  "REJECTED",
];

const DoctorApprovalTab = () => {
  const [tab, setTab] = useState<DoctorVerificationStatus | "all">("all");

  const queryParams: DoctorParams = {
    verificationStatus: tab === "all" ? undefined : tab,
    page: 1,
    limit: 10,
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">
          Doctor Applications
        </h1>
        <p className="text-sm text-muted-foreground">
          Review and manage doctor applications submitted to PH Healthcare.
        </p>
      </div>

      <Tabs
        value={tab}
        onValueChange={(value) =>
          setTab(value as DoctorVerificationStatus | "all")
        }
      >
        <TabsList className="h-10 gap-1 rounded-lg bg-muted p-1">
          <TabsTrigger value="all" className="rounded-md px-4">
            All
          </TabsTrigger>
          {verificationStatus.map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="rounded-md px-4 capitalize"
            >
              {status.toLowerCase()}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Suspense fallback={<DoctorApprovalLoading />}>
        <DoctorApprovalTable {...queryParams} />
      </Suspense>
    </div>
  );
};

export default DoctorApprovalTab;