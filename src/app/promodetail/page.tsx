"use client";

import PromoDetailContent from "@/components/Promo/PromoDetailContent";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center bg-primary-foreground">
          <div className="w-16 h-16 border-2 border-t-2 border-t-red-500 rounded-full border-dotted animate-spin"></div>
        </div>
      }
    >
      <PromoDetailContent />
    </Suspense>
  );
}
