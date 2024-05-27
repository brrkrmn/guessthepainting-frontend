"use client";

import { useGameContext } from "@/context/gameProvider";
import { Hint } from "@/services/paintings/paintings.types";

type ImageBoxProps = {
  hints: Hint[];
};

const ImageBox = ({ hints }: ImageBoxProps) => {
  const { displayedStep } = useGameContext();
  return (
    <div className="flex h-[280px] w-full items-center justify-center rounded-md border-2 border-[#1212]">
      {hints[displayedStep - 1].image}
    </div>
  );
};

export default ImageBox;
