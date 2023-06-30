import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor ( ) { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        tittle: 'Hamburguesa',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        tittle: 'Papa frita Lays',
        price: 3.5,
        quantity: 2,
        completed: true
      },
      {
        id: 2,
        tittle: 'Coca-Cola',
        price: 8,
        quantity: 1,
        completed: false
      }

    ]
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id)
  }
}
