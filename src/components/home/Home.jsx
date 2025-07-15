import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../popup/popup";
import PlayerForm from "../form/PlayerForm";

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [playerName, setPlayerName] = useState("");

  const handleSubmitName = (data) => {
    setPlayerName(data.name);
    setPopupVisible(false);
  };

  const handleClosePopup = () => {
    if (!playerName) {
      return;
    }
    setPopupVisible(false);
  };
  return (
    <>
      <Popup isVisible={popupVisible} onClose={handleClosePopup}>
        <PlayerForm onSubmit={handleSubmitName} />
      </Popup>
      <h1>
        <strong>PiPa: Pisos i Paranys</strong>
        <p>
          Una joc d'aventures de text, ambientat en una Barcelona fantàstica on
          et trobaràs amb personatges extravagants, situacions surrealistes i
          dilemes socials que et faran reflexionar sobre la bogeria del sistema
          capitalista.
        </p>
      </h1>
      <Link to='/start'>començar</Link>
      {/*TO DO:
      <button>Settings</button>
      <button>About</button>*/}
    </>
  );
};

export default Home;
