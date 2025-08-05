import React, { useContext } from "react";
import { GameContext } from "../../../contexts/game";
import { PlayerContext } from "../../../contexts/player";
import { icons } from "../../../assets/assets";
import { StatContainer, StatRow, StatIcon } from "./Stats.styled";

const PlayerStats = () => {
  const { currentLevel } = useContext(GameContext);
  const { experience, health, gold } = useContext(PlayerContext);

  const stats = [
    { icon: icons.level, label: "Nivell", value: currentLevel },
    { icon: icons.experience, label: "Experiència", value: experience },
    { icon: icons.health, label: "Salut", value: health },
    { icon: icons.pellofes, label: "Pellofes", value: gold },
  ];

  return (
    <StatContainer>
      <h2>Stats</h2>
      {stats.map((stat, index) => (
        <StatRow key={index}>
          <StatIcon src={stat.icon} alt={stat.label} />
          <span>{stat.value}</span>
        </StatRow>
      ))}
    </StatContainer>
  );
};

export default PlayerStats;
