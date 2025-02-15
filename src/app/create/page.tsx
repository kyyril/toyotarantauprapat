"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import BudgetComp from "./_components/Budget";
import KategoriComp from "./_components/Kategori";

function createPage() {
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
    <div className="mt-24 p-10 rounded-xl max-w-5xl w-full mx-auto 2xl:mx-72 h-screen">
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
      ) : null}

      <div className="flex justify-between items-center mt-8">
        {step != 1 && (
          <Button variant={"outline"} onClick={() => setStep(step - 1)}>
            <ArrowLeftIcon />
            Previos
          </Button>
        )}

        <Button onClick={() => setStep(step + 1)}>
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
export default createPage;
