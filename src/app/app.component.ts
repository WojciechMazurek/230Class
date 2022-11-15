import { Component } from '@angular/core';

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
  }
}
