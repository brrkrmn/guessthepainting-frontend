"use client";

import {
  GameContextValue,
  GameState,
  GameStep,
  PaintingState,
} from "@/context/gameContext.types";
import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const GameContext = createContext<GameContextValue>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("You can only call this hook inside GameProvider");
  }
  return context;
};

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [paintingState, setPaintingState] = useState<PaintingState>({});
  const id = useParams().id;

  useEffect(() => {
    const GTPData = localStorage.getItem("gameState");
    if (GTPData) {
      const gameState = JSON.parse(GTPData);
      setPaintingState(gameState[id as keyof GameState]);
    }
  }, []);

  useEffect(() => {
    const GTPData = localStorage.getItem("gameState");
    const gameState = GTPData && JSON.parse(GTPData);
    const newGameState: GameState = {
      ...gameState,
      [id]: paintingState,
    };
    localStorage.setItem("gameState", JSON.stringify(newGameState));
  }, [paintingState]);

  const status = useMemo(() => {
    if (paintingState.sucessStep) {
      return "success";
    } else if (paintingState.failedStep === 5) {
      return "failed";
    } else {
      return "ongoing";
    }
  }, [paintingState]);

  const currentStep = useMemo(() => {
    const successStep = paintingState.successStep;
    const failedStep = paintingState.failedStep;

    if (!successStep && !failedStep) {
      return 1;
    } else if (!successStep && failedStep) {
      return Math.min(5, failedStep + 1) as GameStep;
    } else if (successStep) {
      return successStep;
    }
  }, [paintingState]);

  return (
    <GameContext.Provider
      value={{
        status,
        currentStep,
        paintingState,
        setPaintingState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
