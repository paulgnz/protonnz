import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Page Not Found
        </h1>
        <p className="text-zinc-400 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
