"use client";
import Budget from "@/app/_data/Budget";
import React, { useState } from "react";

function BudgetComp({ onHandleInputChange, formState }: any) {
  const [selectedOption, setSelectedOption] = useState(formState?.budget);
  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-red-500 ">
          Budget (Kisaran Harga)
        </h2>
        <h2 className="mt-2 text-lg text-gray-500 ">
          Berapa rentang harga yang diinginkan?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {Budget.map((bu, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer border hover:opacity-50 ${
              selectedOption == bu.budget &&
              "border-2 border-primary rounded-sm p-2"
            }`}
            onClick={() => {
              setSelectedOption(bu.budget);
              onHandleInputChange(bu);
            }}
          >
            <p className="text-center text-sm font-semibold">{bu.budget}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetComp;
