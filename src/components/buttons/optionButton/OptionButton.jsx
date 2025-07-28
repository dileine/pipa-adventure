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

  const scene = scenesLevel1[currentLevel]?.find(
    (scene) => scene.id === currentScene
  );

  if (!scene) {
    console.error("Scene not found", currentScene);
    return null;
  }

  const handleNextScene = () => goToScene(currentScene + 1);

  return (
    <Container>
      <SceneContent>
        {scene.image && (
          <ImageArea>
            <img src={scene.image} alt='Escena' />
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
