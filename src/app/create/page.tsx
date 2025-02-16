"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import BudgetComp from "./_components/Budget";
import KategoriComp from "./_components/Kategori";
import KebutuhanUtamaComp from "./_components/KebutuhanUtamaComp";
import LokasiDomisili from "./_components/LokasiDomisili";
import PenggunaanMobilComp from "./_components/PenggunaanMobil";
import RekomendasiComp from "./_components/Rekomendasi";

function CreatePage() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<any>();

  const onHandleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formState);
  };

  return (
    <div className="p-10 rounded-xl max-w-5xl justify-center items-center w-full mx-auto h-screen mb-24">
      {step == 1 ? (
        <BudgetComp
          onHandleInputChange={(v: any) => onHandleChange("budget", v)}
          formState={formState}
        />
      ) : step == 2 ? (
        <KategoriComp
          onHandleInputChange={(v: any) => onHandleChange("kategori", v)}
          formState={formState}
        />
      ) : step == 3 ? (
        <PenggunaanMobilComp
          onHandleInputChange={(v: any) => onHandleChange("penggunaan", v)}
          formState={formState}
        />
      ) : step == 4 ? (
        <KebutuhanUtamaComp
          onHandleInputChange={(v: any) => onHandleChange("kebutuhan", v)}
          formState={formState}
        />
      ) : step == 5 ? (
        <LokasiDomisili
          onHandleInputChange={(v: any) => onHandleChange("lokasi", v)}
          formState={formState}
        />
      ) : step == 6 ? (
        <RekomendasiComp formState={formState} />
      ) : null}

      <div className="flex justify-between items-center mt-8 ">
        {step != 1 && (
          <Button variant={"outline"} onClick={() => setStep(step - 1)}>
            <ArrowLeftIcon />
            Previos
          </Button>
        )}
        <Button disabled={step >= 6} onClick={() => setStep(step + 1)}>
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
export default CreatePage;
