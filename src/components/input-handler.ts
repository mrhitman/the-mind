import { Input } from 'phaser';
import { map } from 'lodash';

export type InputKeys = { [name: string]: Input.Keyboard.Key };
class InputHandler {
  protected keys: InputKeys = {};
  protected _binds = [];
  constructor(private readonly input) {}

  public load(keys: InputKeys) {
    map(keys, (code, name) => {
      this.keys[name] = this.input.keyboard.addKey(code);
    });
  }

  public get(key: string) {
    return this.keys[key];
  }
}

export default InputHandler;
