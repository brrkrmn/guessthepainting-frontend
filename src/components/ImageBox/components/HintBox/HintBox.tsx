"use client";

import { useGameContext } from "@/context/gameProvider";

const HintBox = ({ hints }: { hints: string[] }) => {
  const { displayedStep } = useGameContext();
  return (
    <div
      className={`bg-brown-light ${displayedStep === 6 && "hidden"} absolute bottom-0 left-0 rounded-bl-[6px] rounded-tr-lg px-2 text-background-dark`}
    >
      {displayedStep === 3
        ? hints[0]
        : displayedStep === 4
          ? hints[1]
          : displayedStep === 5 && hints[2]}
    </div>
  );
};

export default HintBox;
