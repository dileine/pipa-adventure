import React, { useState } from "react";
import { FormBtn, InputForm, PlayerFormWrapper } from "./PlayerForm.styled";

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
    <PlayerFormWrapper>
      <form onSubmit={handleSubmit}>
        <label>
          Abans de començar, quin és el teu nom?
          <InputForm
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputForm>
        </label>
        <FormBtn type='submit'>Enviar</FormBtn>
      </form>
    </PlayerFormWrapper>
  );
};

export { playerName };

export default PlayerForm;
