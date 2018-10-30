import InputHandler from "../components/input-handler";
import { Physics, Scene } from "phaser";

class Player extends Physics.Arcade.Sprite {
  public speed = 300;
  public jump = 450;
  public scene: Scene;

  constructor(scene, x, y) {
    super(scene, x, y, "player");
    this.scene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.create();
  }

  public static load(scene: Scene) {
    scene.load.spritesheet("player", "assets/droid.png", {
      frameWidth: 32,
      frameHeight: 32
    });
  }

  public create() {
    this.setCollideWorldBounds(true);
    const scene = this.scene;
    scene.anims.create({
      key: "move",
      frames: scene.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    scene.anims.create({
      key: "idle",
      frames: scene.anims.generateFrameNumbers("player", { start: 0, end: 0 }),
      frameRate: 10,
      repeat: 1
    });
  }

  public update(input: InputHandler) {
    if (input.get("left").isDown) {
      this.setVelocityX(-this.speed);
      this.anims.play("move", true);
    } else if (input.get("right").isDown) {
      this.setVelocityX(this.speed);
      this.anims.play("move", true);
    } else {
      this.anims.play("idle");
      this.setVelocityX(0);
    }
    if (input.get("up").isDown && this.body.blocked.down) {
      this.setVelocityY(-this.jump);
    }
    if (input.get("use").isDown) {
    }
  }
}

export default Player;
