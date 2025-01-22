import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export const useGold = () => {
  const { gold, setGold } = useContext(PlayerContext);

  const increaseGold = (goldToIncrease) => {
    setGold(gold + goldToIncrease);
  };

  const decreaseGold = (goldToDecrease) => {
    goldToDecrease <= gold
      ? setGold(gold - goldToDecrease)
      : alert("No tens suficients pellofes");
  };

  return { increaseGold, decreaseGold, gold };
};
