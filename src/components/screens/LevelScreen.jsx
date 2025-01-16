import React, { useContext } from "react";
import { GameContext } from "../../contexts/game";
import LevelOne from "../levels/LevelOne";

const LevelScreen = () => {
  const { currentLevel } = useContext(GameContext);

  const levelComponents = {
    1: <LevelOne />,
  };

  return (
    <>
      <h1>{levelComponents[currentLevel] || "Nivell desconegut"}</h1>
    </>
  );
};

export default LevelScreen;
