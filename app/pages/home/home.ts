import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { BuyProductPage } from '../buy-product/buy-product';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    

  }
  openOrderPage(){
    this.navCtrl.push(OrderPage);
  }
  openBuyProductPage(){
    this.navCtrl.push(BuyProductPage);
  }
}