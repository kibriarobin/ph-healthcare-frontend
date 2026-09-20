import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const skeletonRows = ["row-1", "row-2", "row-3", "row-4", "row-5"];

const DoctorApprovalLoading = () => {
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
          {skeletonRows.map((rowId) => (
            <TableRow key={rowId}>
              <TableCell className="py-4 pl-6">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-12" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-16 rounded-full" />
              </TableCell>
              <TableCell className="pr-6 text-right">
                <Skeleton className="ml-auto h-8 w-20 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorApprovalLoading;
