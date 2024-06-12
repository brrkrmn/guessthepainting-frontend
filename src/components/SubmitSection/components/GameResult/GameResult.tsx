"use client";

import { useGameContext } from "@/context/gameProvider";

const GameResult = () => {
  const { status, paintingTitle } = useGameContext();

  return (
    <div className="flex flex-col items-center justify-center gap-2 font-fairplay">
      <p className="text-3xl font-semibold text-brown-dark">
        {status === "success" ? "Congrats!" : "Oops! Almost had it..."}
      </p>
      <p
        className={`${status === "success" ? "border-success-background" : "border-danger-foreground"} flex min-h-8 max-w-[450px] items-start justify-center text-nowrap rounded-lg border px-4 text-xl text-brown-dark backdrop-blur-md`}
      >
        The correct answer is :
        <span
          className={`${status === "success" ? "text-success-foreground" : "text-danger-foreground"} text-wrap pl-1`}
        >
          {paintingTitle}
        </span>
      </p>
    </div>
  );
};

export default GameResult;
