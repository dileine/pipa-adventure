import React, { useState, useContext } from "react";
import { PlayerContext } from "../../contexts/player";
import { FormBtn, InputForm, PlayerFormWrapper } from "./PlayerForm.styled";

const PlayerForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const { setPlayerName } = useContext(PlayerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayerName(name);
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

export default PlayerForm;
