import { Rpg } from "../classes/rpg";
import { Game } from "../interfaces/game.interface";
import { GameFactory } from "./game.factory";

export class RpgFactory extends GameFactory {
  getGame(): Game {
    return new Rpg("WOW");
  }
}
