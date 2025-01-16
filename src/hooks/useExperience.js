import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export const useExperience = () => {
  const [experience, setExperience] = useContext(PlayerContext);

  const increaseExperience = (experienceToIncrease) => {
    setExperience(experience + experienceToIncrease);
  };

  const decreaseExperience = (experienceToDecrease) => {
    experienceToDecrease <= experience
      ? setExperience(experience - experienceToDecrease)
      : console.log("You don't have enough experience");
  };

  return { increaseExperience, decreaseExperience };
};
