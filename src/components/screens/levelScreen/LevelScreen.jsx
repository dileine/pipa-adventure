import React, { useContext } from "react";
import { GameContext } from "../../../contexts/game";
//import game from "../../../data/config/game.json";
import OptionButton from "../../buttons/optionButton/OptionButton";
import scenesLevel1 from "../../../data/scenes/scenes";
import {
  LevelScreenContainer,
  LevelMainArea,
  LevelTextArea,
  ImageArea,
} from "./LevelScreen.styled";

const LevelScreen = () => {
  const { currentLevel, currentScene } = useContext(GameContext);
  //const levelName = game.levels[currentLevel] || "Nivell desconegut";

  if (!currentLevel) {
    console.log("No current level set");
    return <div>Loading...</div>;
  }

  const scene = scenesLevel1[currentLevel]?.find(
    (scene) => scene.id === currentScene
  );

  if (!scene) {
    console.error("Scene not found", currentScene);
    return null;
  }

  return (
    <LevelScreenContainer>
      <h1>{scene.name}</h1>
      <LevelMainArea>
        <ImageArea>
          {scene.sceneImg && <img src={scene.sceneImg} alt='Escena' />}
          {/* TODO: if (scene.location){location description // tip}*/}
        </ImageArea>
        <LevelTextArea>
          <OptionButton />
        </LevelTextArea>
      </LevelMainArea>
    </LevelScreenContainer>
  );
};

export default LevelScreen;
