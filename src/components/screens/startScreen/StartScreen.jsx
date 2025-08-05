import React from "react";
//import { Link } from "react-router-dom";
import { playerName } from "../../form/PlayerForm";
import {
  StartScreenContainer,
  StyledLink,
  LinkWraper,
} from "./StartScreen.styled";

const StartScreen = () => {
  return (
    <StartScreenContainer>
      {" "}
      <h2>Benvingut, {playerName}</h2>
      <p>
        Vius en una Barcelona que batega màgia antiga, resistència veïnal i
        poders ocults. El que comença com una recerca desesperada per trobar un
        sostre sota el que dormir, es converteix en una odissea per sobreviure
        en una ciutat governada per un sistema corrupte. Amb un to satíric i
        tocs de fantasia, "PiPa: Pisos i Paranys" et convida a explorar una
        ciutat viva, plena de contrastos i secrets. Cada decisió compta, i pot
        apropar-te o allunyar-te del teu objectiu final: aconseguir un lloc
        digne on viure sense perdre't pel camí.
      </p>
      <LinkWraper>
        <StyledLink to='/pipa'>Som-hi!</StyledLink>
        <StyledLink to='/'>Tornar</StyledLink>
      </LinkWraper>
    </StartScreenContainer>
  );
};

export default StartScreen;
