import Door from "../units/door";
import InputHandler from "../components/input-handler";
import Level from "../components/level";
import Player from "../units/player";
import { Physics } from "phaser";

class Level1 extends Level {
  protected _objects: Physics.Arcade.Sprite[] = [];
  protected _inputHandler: InputHandler;

  public preload() {
    super.preload();
    this._inputHandler = new InputHandler(this.input);
    Player.load(this);
    Door.load(this);
  }

  public create() {
    const keys = this.cache.json.get("config").keys;
    this._inputHandler.load(keys);
    this._objects.push(new Door(this, 300, 600));
    this._objects.push(new Player(this, 100, 600));
  }

  public update(time: number, delta: number) {
    this._objects.map(obj => obj.update(this._inputHandler));
  }
}

export default Level1;
