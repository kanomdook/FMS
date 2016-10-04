import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyProductPage } from '../buy-product/buy-product';


/*
  Generated class for the TradingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/trading/trading.html',
})
export class TradingPage {

  
  Trading:any = [
    {name:"เงินสด", icon:"images/money175x175.jpg", type:"Electric", cp:"345"},
    {name:"HomePro", icon:"images/Homepro175x175.png", tel:"023564789", imgs:"643"},
    {name:"Big C", icon:"images/big-c175x175.png", tel:"027364842", cp:"342"},
    {name:"Lotus", icon:"images/Lotus175x175.png", tel:"023873453", cp:"234"}    
  ]

  constructor(private navCtrl: NavController) {

  }

  addname(Modelname){
    this.Trading.push({name:Modelname});
  }

  TradingSelected(){
this.navCtrl.push(BuyProductPage)
  }


}
