import { Address } from "./address";

export class Warehouse {
  constructor(
    public id: number,
    public name: string,
    public address: Address,
    public size: string
  ) {}
}
