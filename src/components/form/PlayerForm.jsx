import React, { useState } from "react";

let playerName = "";

const PlayerForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    playerName = name;
    if (onSubmit) {
      onSubmit({ name });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Abans de començar, quin és el teu nom?
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};

export { playerName };

export default PlayerForm;
