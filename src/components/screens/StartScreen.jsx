import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../popup/popup";
import PlayerForm from "../form/PlayerForm";

const StartScreen = () => {
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
      {" "}
      <Popup isVisible={popupVisible} onClose={handleClosePopup}>
        <PlayerForm onSubmit={handleSubmitName} />
      </Popup>
      <h1>Hola, {playerName}</h1>
      <p>
        Ets un jove recent desallotjat que emprèn una missió desesperada: trobar
        un pis en una ciutat on els preus s'enfilen i els comerços tradicionals
        desapareixen. Amb una forta crítica social i un toc d'humor sarcàstic,
        el joc revela la realitat d'una ciutat en plena transformació, on els
        veïns lluiten per sobreviure. En la recerca del teu lloc en aquest món,
        toparàs amb éssers mitològics, paranys urbans i personatges històrics
        que t'acompanyaran per un laberint urbà ple de sorpreses. Hauràs de
        superar reptes, resoldre enigmes, enfrontar-te a enemics poderosos i
        prendre decisions difícils per aconseguir una llar en aquesta ciutat
        hostil.
      </p>
      <Link to='/pipa'>Som-hi!</Link>
      <Link to='/'>Tornar</Link>
    </>
  );
};

export default StartScreen;
