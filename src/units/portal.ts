import { Scene, Physics } from "phaser";

class Portal extends Physics.Arcade.Sprite {
  public exit: Portal | null;

  constructor(scene, x, y) {
    super(scene, x, y, "player");
    this.scene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.create();
  }

  public static load(scene: Scene) {}

  public create() {}

  public addExit(portal: Portal) {
    this.exit = portal;
  }

  public teleport(body: Physics.Arcade.Sprite) {
      if (!this.exit) {
          return;
      }

      body.x = this.exit.x;
      body.y = this.exit.y;
  }
}

export default Portal;
