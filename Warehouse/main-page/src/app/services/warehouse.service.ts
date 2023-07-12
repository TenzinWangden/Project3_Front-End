import { Injectable } from '@angular/core';
import { Address } from '../models/address';
import { Warehouse } from '../about/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  warehouses=[new Warehouse(123, "Indianapolis", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000"),
  new Warehouse(123, "Nashville", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000"),
  new Warehouse(123, "OKC", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000"),
  new Warehouse(123, "Virginia", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000")]
  constructor() { }

  getWarehouses(){
    return this.warehouses;
  }
}
