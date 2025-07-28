export class Scene {
  constructor(id, name, image, text, location, options = []) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.text = text;
    this.location = location;
    this.options = options;
  }
}
