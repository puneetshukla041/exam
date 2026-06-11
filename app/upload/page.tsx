export const dynamic = "force-dynamic";
import dynamicImport from "next/dynamic";
import LoadingPanel from "@/components/LoadingPanel";

const UploadWizard = dynamicImport(() => import("@/components/UploadWizard"), {
  loading: () => <LoadingPanel label="Opening upload workspace..." />,
});

export default function UploadPage() {
  return <UploadWizard />;
}
