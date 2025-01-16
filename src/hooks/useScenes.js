import { useContext } from "react";
import { GameContext } from "../contexts/game";

export const useScenes = () => {
  const { setCurrentScene } = useContext(GameContext);

  const goToScene = (nextScene) => {
    setCurrentScene(nextScene);
  };

  return { goToScene };
};
