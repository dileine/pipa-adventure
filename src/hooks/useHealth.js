import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export const useHealth = () => {
  const [health, setHealth] = useContext(PlayerContext);

  const increaseHealth = (healthToIncrease) => {
    if (health < 100) {
      setHealth(health + healthToIncrease);
    } else {
      console.log("Health is already full");
    }
  };

  const decreaseHealth = (healthToDecrease) => {
    if (health > healthToDecrease) {
      setHealth(health - healthToDecrease);
    } else {
      setHealth(0);
      console.log("You died");
    }
  };

  return { increaseHealth, decreaseHealth };
};
