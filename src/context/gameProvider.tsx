"use client";

import {
  DisplayedStep,
  GameContextValue,
  GameState,
  GameStep,
  PaintingState,
} from "@/context/gameContext.types";
import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const GameContext = createContext<GameContextValue>(null);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === null) {
    throw new Error("You can only call this hook inside GameProvider");
  }
  return context;
};

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [paintingState, setPaintingState] = useState<PaintingState>({});
  const [displayedStep, setDisplayedStep] = useState<DisplayedStep>(1);
  const [paintingTitle, setPaintingTitle] = useState("");
  const id = useParams().id;

  useEffect(() => {
    const GTPData = localStorage.getItem("gameState");
    if (GTPData) {
      const gameState = JSON.parse(GTPData);
      const currentPaintingState = gameState[id as keyof GameState];
      if (
        currentPaintingState &&
        Object.keys(currentPaintingState).length !== 0
      ) {
        setPaintingState(gameState[id as keyof GameState]);
      }
    }
  }, []);

  useEffect(() => {
    if (status === "success" || status === "failed") {
      setDisplayedStep(6);
    }
  }, [paintingState]);

  useEffect(() => {
    const GTPData = localStorage.getItem("gameState");
    const gameState = GTPData && JSON.parse(GTPData);
    const newGameState: GameState = {
      ...gameState,
      [id as keyof PaintingState]: paintingState,
    };
    localStorage.setItem("gameState", JSON.stringify(newGameState));
  }, [paintingState]);

  const status = useMemo(() => {
    if ("successStep" in paintingState && paintingState.successStep) {
      return "success";
    } else if (
      "failedStep" in paintingState &&
      paintingState.failedStep === 5
    ) {
      return "failed";
    } else {
      return "ongoing";
    }
  }, [paintingState]);

  const currentStep = useMemo(() => {
    const successStep =
      "successStep" in paintingState && paintingState.successStep;
    const failedStep =
      "failedStep" in paintingState && paintingState.failedStep;

    if (!successStep && failedStep) {
       const step = Math.min(5, failedStep + 1) as GameStep;
       setDisplayedStep(step);
       return step;
     } else if (successStep) {
       setDisplayedStep(successStep);
       return successStep;
     }
    setDisplayedStep(1);
    return 1;
  }, [paintingState]);

  const updateDisplayedStep = (step: DisplayedStep) => {
    setDisplayedStep(step);
  };

  const checkUserGuess = (userGuess: string) => {
    if (userGuess.toLowerCase() === paintingTitle.toLowerCase()) {
      setPaintingState({
        ...paintingState,
        successStep: currentStep,
      });
    } else {
      setPaintingState({
        ...paintingState,
        failedStep: currentStep,
      });
    }
  };

  return (
    <GameContext.Provider
      value={{
        status,
        currentStep,
        paintingState,
        checkUserGuess,
        displayedStep,
        updateDisplayedStep,
        paintingTitle,
        setPaintingTitle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
