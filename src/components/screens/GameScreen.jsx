import React, { useState } from "react";
//import PlayerScreen from "./PlayerScreen";
import LevelScreen from "./LevelScreen";
import PlayerStats from "../dashboard/PlayerStats";
import Inventory from "../dashboard/Inventory";
import Popup from "../popup/popup";
import { Link } from "react-router-dom";
import { BoardContainer, GameContainer, LevelWrapper } from "../../styles/ScreensStyles";

const GameScreen = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClickInventory = () => {
    setPopupContent(<Inventory />);
    setPopupVisible(true);
  };
  return (
    <GameContainer>
      <BoardContainer className='container'>
        <PlayerStats />
        <button onClick={handleClickInventory}>Inventory</button>
        <Popup isVisible={popupVisible} onClose={() => setPopupVisible(false)}>
          {popupContent}
        </Popup>
        {/* TO DO: quest list */}
        <Link to='/'>Tornar</Link>
      </BoardContainer>
      <LevelWrapper className='container'>
        <LevelScreen />
      </LevelWrapper>
    </GameContainer>
  );
};

export default GameScreen;
