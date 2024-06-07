"use client";

import { useGameContext } from "@/context/gameProvider";
import { useEffect } from "react";
import { GameResult } from "./components/GameResult";
import { SearchField } from "./components/SearchField";

const SubmitSection = ({ paintingTitle }: { paintingTitle: string }) => {
  const { status, setPaintingTitle } = useGameContext();

  useEffect(() => {
    setPaintingTitle(paintingTitle);
  }, [paintingTitle]);

  return (
    <div className="h-full w-full">
      {status === "ongoing" ? <SearchField /> : <GameResult />}
      {/* <PreviousGuesses /> */}
    </div>
  );
};

export default SubmitSection;
