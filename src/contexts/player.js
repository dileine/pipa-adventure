import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [gold, setGold] = useState(0);
  const [health, setHealth] = useState(100);
  const [inventory, setInventory] = useState(new Map());
  const [experience, setExperience] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        playerName,
        setPlayerName,
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
