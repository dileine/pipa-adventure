import React, { useContext } from "react";
import scenesLevel1 from "../../data/levels/1/scenes";
import { GameContext } from "../../contexts/game";
import { useScenes } from "../../hooks/useScenes";

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
    <>
      {scene.text}
      {scene.options && scene.options.length > 0 ? (
        scene.options.map(({ Component }, index) => <Component key={index} />)
      ) : (
        <button onClick={handleNextScene}>Segueix</button>
      )}
    </>
  );
};

export default OptionButton;
