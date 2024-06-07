import { GameStep } from "@/context/gameContext.types";
import { StepBox } from "./components/StepBox";

const StepBoxes = () => {
  const boxArray = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-3">
      {boxArray.map((box, index) => (
        <StepBox key={index} boxNumber={(index + 1) as GameStep} />
      ))}
    </div>
  );
};

export default StepBoxes;
