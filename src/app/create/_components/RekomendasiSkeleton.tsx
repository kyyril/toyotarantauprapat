import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SkeletonRekomendasi() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="overflow-hidden shadow-lg p-2">
        <div className="relative aspect-video">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="p-4 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <Skeleton className="h-4 w-full" />
          <hr />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button variant="outline" disabled className="flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Skeleton className="h-4 w-16" />
        <Button variant="outline" disabled className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
