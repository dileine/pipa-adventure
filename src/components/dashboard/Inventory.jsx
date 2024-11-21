import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

const Inventory = () => {
  const { inventory } = useContext(PlayerContext);

  return (
    <>
      <h2>Inventari</h2>
      {Array.from(inventory).map(([id, item], index) => (
        <div key={index}>
          {icons[id] && <img src={icons[id]} alt={item.id} />}
          <p>{`${item.quantity}`}</p>
        </div>
      ))}
    </>
  );
};

export default Inventory;
