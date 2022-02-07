import { ProductsCompositeInterface } from "../interfaces/products-composite-interface";

export abstract class AbstractProduct implements ProductsCompositeInterface{
    constructor(private name : string, private price: number){}
    getPrice(): number {
        return this.price
    }

}