import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/player";
import { icons } from "../../assets/assets";

const Inventory = () => {
  const { inventory } = useContext(PlayerContext);
  console.log("Inventory:", inventory);

  return (
    <>
      <h2>Inventari</h2>
      {Array.from(inventory.entries()).map(([item, quantity]) => (
        <div key={item}>
          {icons[item] && <img src={icons[item]} alt={item} />}
          {quantity > 1 && <span>x{quantity}</span>}
        </div>
      ))}
    </>
  );
};

export default Inventory;
