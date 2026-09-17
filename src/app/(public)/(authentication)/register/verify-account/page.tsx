import VerifyAccountForm from "@/components/form/verify-account-form";
import { Suspense } from "react";

export default function VerifyAccountPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <div className="w-full max-w-sm">
        <Suspense fallback={<p>Loading....</p>}>
          <VerifyAccountForm />
        </Suspense>
      </div>
    </div>
  );
}
