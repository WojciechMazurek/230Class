import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://target-app-e7920-default-rtdb.firebaseio.com/";
    private productsEndPoint = "products";

    constructor(private db:AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<ProductItemModel>("products").valueChanges();
    }

    addProduct(product:ProductItemModel){
        this.db.list<ProductItemModel>("products").push(product);
    }
    // getProduct(index:number){
    //     return this.db.list<ProductItemModel []>(this.baseUrl + this.productsEndPoint +'/' + index + '.json');
    // }
    // addProduct(product: ProductItemModel){
    //     this.db.list<
    // }
}