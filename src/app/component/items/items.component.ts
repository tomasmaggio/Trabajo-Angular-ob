import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0

  constructor (private itemService:ItemService) { }

  ngOnInit(): void {
    //this.items = []
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id)
    this.getTotal(); //Cada vez que eliminemos un producto vamos a llamar a 'getotal' para actualizar el precio total
  }

  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                .filter( item => !item .completed)
                .map(item  => item .quantity * item.price )
                .reduce (( acc, item) => acc += item, 0 );
  }
}
