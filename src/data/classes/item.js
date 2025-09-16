export class Item {
  constructor(id, name, description, quantity = 1, icon = null) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.icon = icon;
  }

  use() {
    return `Has utilitzat ${this.name}`;
  }
}
