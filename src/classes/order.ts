import { ProductsCompositeInterface } from "../interfaces/products-composite-interface";

export class Order implements ProductsCompositeInterface{
    private readonly _children:ProductsCompositeInterface[] = [];
    getPrice(): number {
        return this._children.reduce((sum, item) => sum + item.getPrice(), 0);
    }
    add(...products: ProductsCompositeInterface[]){
       products.forEach((product) => this._children.push(product))
    }
}