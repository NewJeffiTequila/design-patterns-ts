import { ProductsBuilderInterface } from "../interfaces/product-builder-interface";
import { Cpu } from "./cpu";
import { GraphicCard } from "./graphic-card";
import { Order } from "./order";

export class GamingPcBuilder implements ProductsBuilderInterface {
  private _order: Order = new Order();

  reset(): this {
    this._order = new Order();
    return this;
  }

  makeOrder(): this {
    const cpu = new Cpu(`Ryzen 5 1600`, 1000);
    const gaphicCard = new GraphicCard("GTX 1050", 1000);
    this._order.add(gaphicCard, cpu);
    return this;
  }
  getOrder(): Order {
      return this._order;
  }
}
