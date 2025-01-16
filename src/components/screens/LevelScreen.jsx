import React, { useContext } from "react";
import { GameContext } from "../../contexts/game";
import game from "../../data/game.json";

const LevelScreen = () => {
  const { currentLevel } = useContext(GameContext);
  const levelName = game.levels[currentLevel] || "Nivell desconegut";

  return (
    <>
      <h1>{levelName}</h1>
    </>
  );
};

export default LevelScreen;
