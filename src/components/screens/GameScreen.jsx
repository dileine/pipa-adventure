import React, { useState } from "react";
//import PlayerScreen from "./PlayerScreen";
import LevelScreen from "./LevelScreen";
import PlayerStats from "../dashboard/PlayerStats";
import Inventory from "../dashboard/Inventory";
import Popup from "../popup/popup";
import { Link } from "react-router-dom";

const GameScreen = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClickInventory = () => {
    setPopupContent(<Inventory />);
    setPopupVisible(true);
  };
  return (
    <>
      <PlayerStats />
      <button onClick={handleClickInventory}>Inventory</button>
      <Popup isVisible={popupVisible} onClose={() => setPopupVisible(false)}>
        {popupContent}
      </Popup>
      {/* quest list */}
      <Link to='/'>Tornar</Link>
      <LevelScreen />
    </>
  );
};

export default GameScreen;
