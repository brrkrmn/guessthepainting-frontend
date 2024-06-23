export type GameContextValue = null | {
  status: GameStatus;
  currentStep: GameStep;
  paintingState: PaintingState;
  checkUserGuess: (userGuess: string) => void;
  displayedStep: DisplayedStep;
  updateDisplayedStep: (step: DisplayedStep) => void;
  paintingTitle: string;
  setPaintingTitle: (value: string) => void;
};

export type PaintingState =
  | {}
  | {
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

export type DisplayedStep = 1 | 2 | 3 | 4 | 5 | 6;