import React, { useState } from "react";
import PlayerStats from "../dashboard/PlayerStats";
import Inventory from "../dashboard/Inventory";
import Popup from "../popup/popup";

const PlayerScreen = () => {
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
    </>
  );
};

export default PlayerScreen;
