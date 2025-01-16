import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export const useInventory = () => {
    const [inventory, setInventory] = useContext(PlayerContext);

    const addInventory = (items) => {
        const inventoryMap = new Map(inventory);

        for (const itemToAdd of items){
            const existingItem = inventoryMap.get(itemToAdd.id);

            if(existingItem){
                existingItem.quantity += itemToAdd.quantity;
            } else {
                inventoryMap.set(itemToAdd.id, itemToAdd);
            }
        }
        setInventory(inventoryMap);
    }

    const removeInventory = (itemToRemove) => {
        setInventory(
            inventory.filter(inventoryItem => inventoryItem.id !== itemToRemove.id)
        );
    };

    return { addInventory, removeInventory};
};