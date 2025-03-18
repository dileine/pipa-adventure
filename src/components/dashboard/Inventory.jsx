import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/player";
import { icons } from "../../data/assets";

const Inventory = () => {
  const [inventory] = useContext(PlayerContext);
  console.log("Inventory:", inventory);

  return (
    <>
      <h2>Inventari</h2>
      {inventory.map((item) => (
        <div>{icons[item] && <img src={icons[item]} alt={item} />}</div>
      ))}
    </>
  );
};

export default Inventory;
