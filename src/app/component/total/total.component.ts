import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit{

  @Input() total:any;
  @Input() mensaje:string = ''

  constructor (){}

  ngOnInit(): void {

  }

}
