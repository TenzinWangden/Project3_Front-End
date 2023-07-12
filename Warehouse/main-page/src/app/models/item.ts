export class Item {
    constructor(
        public item_id: number,
        public item_name: string,
        public type_id: number,
        public quantity: number,
        public warehouse_id: number,
        public popularity: number){}
}
