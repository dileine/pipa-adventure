import React, { useContext } from "react";
import scenesLevel1 from "../../../data/scenes/scenes";
import { GameContext } from "../../../contexts/game";
import { useScenes } from "../../../hooks/useScenes";
import {
  Container,
  SceneContent,
  ImageArea,
  TextArea,
  ButtonsArea,
} from "./OptionButton.styled";

const OptionButton = () => {
  const { currentLevel, currentScene } = useContext(GameContext);
  const { goToScene } = useScenes();

  //debugging logs
  console.log("OptionButton - Current Level:", currentLevel);
  console.log("OptionButton - Current Scene:", currentScene);
  console.log("OptionButton - Available Scenes:", scenesLevel1[currentLevel]);

  const scene = scenesLevel1[currentLevel]?.find(
    (scene) => scene.id === currentScene
  );

  //debugging logs
  console.log("OptionButton - Found Scene:", scene);

  if (!scene) {
    console.error("Scene not found", currentScene);
    return null;
  }

  const handleNextScene = () => goToScene(currentScene + 1);

  return (
    <Container>
      <SceneContent>
        {scene.npcImg && (
          <ImageArea>
            <img src={scene.npcImg} alt='Escena' />
          </ImageArea>
        )}
        <TextArea>
          <p>{scene.text}</p>
          <ButtonsArea>
            {scene.options && scene.options.length > 0 ? (
              scene.options.map(({ Component }, index) => (
                <Component key={index} />
              ))
            ) : (
              <button onClick={handleNextScene}>Segueix</button>
            )}
          </ButtonsArea>
        </TextArea>
      </SceneContent>
    </Container>
  );
};

export default OptionButton;
