export class ProductItemModel{
    img: string;
    description: string;
    CardTitle: string;
    price: number;

    constructor(img: string, description: string, CardTitle: string, price: number) {
        this.img = img;
        this.description = description;
        this.CardTitle = CardTitle;
        this.price = price;
       }
}