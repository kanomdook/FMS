import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/*
  Generated class for the TradingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/trading/trading.html',
})
export class TradingPage {

  
  Trading = [
    {name:"เงินสด", icon:"http://image.bangkokbiznews.com/kt/media/image/news/2015/12/10/677853/640x390_677853_1449714692.jpg", type:"Electric", cp:"345"},
    {name:"HomePro", icon:"http://thinkofliving.com/wp-content/uploads/2013/03/Homepro.png", tel:"023564789", imgs:"643"},
    {name:"Big C", icon:"http://a1.mzstatic.com/us/r30/Purple1/v4/65/57/c4/6557c4ee-5248-016f-a12d-0db06363f0cd/icon175x175.png", tel:"027364842", cp:"342"},
    {name:"Lotus", icon:"http://www.tescolotus.com/assets/theme2016/img/logo.png", tel:"023873453", cp:"234"}    
  ]

  constructor(private navCtrl: NavController) {

  }

//   TradingSelected(){
// this.navCtrl.push()
//   }


}
