"use client";

import { useGameContext } from "@/context/gameProvider";
import { GameResult } from "./components/GameResult";
import { PreviousGuesses } from "./components/PreviousGuesses";
import { SearchField } from "./components/SearchField";

const SubmitSection = () => {
  const { status } = useGameContext();
  return (
    <div className="h-full w-full border-2">
      {status === "ongoing" ? <SearchField /> : <GameResult />}
      <PreviousGuesses />
    </div>
  );
};

export default SubmitSection;
