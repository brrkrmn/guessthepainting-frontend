export type GameContextValue =
  | undefined
  | {
      getPaintingState: (id: number) => PaintingState;
      updateGameStatus: (value: PaintingState) => GameStatus;
      updateCurrentStep: (value: PaintingState) => void;
      currentStep: GameStep;
    };

export type PaintingState = {
  successStep: SuccessStep;
  failedStep: FailedStep;
};

export type GameState =
  | {}
  | {
      [key: number]: PaintingState;
    };

export type SuccessStep = null | GameStep;
export type FailedStep = null | GameStep;

export type GameStatus = "success" | "ongoing" | "failed";

export type GameStep = 1 | 2 | 3 | 4 | 5;