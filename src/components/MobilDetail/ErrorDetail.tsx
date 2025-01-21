import { Button } from "@/components/ui/button";

interface ErrorScreenProps {
  onReload: () => void;
}

export default function ErrorScreen({ onReload }: ErrorScreenProps) {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-center text-red-500 mb-4">
        Error loading details. Please try again later.
      </p>
      <Button onClick={onReload}>Refresh Page</Button>
    </div>
  );
}
