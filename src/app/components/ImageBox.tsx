'use client'

import { useContext } from "react";
import { GameContext } from "../context/gameProvider";

type Hints = {
  image: string;
  text?: string;
}[]

const ImageBox = ({ hints }: { hints: Hints }) => {
  const currentStep = useContext(GameContext)?.currentStep

  return (
    <div className="w-full h-[280px] flex items-center justify-center border-2 rounded-md border-[#1212]">
      {hints[currentStep - 1].image}
    </div>
  )
}

export default ImageBox