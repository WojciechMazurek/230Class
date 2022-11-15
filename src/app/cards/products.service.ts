import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private BaseUrl: string = "https://target-app-e7920-default-rtdb.firebaseio.com/"
    private productsEndPoint = "products"
    private imgsEndPoint = "allImgs"

    constructor(private http:HttpClient){}
    getProducts(){
        return this.http.get<ProductItemModel []>(this.BaseUrl + this.productsEndPoint + ".json")
    }
    getOneProduct(index:number){
        return this.http.get<ProductItemModel>(this.BaseUrl + this.productsEndPoint + "/"+ index + ".json")
    }
    getImgs(){
        return this.http.get(this.BaseUrl + this.imgsEndPoint + ".json")
    }
}