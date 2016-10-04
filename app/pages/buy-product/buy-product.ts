import { Component } from '@angular/core';
import { NavController, AlertController,ModalController,ViewController,NavParams } from 'ionic-angular';


/*
  Generated class for the BuyProductPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/buy-product/buy-product.html',
})
export class BuyProductPage {
  basket:any = [{ pid: '2', productName: 'book', price: '120', desc: 'หนังสือ', logo: 'images/book.png' },
  { pid: '3', productName: 'note book', price: '50', desc: 'สมุด', logo: 'images/notebook.png' }];

  constructor(private navCtrl: NavController, private navParams : NavParams, public alertCtrl: AlertController,public modalCtrl: ModalController,public viewCtrl: ViewController) {

  }

  deleteItem(item) {
    let confirm = this.alertCtrl.create({
      title: 'ยืนยันการลบสินค้า',
      message: `คุณต้องการลบ ${item.productName} ออกจากตะกร้าสินค้าใช่หรือไม่`,
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            for (let i = 0; i < this.basket.length; i++) {
              if (this.basket[i].pid == item.pid) {
                this.basket.splice(i, 1);
                break;
              }
            }
          }
        }
      ]
    });
    confirm.present();
  }

  presentModal() {
    
    let modal = this.modalCtrl.create(ProductPage);
    modal.present();
    
  }

}

@Component({
  templateUrl: 'build/pages/buy-product/product.html',
})
export class ProductPage {
  product:any = [{ pid: '1', productName: 'chair', price: '1500', desc: 'เก้าอี้', logo: 'images/chair.png' },
    { pid: '2', productName: 'book', price: '120', desc: 'หนังสือ', logo: 'images/book.png' },
    { pid: '3', productName: 'note book', price: '50', desc: 'สมุด', logo: 'images/notebook.png' },
    { pid: '4', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { pid: '5', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { pid: '6', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { pid: '7', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { pid: '8', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { pid: '9', productName: 'pencil', price: '10', desc: 'ดินสอ', logo: 'images/pencil.png' }];

  selectProduct:any = [];

  constructor(private navCtrl: NavController,public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();   
  }

  itemSelected(item){
    console.log(item);
    this.selectProduct.push(item);
    this.viewCtrl.dismiss();
    // let bpg = new BuyProductPage(null,null,null,null,null);
    // bpg.basket = this.selectProduct;
    // this.navCtrl.push(BuyProductPage,{'selectProduct':this.selectProduct});
  }
}
