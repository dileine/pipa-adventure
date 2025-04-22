import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  //placeholder for playerName TODO: create form to set playerName
  // const [playerName, setPlayerName] = useState("Player");
  const [gold, setGold] = useState(0);
  const [health, setHealth] = useState(100);
  const [inventory, setInventory] = useState(new Map());
  const [experience, setExperience] = useState(0);

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
