import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../contexts/game";
import game from "../../data/game.json";

const LevelOne = () => {
  const { currentLevel } = useContext(GameContext);
  const levelName = game.levels[currentLevel] || "Nivell desconegut";

  return (
    <>
      <h1>Benvingut a {levelName}</h1>
      <Link to='/'>Tornar</Link>
    </>
  );
};

export default LevelOne;
