import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DoctorReviewSheet from "./doctor-review-sheet";
import { useSuspenseGetAllDoctors } from "@/hooks";
import type { DoctorParams } from "@/types";

type Props = DoctorParams;

const statusVariant: Record<string, "secondary" | "default" | "destructive"> = {
  PENDING: "secondary",
  APPROVED: "default",
  REJECTED: "destructive",
};

const DoctorApprovalTable = (params: Props) => {
  const { data } = useSuspenseGetAllDoctors(params);

  const doctors = data?.data ?? [];

  return (
    <div className="overflow-hidden rounded-xl border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="py-3 pl-6">Name</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>License No.</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="pr-6 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="py-10 text-center text-muted-foreground"
              >
                No doctors found.
              </TableCell>
            </TableRow>
          ) : (
            doctors.map((doctor) => (
              <TableRow key={doctor.id} className="hover:bg-muted/30">
                <TableCell className="py-4 pl-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">{doctor.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {doctor.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell className="text-muted-foreground">
                  {doctor.licenseNumber}
                </TableCell>
                <TableCell>{doctor.experienceYears} yrs</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[doctor.verificationStatus]}>
                    {doctor.verificationStatus}
                  </Badge>
                </TableCell>
                <TableCell className="pr-6 text-right">
                  <DoctorReviewSheet doctor={doctor} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorApprovalTable;
