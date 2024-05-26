"use client";

const StepBoxes = () => {
  const boxArray = [1, 2, 3, 4, 5];
  const successStep = null;
  const failedStep = 3;
  const status = "ongoing";

  return (
    <div className="flex items-center justify-center gap-2">
      {boxArray.map((box) => (
        <button
          className={`
      aspect-square w-8 rounded-lg border-2 border-[#121]
      ${successStep && successStep === box && "bg-[#419741]"}
      ${failedStep && failedStep >= box && "bg-[#c01919]"}
      `}
          key={box}
          disabled={
            status === "ongoing" &&
            (failedStep ? box > failedStep : box > 1) &&
            true
          }
        >
          {box}
        </button>
      ))}
    </div>
  );
};

export default StepBoxes;
