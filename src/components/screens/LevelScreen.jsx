import React, { useContext } from "react";
import { GameContext } from "../../contexts/game";
import game from "../../data/game.json";
import OptionButton from "../buttons/OptionButton";

const LevelScreen = () => {
  const { currentLevel } = useContext(GameContext);
  const levelName = game.levels[currentLevel] || "Nivell desconegut";

  return (
    <>
      <h1>Benvingut a {levelName}</h1>
      <OptionButton />
    </>
  );
};

export default LevelScreen;
