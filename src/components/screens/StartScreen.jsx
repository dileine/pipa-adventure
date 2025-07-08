import React from "react";
import { Link } from "react-router-dom";
import { playerName } from "../form/PlayerForm";

const StartScreen = () => {
  return (
    <>
      {" "}
      <h2>Benvingut, {playerName}</h2>
      <p>
        Una joc d'aventures de text, abientat en una Barcelona fantàstica on et
        trobaràs amb personatges extravagants, situacions surrealistes i dilemes
        socials que et faran reflexionar sobre la bogeria del sistema
        capitalista.
      </p>
      <p>
        Vius en una Barcelona que batega màgia antiga, resistència veïnal i
        poders ocults. El que comença com una recerca desesperada per trobar un
        sostre sota el que dormir, es converteix en una odissea per sobreviure
        en una ciutat governada per un sistema corrupte.
      </p>
      <p>
        Amb un to satíric i tocs de fantasia, "PiPa: Pisos i Paranys" et convida
        a explorar una ciutat viva, plena de contrastos i secrets. Cada decisió
        compta, i pot apropar-te o allunyar-te del teu objectiu final:
        aconseguir un lloc digne on viure sense perdre't pel camí.
      </p>
      <p>Preparat?</p>
      <Link to='/pipa'>Som-hi!</Link>
      <Link to='/'>Tornar</Link>
    </>
  );
};

export default StartScreen;
