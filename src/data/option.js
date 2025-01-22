import React from "react";
import ActionButton from "../components/buttons/ActionButton";

export class Option {
  constructor(
    id,
    text,
    nextScene,
    itemsToAdd = [],
    itemToRemove = [],
    healthToIncrease = 0,
    healthToDecrease = 0,
    goldToIncrease = 0,
    goldToDecrease = 0
  ) {
    this.id = id;
    this.text = text;
    this.Component = () => (
      <ActionButton
        text={text}
        nextScene={nextScene}
        itemsToAdd={itemsToAdd}
        itemToRemove={itemToRemove}
        healthToIncrease={healthToIncrease}
        healthToDecrease={healthToDecrease}
        goldToIncrease={goldToIncrease}
        goldToDecrease={goldToDecrease}
      />
    );
  }
}
