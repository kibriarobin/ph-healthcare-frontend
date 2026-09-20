"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { IDoctorData } from "@/types";
import { Download, FileText } from "lucide-react";

const statusVariant: Record<string, "secondary" | "default" | "destructive"> = {
  PENDING: "secondary",
  APPROVED: "default",
  REJECTED: "destructive",
};

interface DoctorFile {
  url: string;
  publicId?: string;
  name?: string;
}

type FileLike = string | DoctorFile | null | undefined;

const DoctorReviewSheet = ({ doctor }: { doctor: IDoctorData }) => {
  const getUrl = (file: FileLike): string => {
    if (!file) return "#";
    if (typeof file === "string") return file;
    return file.url || "#";
  };

  const resumeUrl = getUrl(doctor.resume);

  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="outline" size="sm" />}
        nativeButton={true}
      >
        Review
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{doctor.name}</SheetTitle>
          <SheetDescription>
            Review the application details before approving or rejecting.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-5 px-4">
          <div className="grid grid-cols-2 gap-4 rounded-lg border bg-muted/30 p-4 text-sm">
            <div>
              <p className="text-muted-foreground">Specialization</p>
              <p className="font-medium">{doctor.specialization}</p>
            </div>
            <div>
              <p className="text-muted-foreground">License Number</p>
              <p className="font-medium">{doctor.licenseNumber}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Experience</p>
              <p className="font-medium">{doctor.experienceYears} Years</p>
            </div>
            <div>
              <p className="text-muted-foreground">Consultation Fee</p>
              <p className="font-medium">৳{doctor.consultationFee || 0}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Phone</p>
              <p className="font-medium">{doctor.contactNumber || "N/A"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <Badge
                variant={
                  statusVariant[doctor.verificationStatus] || "secondary"
                }
              >
                {doctor.verificationStatus}
              </Badge>
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium text-muted-foreground">
              Bio
            </p>
            <p className="text-sm leading-relaxed">
              {doctor?.bio || "No bio available."}
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Documents
            </p>
            <div className="flex flex-col gap-2">
              {doctor.resume && (
                <div className="flex items-center justify-between gap-2 rounded-lg border bg-muted/50 px-3 py-2.5 text-sm">
                  <div className="flex min-w-0 items-center gap-2">
                    <FileText className="size-4 shrink-0 text-primary" />
                    <span className="truncate font-medium">Resume.pdf</span>
                  </div>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                    title="Download Resume"
                  >
                    <Download className="size-4" />
                  </a>
                </div>
              )}

              {Array.isArray(doctor.additionalFiles) &&
                (doctor.additionalFiles as FileLike[]).map((file, index) => {
                  const fileUrl = getUrl(file);
                  const fileName =
                    typeof file === "object" && file?.name
                      ? file.name
                      : `Document-${index + 1}.pdf`;

                  return (
                    <div
                      key={fileUrl !== "#" ? fileUrl : `file-${index}`}
                      className="flex items-center justify-between gap-2 rounded-lg border bg-muted/50 px-3 py-2.5 text-sm"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <FileText className="size-4 shrink-0 text-primary" />
                        <span className="truncate font-medium">{fileName}</span>
                      </div>
                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                        title="Download Document"
                      >
                        <Download className="size-4" />
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <SheetFooter className="flex-row gap-2 border-t px-4 pt-4">
          <Button variant="destructive" className="flex-1">
            Reject
          </Button>
          <Button className="flex-1">Approve</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DoctorReviewSheet;
