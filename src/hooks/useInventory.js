import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export const useInventory = () => {
  const { inventory, setInventory } = useContext(PlayerContext);

  const addInventory = (items) => {
    console.log("Adding items to inventory:", items);
    const inventoryMap = new Map(inventory);

    for (const itemToAdd of items) {
      console.log("Processing item:", itemToAdd);
      const existingItem = inventoryMap.get(itemToAdd.id);

      if (existingItem) {
        existingItem.quantity += itemToAdd.quantity;
        console.log("Updated existing item:", existingItem);
      } else {
        inventoryMap.set(itemToAdd.id, itemToAdd);
        console.log("Added new item:", itemToAdd);
      }
    }
    console.log("Final inventory map:", inventoryMap);
    setInventory(inventoryMap);
  };

  const removeInventory = (itemToRemove) => {
    const inventoryMap = new Map(inventory);
    inventoryMap.delete(itemToRemove.id);
    setInventory(inventoryMap);
  };

  return { addInventory, removeInventory };
};
