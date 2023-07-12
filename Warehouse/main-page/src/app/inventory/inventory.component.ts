import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  itemList: Item[]=[];

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
   this.itemService.findAll().subscribe((data) => {
    if(data.body != null){
      this.itemList = data.body;
    }

   })
  }
}
