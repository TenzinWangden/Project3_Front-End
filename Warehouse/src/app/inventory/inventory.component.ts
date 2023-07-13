import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Typecheck } from '../models/typecheck';
​
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  itemList: Item[]=[];
  typeList: Typecheck[] = [];
  allItems: Item[]=[];
​
  constructor(private itemService: ItemService){}
​
  ngOnInit(): void {
   this.itemService.findAll().subscribe((data) => {
    if(data.body != null){
      this.allItems = data.body;
      this.itemList= this.allItems;
    }
    // ngOnInit(): void {
    //   this.itemService.add().subscribe((data) => {
    //    if(data.body != null){
    //      this.allItems = data.body;
    //      this.itemList= this.allItems;
    //    }

   });
    this.typeList.push(new Typecheck(1, "gummies", false));
    this.typeList.push(new Typecheck(2, "chocolate", false));
    this.typeList.push(new Typecheck(3, "hardcandy", false));
    this.typeList.push(new Typecheck(4, "gum", false));
    this.typeList.push(new Typecheck(5, "taffy", false));
    this.typeList.push(new Typecheck(6, "licorice", false));
    this.typeList.push(new Typecheck(7, "drinks", false));
    this.typeList.push(new Typecheck(8, "sours", false));
    this.typeList.push(new Typecheck(9, "cakes", false));
    this.typeList.push(new Typecheck(10, "muffins", false));

  }

  filter(type: Typecheck): void{
    let i = this.typeList.findIndex(t => t.type_id == type.type_id);
    this.typeList[i].checked= !this.typeList[i].checked;

    // grab all the active filters (just the id's)
    let active = this.typeList.filter(type => type.checked == true).map(t => t.type_id);

    if (active.length > 0) {
      // displayed items now reflect the active filters
      this.itemList = this.allItems.filter(item => active.includes(item.type_id));
    } else {
      this.itemList = this.allItems;
    }

    // this.typeList.forEach(type => console.log(type.description + ": " + type.checked))
  }

}