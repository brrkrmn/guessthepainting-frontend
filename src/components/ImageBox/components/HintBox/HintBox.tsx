"use client";

import { useGameContext } from "@/context/gameProvider";

const HintBox = ({ hints }: { hints: string[] }) => {
  const { displayedStep } = useGameContext();
  return (
    <div className="absolute bottom-0 left-0 rounded-b-lg rounded-r-lg border-2 border-[#aaaaaa] bg-[#aaaaaa] px-2 ">
      {displayedStep === 3
        ? hints[0]
        : displayedStep === 4
          ? hints[1]
          : displayedStep === 5 && hints[2]}
    </div>
  );
};

export default HintBox;
