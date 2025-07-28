import { useContext } from "react";
import { GameContext } from "../../../contexts/game";
import game from "../../../data/config/game.json";
import OptionButton from "../../buttons/optionButton/OptionButton";
import {
  LevelScreenContainer,
  LevelMainArea,
  LevelTextArea,
} from "./LevelScreen.styled";

const LevelScreen = () => {
  const { currentLevel } = useContext(GameContext);
  const levelName = game.levels[currentLevel] || "Nivell desconegut";

  return (
    <LevelScreenContainer>
      <h1>{levelName}</h1>
      <LevelMainArea>
          <p>placeholder for Scene img</p>
        <LevelTextArea>
          <OptionButton />
        </LevelTextArea>
      </LevelMainArea>
    </LevelScreenContainer>
  );
};

export default LevelScreen;
