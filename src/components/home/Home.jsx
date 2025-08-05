import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Popup from "../popup/popup";
import PlayerForm from "../form/PlayerForm";
import { HomeContainer, StyledLink } from "./Home.styled";

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
    <HomeContainer>
      <Popup isVisible={popupVisible} onClose={handleClosePopup}>
        <PlayerForm onSubmit={handleSubmitName} />
      </Popup>
      <h1>PiPa: Pisos i Paranys</h1>
      <StyledLink to='/start'>començar</StyledLink>
      {/*TO DO:
      <button>Settings</button>
      <button>About</button>
       <p>
          Una joc d'aventures de text, ambientat en una Barcelona fantàstica on
          et trobaràs amb personatges extravagants, situacions surrealistes i
          dilemes socials que et faran reflexionar sobre la bogeria del sistema
          capitalista.
        </p>
      */}
    </HomeContainer>
  );
};

export default Home;
