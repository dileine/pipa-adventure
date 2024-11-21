export class Scene {
  constructor(id, name, text, location, options = []) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.location = location;
    this.options = options;
  }
}
