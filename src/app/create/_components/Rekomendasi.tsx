import React, { useEffect, useState } from "react";
import axios from "axios";
import Prompt from "@/app/_data/Prompt";
import { Loader2Icon } from "lucide-react";

function RekomendasiComp({ formState, onHandleInputChange }: any) {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formState?.idea);
  useEffect(() => {
    generateLogoDesignIdea();
  }, []);

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      "{logoType}",
      formState?.design?.title
    )
      .replace("{logoTitle}", formState?.title)
      .replace("{logoDesc}", formState?.desc)
      .replace("{logoPrompt}", formState?.design?.prompt);

    // console.log(PROMPT);
    const result = await axios.post("/api/ai-design-ideas", {
      prompt: PROMPT,
    });

    console.log(result.data);
    !ideas && setIdeas(result?.data?.ideas);
    setLoading(false);
  };

  return (
    <div className="my-10">
      <div>
        <h2 className="font-bold text-3xl text-primary ">title</h2>
        <h2 className="mt-2 text-lg text-gray-600 ">deskripsi</h2>
      </div>
      <div className="flex items-center justify-center">
        {loading && <Loader2Icon className="animate-spin my-10" />}
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        {ideas &&
          ideas?.map((item, index) => (
            <h2
              key={index}
              onClick={() => {
                setSelectedOption(item);
                onHandleInputChange(item);
              }}
              className={`p-2 rounded-full border px-3 cursor-pointer
          hover:border-primary ${
            selectedOption == item && "border-primary text-primary"
          }`}
            >
              {item}
            </h2>
          ))}
        <h2
          onClick={() => {
            setSelectedOption("Let AI Select the best idea");
            onHandleInputChange("Let AI Select the best idea");
          }}
          className={`p-2 border rounded-tl-2xl rounded-br-2xl px-3 cursor-pointer
          hover:border-primary ${
            selectedOption == "Let AI Select the best idea" &&
            "border-primary text-primary"
          }`}
        >
          Let AI Select the best idea
        </h2>
      </div>
    </div>
  );
}

export default RekomendasiComp;
