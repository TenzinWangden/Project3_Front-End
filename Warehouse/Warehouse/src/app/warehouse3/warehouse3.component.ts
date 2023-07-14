import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-warehouse3',
  templateUrl: './warehouse3.component.html',
  styleUrls: ['./warehouse3.component.css']
})
export class Warehouse3Component {
  warehouse: Warehouse[] = []

  constructor(public warehouseService: WarehouseService){}

  ngOnInit(){
    this.warehouse = this.warehouseService.getWarehouses()
  }
}
