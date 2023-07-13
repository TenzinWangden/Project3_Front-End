import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { Type } from '../models/type';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private itemService: ItemService){}
  model: Item = new Item(0, "", new Type(0, ""), 0, 0, 0);

  onSubmit(){
    console.log("in the on submit method")
    this.itemService.deleteItem(this.model).subscribe((data) => {
      console.log(data);});
    console.log("item deleted");
  }
}
