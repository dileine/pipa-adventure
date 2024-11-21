import React, { useContext } from "react";
import { GameContext } from "../../contexts/game";
import { PlayerContext } from "../../contexts/player";

const PlayerStats = () => {
  const { currentLevel } = useContext(GameContext);
  const { experience, health, gold } = useContext(PlayerContext);

  return (
    <>
      <h2>Stats</h2>
      <p>Nivell: {currentLevel}</p>
      <p>Experiència: {experience}</p>
      <p>Salut: {health}</p>
      <p>Pellofes: {gold}</p>
      <p>Inventari: </p>
    </>
  );
};

export default PlayerStats;
