import { Game } from "../interfaces/game.interface";

export class Fps implements Game {
  constructor(private name: string) {}
  play(PlayerName: string): void {
    return console.log(`${PlayerName} comecou a jogar ${this.name}`);
    

  }
  upLevel(): void {
    return console.log(`${this.name} subiu um nivel`)
  }
}
