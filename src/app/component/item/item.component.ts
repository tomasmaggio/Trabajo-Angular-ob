import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  @Input() item : Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  constructor () {}

  ngOnInit(): void {
    
  }

  onDelete(item: Item){ //boton de eliminar
    this.deleteItem.emit(item);
  }

}
