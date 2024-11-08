import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export const useHealth = () => {
  const { health, setHealth } = useContext(PlayerContext);

  const increaseHealth = (healthToIncrease) => {
    if (health < 100) {
      setHealth(health + healthToIncrease);
    } else {
      console.log("You already have enough health");
    }
  };

  const decreaseHealth = (healthToDecrease) => {
    if (health > healthToDecrease) {
      setHealth(health - healthToDecrease);
    } else {
      setHealth(health - healthToDecrease);
      console.log("You are dead");
    }
  };

  return { increaseHealth, decreaseHealth };
};
