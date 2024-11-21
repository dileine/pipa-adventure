import React from "react";
import PlayerStats from "../dashboard/PlayerStats";
import Inventory from "../dashboard/Inventory";

const PlayerScreen = () => {
  return (
    <>
      <PlayerStats />
      <Inventory />
      {/* quest list */}
    </>
  );
};

export default PlayerScreen;
