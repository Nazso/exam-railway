import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-items',
  templateUrl: './buy-items.component.html',
  styleUrls: ['./buy-items.component.scss']
})
export class BuyItemsComponent implements OnInit {

  public priceOfLittleModels = 0;
  public priceOfMiddleModels = 0;
  public priceOfBigModels = 0;
  // public modelSize = this.datalistOptions.value;
  
  public itemsLittle = 0;
  public itemsMiddle = 0;
  public itemsBig = 0;

  public priceSum = 0;

  constructor() { }

  ngOnInit(): void {
  }

  itemsPriceLittle() {
    this.priceOfLittleModels = this.itemsLittle * 2000;
    console.log(this.priceOfLittleModels);
  }

  riseNumberLittle() {
    this.itemsLittle ++
    this.itemsPriceLittle()
    this.sum()
  }

  decreaseNumberLittle() {
    if(this.itemsLittle > 0) {
      this.itemsLittle --
    } else {
      this.itemsLittle = 0;
    }
    this.itemsPriceLittle()
    this.sum()
  }

  itemsPriceMiddle() {
    this.priceOfMiddleModels = this.itemsMiddle * 4000;
    console.log(this.priceOfMiddleModels);
  }

  riseNumberMiddle() {
    this.itemsMiddle ++
    this.itemsPriceMiddle()
    this.sum()
  }

  decreaseNumberMiddle() {
    if(this.itemsMiddle > 0) {
      this.itemsMiddle --
    } else {
      this.itemsMiddle = 0;
    }
    this.itemsPriceMiddle()
    this.sum()
  }
  itemsPriceBig() {
    this.priceOfBigModels = this.itemsBig * 6000;
    console.log(this.priceOfBigModels);
  }

  riseNumberBig() {
    this.itemsBig ++
    this.itemsPriceBig()
    this.sum()
  }

  decreaseNumberBig() {
    if(this.itemsBig > 0) {
      this.itemsBig --
    } else {
      this.itemsBig = 0;
    }
    this.itemsPriceBig()
    this.sum()
  }

  sum() {
    this.priceSum = this.priceOfLittleModels + this.priceOfMiddleModels + this.priceOfBigModels

  }

}
