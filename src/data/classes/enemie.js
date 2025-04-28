import { NPC } from "./npc.js";

export class Enemie extends NPC {
  constructor(
    name,
    type,
    description,
    image,
    location,
    dialogue = {},
    mission = {}
  ) {
    super(name, type, description, image, location, dialogue, mission);
    this.health = 100;
    this.attackPower = 10;
    this.defense = 5;
    this.experienceReward = 50;
  }

  attack() {
    console.log(`the ${this.name} attacks!`);
  }
}
