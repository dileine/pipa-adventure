export class Scene {
  constructor(id, name, sceneImg = {}, text, location, options = []) {
    this.id = id;
    this.name = name;
    this.sceneImg = sceneImg;
    this.text = text;
    this.location = location;
    this.options = options;
  }
}
