export type GameContextValue =
  | undefined
  | {
    value: {};
    setValue: ({ value, id }: { value: PaintingState;  id: number}) => void;
    getPaintingState: (id: number) => PaintingState;
    updateGameStatus: (value: PaintingState) => GameStatus;
    updateCurrentStep: (value: PaintingState) => void;
    currentStep: GameStep;
  }

export type PaintingState = {
  successStep: null | number;
  failedStep: null | number;
}

export type GameState =
  | {}
  | {
    [key: number]: PaintingState;
  }

export type SuccessStep = null | number;
export type FailedStep = null | number;

export type GameStatus = "success" | "ongoing" | "failed"

export type GameStep = number;