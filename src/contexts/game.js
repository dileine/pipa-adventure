import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentScene, setCurrentScene] = useState(1);

  return (
    <GameContext.Provider
      value={{
        currentScene,
        setCurrentScene,
        currentLevel,
        setCurrentLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
