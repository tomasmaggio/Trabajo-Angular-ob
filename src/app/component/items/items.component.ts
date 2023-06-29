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
    
  }

}
