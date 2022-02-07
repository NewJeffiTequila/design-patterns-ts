import { GamingPcBuilder } from "./classes/gaming-pc-builder";

const gamingPcBuilder = new GamingPcBuilder()
gamingPcBuilder.makeOrder()
console.log(gamingPcBuilder.getOrder().getPrice());
