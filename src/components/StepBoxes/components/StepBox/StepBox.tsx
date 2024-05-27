"use client";

import { GameStep } from "@/context/gameContext.types";
import { useGameContext } from "@/context/gameProvider";

type ComponentProps = {
  boxNumber: GameStep;
};

const StepBox = ({ boxNumber }: ComponentProps) => {
  const { status, currentStep, paintingState, updateDisplayedStep } =
    useGameContext();
  const successStep = paintingState.successStep;
  const failedStep = paintingState.failedStep;

  return (
    <button
      onClick={() => updateDisplayedStep(boxNumber)}
      className={`
        aspect-square w-8 rounded-lg border-2 border-[#121]
        ${successStep && successStep === boxNumber ? "bg-[#419741]" : ""}
        ${failedStep && failedStep >= boxNumber ? "bg-[#c01919]" : ""}
      `}
      disabled={status === "ongoing" && boxNumber > currentStep}
    >
      {boxNumber}
    </button>
  );
};

export default StepBox;
