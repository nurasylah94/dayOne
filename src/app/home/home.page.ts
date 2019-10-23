import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import {NavController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
profile: any={
  name:'',
  nickname:'',
  age:''
}
  constructor(private NavCtrl:NavController, private alertController: AlertController) {}

  //constructor(private router: Router, private route: Route, private navigate: NavigationExtras) {}

 async submit(){
    
  //to bring along the value from home
    let navigationExtras: NavigationExtras = {
      queryParams: {
          profile: JSON.stringify(this.profile),
         
      }
  };
    console.log("Button ok");
    
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to submit this data?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.NavCtrl.navigateForward(['about'], navigationExtras);
          }
        }
      ]
    });

    await alert.present();
    


  }

}
