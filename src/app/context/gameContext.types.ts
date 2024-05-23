export type GameContextValue =
  | undefined
  | {
    value: { },
    setValue: (value: object) => void
  }