import { Fps } from "./classes/fps";
import { FpsFactory } from "./factories/fps.factory";

const fpsFactory = new FpsFactory();
fpsFactory.pickGame("CSGO", "jeff");
