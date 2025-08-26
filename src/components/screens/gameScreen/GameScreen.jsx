import React, { useState } from "react";
//import PlayerScreen from "./PlayerScreen";
import LevelScreen from "../levelScreen/LevelScreen";
import PlayerStats from "../statsScreen/PlayerStats";
import Inventory from "../inventoryScreen/Inventory";
import Popup from "../../popup/popup";
//import { Link } from "react-router-dom";
import {
  GameScreenContainer,
  Sidebar,
  MainContent,
  ButtonsArea,
  //StyledLink,
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
        <ButtonsArea>
          <button onClick={handleClickInventory}>Tothicap</button>
          {/* TO DO: create menu & <StyledLink to='/'>MENU</StyledLink> */}
        </ButtonsArea>
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
