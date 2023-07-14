import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { Warehouse } from '../models/warehouse';

@Component({
  selector: 'app-warehouse2',
  templateUrl: './warehouse2.component.html',
  styleUrls: ['./warehouse2.component.css']
})
export class Warehouse2Component {
  warehouse: Warehouse[] = []

  constructor(public warehouseService: WarehouseService){}

  ngOnInit(){
    this.warehouse = this.warehouseService.getWarehouses()
  }
}



