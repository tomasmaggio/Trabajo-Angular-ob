import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  tittle: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor (){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.tittle = this.tittle;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false
  }

}
