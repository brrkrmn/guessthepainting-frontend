'use client'

import { createContext, useEffect, useState } from 'react';
import { GameContextValue } from './gameContext.types';

export const GameContext = createContext<GameContextValue>(undefined)

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState({});

  useEffect(() => {
    const GTPData = localStorage.getItem("gameState")
    if (GTPData) {
      setValue(JSON.parse(GTPData))
    }
  }, [])

  const handleSetValue = (value: object) => {
    setValue(value)
    localStorage.setItem("gameState", JSON.stringify(value))
  }

  return (
    <GameContext.Provider
      value={{value, setValue: handleSetValue}}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider