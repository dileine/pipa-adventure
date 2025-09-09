export class NPC {
  constructor(name, description, location, dialogue = {}, mission = {}) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.dialogue = dialogue; // Array of strings
    this.mission = mission; // { title: "", description: "" }
  }

  speak(sceneName) {
    return (
      this.dialogue[sceneName] ||
      "No tinc més informació per tú en aquest moment"
    );
  }

  quest() {
    console.log(`the ${this.name} gives you a quest!`);
    return this.mission;
  }

  attack() {
    console.log(`the ${this.name} attacks!`);
  }
}
