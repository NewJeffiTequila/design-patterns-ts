import { Game } from "../interfaces/game.interface";

export abstract class GameFactory {
  abstract getGame(gameName: string): Game;
  pickGame(gameName: string, playerName: string): Game {
    const game = this.getGame(gameName);
    game.play(playerName);
    return game;
  }
}
