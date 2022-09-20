import { Component } from '@angular/core';
import { mock_product_list } from './cards/mock-product-list';
import { ProductItemModel } from './cards/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'target-app';
  products: ProductItemModel [] = [];
  constructor() {
    for ( var product of mock_product_list){
      //console.log(product)
      this.products.push(product);
    }
  }
}
