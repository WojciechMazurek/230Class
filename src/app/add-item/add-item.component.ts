import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../cards/product-item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addItem(product:ProductItemModel){
    console.log("You Clicked the button");
    console.log(product);
  }
}
