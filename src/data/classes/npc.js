export class NPC {
  constructor(
    name,
    type,
    description,
    image,
    location,
    dialogue = {},
    mission = {}
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.image = image;
    this.location = location;
    this.dialogue = dialogue; // Array of strings
    this.mission = mission; // { title: "", description: "" }
  }

  speak(sceneName) {
    console.log(sceneName);
    console.log(this.dialogue);
    return (
      this.dialogue[sceneName] ||
      "no tinc més informació per tú en aquest moment"
    );
  }

  attack() {
    console.log(`the ${this.name} attacks!`);
  }
}
