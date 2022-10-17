import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://target-app-e7920-default-rtdb.firebaseio.com/";
    private productsEndPoint = "products";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndPoint + '.json');
    }
    getProduct(index:number){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndPoint +'/' + index + '.json');
    }
}