import { Scene } from "phaser";

class Level extends Scene {
  public preload() {
    this.load.json("config", "assets/config.json");
  }
}

export default Level;
