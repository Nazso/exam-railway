import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BuyItem } from '../../models/buyItem.model';
import { NgForm } from '@angular/forms';
import { DieselModel } from '../../models/diesel.model';
import { AuthService } from 'src/app/services/auth.service';
import { DieselService } from 'src/app/services/diesel.service';
import { BuyItemService } from 'src/app/services/buy-item.service';
import { Subscription } from 'rxjs';
import { ElectricModel } from 'src/app/models/electric.model';
import { ElectricService } from 'src/app/services/electric.service';

@Component({
  selector: 'app-buy-items',
  templateUrl: './buy-items.component.html',
  styleUrls: ['./buy-items.component.scss']
})
export class BuyItemsComponent implements OnInit, OnDestroy {

  private saveBuyItemSubscription?: Subscription;
  private userSignInSubscription?: Subscription;

  @Input() locoId: any;
  
  // public locoType: string = this.loco.type;
  public username = "";
  public loco: any;
  
  public priceOfLittleModels = 0;
  public priceOfMiddleModels = 0;
  public priceOfBigModels = 0;
  
  public itemsLittle = 0;
  public itemsMiddle = 0;
  public itemsBig = 0;

  public priceSum = 0;

  public userObject: any;

  public buyItemForm: BuyItem = {
    username: '',
    type: '',
    little: 0,
    middle: 0,
    big: 0,
    price: 0
  }


  constructor(
    private authService: AuthService,
    private dieselService: DieselService,
    private electricService: ElectricService,
    private buyItemService: BuyItemService) { }

  ngOnInit(): void {
    console.log(this.locoId)
    this.userSignInSubscription = this.authService.getUserLoggedInObject().subscribe(
      user => this.userObject = user
    )

    this.dieselService.getOneDiesel(this.locoId).subscribe(
      (loco: DieselModel) => this.loco = loco
    )

    this.electricService.getOneElectric(this.locoId).subscribe(
      (loco: ElectricModel) => this.loco = loco
    )
  }

  ngOnDestroy(): void {
    if(this.userSignInSubscription) this.userSignInSubscription.unsubscribe();
  }

  public valueChangedLittle(event: any) {
    this.itemsLittle = event.target.value;
    this.itemsPriceLittle()
    this.sum()
  }

  public valueChangedMid(event: any) {
    this.itemsMiddle = event.target.value;
    this.itemsPriceMiddle()
    this.sum()
  }

  public valueChangedBig(event: any) {
    this.itemsBig = event.target.value;
    this.itemsPriceBig()
    this.sum()
  }

  public itemsPriceLittle() {
    this.priceOfLittleModels = this.itemsLittle * 2000;
    console.log(this.priceOfLittleModels);
  }

  public itemsPriceMiddle() {
    this.priceOfMiddleModels = this.itemsMiddle * 4000;
    console.log(this.priceOfMiddleModels);
  }

  public itemsPriceBig() {
    this.priceOfBigModels = this.itemsBig * 6000;
    console.log(this.priceOfBigModels);
  }

  sum() {
    this.priceSum = this.priceOfLittleModels + this.priceOfMiddleModels + this.priceOfBigModels
  }

  public saveBuyItem(buyItemForm: NgForm) {
    console.log(buyItemForm.value)
    const observable = this.buyItemService.saveBuyItem(buyItemForm.value);
    this.saveBuyItemSubscription = observable.subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)},
      complete: () => {},
    })
  }

}
