import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BreakdownPage } from '../breakdown/breakdown';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 mortgageAmount: number;
 interest: number;
 payment: number;

  constructor(public navCtrl: NavController) {

  }

  clicked() {
    console.log("button clicked!");
    console.log("mortgage: " + this.mortgageAmount);
    console.log("interest: " + this.interest);
    console.log("payment: " + this.payment);
    this.navCtrl.push(BreakdownPage, {param1: this.mortgageAmount, param2: this.interest, param3: this.payment});
  }

}
