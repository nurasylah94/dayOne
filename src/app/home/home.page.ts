import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private route: Route, private navigate: NavigationExtras) {}

 
  
  submit(){

    console.log("Button ok");

this.router.navigate(['about']);
  }

}
