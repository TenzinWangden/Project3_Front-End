import { Address } from "./address";

export class Warehousecheck {
    constructor(
     public id: number,
    public name: string,
    public address: Address,
    public size: string,
        public checked: Boolean
    ){}
}
