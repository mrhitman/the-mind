import InputHandler from "../components/input-handler";
import { Physics, Scene } from "phaser";

class Door extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "door");
    this.scene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.create();
  }

  public static load(scene: Scene) {
    scene.load.spritesheet("door", "assets/door.png", {
      frameWidth: 85,
      frameHeight: 57
    });
  }

  public create() {
    this.setCollideWorldBounds(true);
    const scene = this.scene;
    scene.anims.create({
      key: "open",
      frames: scene.anims.generateFrameNumbers("door", { start: 0, end: 9 }),
      frameRate: 30
    });
    scene.anims.create({
      key: "close",
      frames: scene.anims
        .generateFrameNumbers("door", { start: 0, end: 9 })
        .reverse(),
      frameRate: 30
    });
  }

  public update(input: InputHandler) {
    if (input.get("use").isDown) {
      this.anims.play("open", true);
    }
    if (input.get("test").isDown) {
      this.anims.play("close", true);
    }
  }
}

export default Door;
