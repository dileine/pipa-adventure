export class Scene {
  constructor(
    id,
    name,
    sceneImg = {},
    npcImg = {},
    text,
    location,
    options = []
  ) {
    this.id = id;
    this.name = name;
    this.sceneImg = sceneImg;
    this.npcImg = npcImg;
    this.text = text;
    this.location = location;
    this.options = options;
  }
}
