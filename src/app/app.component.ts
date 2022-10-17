import { Component, OnInit } from '@angular/core';
import { mock_product_list } from './cards/mock-product-list';
import { ProductItemModel } from './cards/product-item.model';
import { ProductsService } from './cards/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'target-app';
  products: ProductItemModel [] = [];


  constructor(private productServece:ProductsService) {
    // for ( var product of mock_product_list){
    //   //console.log(product)
    //   this.products.push(product);
    // }
  }

  ngOnInit(): void{
    this.productServece.getProducts().subscribe((data: ProductItemModel [])=>{
      // console.log(data);
      for (var product of data){
        console.log(product)
        this.products.push(product);
      }
    });

  }
}
