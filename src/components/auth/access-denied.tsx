import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessDenied = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <ShieldAlert className="h-8 w-8 text-destructive" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Access Denied</h1>
        <p className="max-w-sm text-balance text-sm text-muted-foreground">
          You don&apos;t have permission to view this page. If you think this is
          a mistake, please contact support.
        </p>
      </div>
      <Button render={<Link href="/">Go back home</Link>} nativeButton={false}>
        Go back home
      </Button>
    </div>
  );
};

export default AccessDenied;
