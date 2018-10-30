import * as Phaser from "phaser";
import Game from "./game";
import Level1 from "./levels/level1";

new Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 980 },
      debug: true
    }
  },
  scene: [Level1]
});
