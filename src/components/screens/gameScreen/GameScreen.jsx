import React, { useState } from "react";
//import PlayerScreen from "./PlayerScreen";
import LevelScreen from "../levelScreen/LevelScreen";
import PlayerStats from "../../dashboard/PlayerStats";
import Inventory from "../../dashboard/Inventory";
import Popup from "../../popup/popup";
import { Link } from "react-router-dom";
import {
  GameScreenContainer,
  Sidebar,
  MainContent,
} from "./Game.Screen.styled";

const GameScreen = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClickInventory = () => {
    setPopupContent(<Inventory />);
    setPopupVisible(true);
  };
  return (
    <GameScreenContainer>
      <Sidebar>
        <PlayerStats />
        <button onClick={handleClickInventory}>Inventario</button>
        <Link to='/'>Tornar</Link>
      </Sidebar>

      <MainContent>
        <Popup isVisible={popupVisible} onClose={() => setPopupVisible(false)}>
          {popupContent}
        </Popup>

        <LevelScreen />
      </MainContent>
    </GameScreenContainer>
  );
};

export default GameScreen;
