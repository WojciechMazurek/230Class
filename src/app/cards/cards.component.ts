import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() img: string;
  @Input() description: string;
  @Input() CardTitle: string;
  @Input() price: number;


  constructor() {
    this.img = "";
    this.description = "Missing Description";
    this.CardTitle = "Missing Title";
    this.price = 0.00;
   }

  ngOnInit(): void {
  }

}
