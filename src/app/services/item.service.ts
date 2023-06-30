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
      completed: false
    },
    {
      id: 2,
      tittle: 'Coca-Cola',
      price: 8,
      quantity: 1,
      completed: false
    },
    {
      id: 3,
      tittle: 'Pancho',
      price: 3,
      quantity: 18,
      completed: true
    },
    {
      id: 4,
      tittle: 'Leche',
      price: 20,
      quantity: 2,
      completed: true
    },
    {
      id: 5,
      tittle: 'Un perrito',
      price: 250,
      quantity: 1,
      completed: true
    },
    {
      id: 6,
      tittle: 'Juego de palos de golf',
      price: 550,
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


