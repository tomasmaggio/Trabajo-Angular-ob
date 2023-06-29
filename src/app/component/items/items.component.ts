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
        tittle: 'papa frita',
        price: 3.5,
        quantity: 2,
        completed: true
      }

    ]
  }

}
