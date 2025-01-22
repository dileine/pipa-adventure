import React from "react";
import { useInventory } from "../../hooks/useInventory";
import { useHealth } from "../../hooks/useHealth";
import { useGold } from "../../hooks/useGold";
import { useScenes } from "../../hooks/useScenes";

const ActionButton = ({
  text,
  nextScene,
  itemsToAdd = [],
  itemToRemove = [],
  healthToIncrease = 0,
  healthToDecrease = 0,
  goldToDecrease = 0,
  goldToIncrease = 0,
}) => {
  const { addInventory, removeInventory } = useInventory();
  const { increaseHealth, decreaseHealth } = useHealth();
  const { increaseGold, decreaseGold } = useGold();
  const { goToScene } = useScenes();

  const handleClick = () => {
    if (itemsToAdd.length > 0) {
      addInventory(itemsToAdd);
    }
    if (itemToRemove.length > 0) {
      removeInventory.forEach((item) => removeInventory(item));
    }
    if (healthToIncrease > 0) {
      increaseHealth(healthToIncrease);
    }
    if (healthToDecrease > 0) {
      decreaseHealth(healthToDecrease);
    }
    if (goldToDecrease > 0) {
      decreaseGold(goldToDecrease);
    }
    if (goldToIncrease > 0) {
      increaseGold(goldToIncrease);
    }
    if (nextScene) {
      goToScene(nextScene);
    }
  };

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default ActionButton;
