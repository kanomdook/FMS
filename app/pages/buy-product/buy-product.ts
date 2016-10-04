import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/buy-product/buy-product.html',
})
export class BuyProductPage {
  basket: any = [];

  constructor(private navCtrl: NavController, private navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, public viewCtrl: ViewController) {

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
              if (this.basket[i].id == item.id) {
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

  arrayIndexOf(myArr, key) {
    let result = -1;
    myArr.forEach(function (idx) {
      if (idx.id == key.id) result++;
    });
    return result;
  }

  presentModal() {
    let modal = this.modalCtrl.create(ProductPage);
    modal.onDidDismiss(data => {
      
      if (this.arrayIndexOf(this.basket, data) != -1) {
        let selected = this.basket.filter(function(itm){
          return itm.id == data.id;
        })[0];
        
        selected.qty++;
        selected.totalPrice = selected.price * selected.qty;
      } else {
        data.qty = 1;
        data.totalPrice = data.price * data.qty;
        this.basket.push(data);
      }
    });
    modal.present();
  }
}

@Component({
  templateUrl: 'build/pages/buy-product/product-modal.html',
})
export class ProductPage {
  product: any = [{ id: '1', productName: 'chair', price: '1500', desc: 'เก้าอี้', logo: 'images/chair.png' },
    { id: '2', productName: 'book', price: '120', desc: 'หนังสือ', logo: 'images/book.png' },
    { id: '3', productName: 'note book', price: '50', desc: 'สมุด', logo: 'images/notebook.png' },
    { id: '4', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { id: '5', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { id: '6', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { id: '7', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { id: '8', productName: 'pen', price: '15', desc: 'ปากกา', logo: 'images/pen.png' },
    { id: '9', productName: 'pencil', price: '10', desc: 'ดินสอ', logo: 'images/pencil.png' }];

  constructor(private navCtrl: NavController, public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  itemSelected(item) {
    this.viewCtrl.dismiss(item);
  }
}
