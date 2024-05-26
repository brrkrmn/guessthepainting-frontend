"use client";

import {
  GameContextValue,
  GameState,
  GameStatus,
  GameStep,
  PaintingState,
} from "@/context/gameContext.types";
import { createContext, useContext, useEffect, useState } from "react";

export const GameContext = createContext<GameContextValue>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("You can only call this hook inside GameProvider");
  }
  return context;
};

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>({});
  const [gameStatus, setGameStatus] = useState<GameStatus>("ongoing");
  const [currentStep, setCurrentStep] = useState<GameStep>(1);

  useEffect(() => {
    const GTPData = localStorage.getItem("gameState");
    if (GTPData) setGameState(JSON.parse(GTPData));
  }, []);

  const setPaintingState = ({
    value,
    id,
  }: {
    value: PaintingState;
    id: number;
  }) => {
    const newGameState = {
      ...gameState,
      [id]: value,
    };
    localStorage.setItem("gameState", JSON.stringify(newGameState));
    setGameState(newGameState);
  };

  const getPaintingState = (id: number) => {
    return gameState[id as keyof GameState];
  };

  const updateGameStatus = (value: PaintingState) => {
    if (value.successStep) {
      return "success";
    } else if (value.failedStep === 5) {
      return "failed";
    } else {
      return "ongoing";
    }
  };

  const updateCurrentStep = (value: PaintingState) => {
    const successStep = value.successStep;
    const failedStep = value.failedStep;

    if (successStep === null && failedStep === null) {
      setCurrentStep(1);
    } else if (successStep === null && failedStep !== null) {
      setCurrentStep(Math.min(5, failedStep + 1) as GameStep);
    } else if (successStep !== null) {
      setCurrentStep(successStep);
    }
  };

  return (
    <GameContext.Provider
      value={{
        getPaintingState,
        updateGameStatus,
        updateCurrentStep,
        currentStep,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
