import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
 item:any;
 name:'';
 nickname:'';
 age:''

  constructor(private NavCtrl:NavController,private route: ActivatedRoute) {
  
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.item = JSON.parse(params["profile"]);
      this.name=this.item.name;
      this.nickname=this.item.nickname;
      this.age=this.item.age;


  });
  }
  
  submit(){

    console.log("Button ok");

this.NavCtrl.navigateBack('home');
  }
}
