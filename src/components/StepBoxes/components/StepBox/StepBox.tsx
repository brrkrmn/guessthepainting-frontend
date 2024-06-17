"use client";

import { GameStep } from "@/context/gameContext.types";
import { useGameContext } from "@/context/gameProvider";

type ComponentProps = {
  boxNumber: GameStep;
};

const StepBox = ({ boxNumber }: ComponentProps) => {
  const { status, currentStep, paintingState, updateDisplayedStep } =
    useGameContext();
  const successStep =
    "successStep" in paintingState && paintingState.successStep;
  const failedStep = "failedStep" in paintingState && paintingState.failedStep;

  return (
    <button
      onClick={() => updateDisplayedStep(boxNumber)}
      className={`
        flex aspect-square w-8 items-center justify-center rounded-lg border border-brown-dark text-brown-light
        ${successStep && successStep === boxNumber ? "border-success-foreground bg-success-background text-success-foreground" : ""}
        ${failedStep && failedStep >= boxNumber ? "border-danger-foreground bg-danger-background text-danger-foreground" : ""}
        ${status === "ongoing" && boxNumber > currentStep && "border-disabled text-disabled"}
      `}
      disabled={status === "ongoing" && boxNumber > currentStep}
    >
      {boxNumber}
    </button>
  );
};

export default StepBox;
