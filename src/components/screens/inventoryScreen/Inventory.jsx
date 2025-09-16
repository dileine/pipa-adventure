import React, { useContext } from "react";
import { PlayerContext } from "../../../contexts/player";
import { icons } from "../../../assets/assets";

const Inventory = () => {
  const { inventory } = useContext(PlayerContext);
  console.log("Inventory in component:", inventory);

  return (
    <>
      <h2>Inventari</h2>
      {Array.from(inventory.entries()).map(([itemId, item]) => (
        <div key={itemId}>
          {icons[item.icon] && <img src={icons[item.icon]} alt={item.name} />}
          <span>{item.name}</span>
          {item.quantity > 1 && <span> x{item.quantity}</span>}
        </div>
      ))}
      {inventory.size === 0 && <p>El teu inventari està buit</p>}
    </>
  );
};

export default Inventory;
