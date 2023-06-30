import { Injectable } from '@angular/core';
import { Item } from '../models/items';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Item[] = [
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

  ];
  constructor() { }

  getItems(){


    return this.items; 
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}


