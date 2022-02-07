import { AbstractProduct } from "./abstract-product";

export class MotherBoard extends AbstractProduct{}

const processador = new MotherBoard(`Ryzen 5 1600`, 1000)
console.log(processador)