import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  tittle: string = '';
  price: number | null = null;
  quantity: number | null = null;;

  constructor (private itemService: ItemService, private router: Router){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.tittle = this.tittle;
    item.price = this.price !== null && this.price !== undefined ? this.price : 0;
    item.quantity = this.quantity !== null && this.quantity !== undefined ? this.quantity : 0;
    item.completed = false

    this.itemService.addItem(item);
    this.router.navigate(['/'])

  }

}
