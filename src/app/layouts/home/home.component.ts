import { Component, OnInit } from '@angular/core';

import { ProductItemModel } from 'src/app/cards/product-item.model';
import { ProductsService } from 'src/app/cards/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: ProductItemModel[] = [];

  constructor(private productsService:ProductsService) {
 
   }

  ngOnInit(): void {
   this.productsService.getProducts().subscribe((data: ProductItemModel[])=>{
    for (var x of data){
      console.log(x);
      this.products.push(x)
    }
   })
  }

}
