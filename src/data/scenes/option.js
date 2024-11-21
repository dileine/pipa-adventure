export class Option {
  constructor(
    id,
    type,
    name,
    text,
    nextScene,
    itemsToAdd = [],
    healthToIncrease = 0,
    healthToDecrease = 0,
    goldToIncrease = 0,
    goldToDecrease = 0
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.Component = () => (
      <ActionButton
        text={text}
        nextScene={nextScene}
        itemsToAdd={itemsToAdd}
        healthToIncrease={healthToIncrease}
        healthToDecrease={healthToDecrease}
        goldToIncrease={goldToIncrease}
        goldToDecrease={goldToDecrease}
      />
    );
  }
}
