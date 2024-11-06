import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [gold, setGold] = useState(0);
  const [health, setHealth] = useState(100);
  const [inventory, setInventory] = useState(new Map());
  const [experience, setExperience] = useState(0);

  //TO DO: add visitedLocation, completedQuests, activeQuests...

  return (
    <PlayerContext.Provider
      value={{
        gold,
        setGold,
        health,
        setHealth,
        experience,
        setExperience,
        inventory,
        setInventory,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
