import { Fps } from "../classes/fps";
import { Game } from "../interfaces/game.interface";
import { GameFactory } from "./game.factory";

export class FpsFactory extends GameFactory{
    getGame(): Game{
        return new Fps('CSGO')
    }
}
