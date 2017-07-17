import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BreakdownPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-breakdown',
  templateUrl: 'breakdown.html',
})
export class BreakdownPage {

months: number = 0;
mortgageAmount = this.navParams.get('param1');
interest = this.navParams.get('param2');
payment = this.navParams.get('param3');
list: any = [];
kreditdauerManz: any;
kreditdauerJanz: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakdownPage');
    console.log(this.mortgageAmount);
    console.log(this.interest);
    console.log(this.payment);
    this.calculateMortgage();
  }

  calculateMortgage() {

      while(this.mortgageAmount > this.payment) {
        console.log("while loop was executed");
        var tilgung = this.payment - (this.mortgageAmount*(this.interest/100))/12;
        this.mortgageAmount = this.mortgageAmount - tilgung;
        this.months++;
        this.list.push(this.months + ". Rest: " + this.mortgageAmount.toFixed(2) + "€ Tilgung: " + tilgung.toFixed(2) + "€ Zinsen: " + (this.payment - tilgung).toFixed(2) + "€");
        console.log(this.months + " Rest: " + this.mortgageAmount + " Tilgung: " + tilgung + " Zinsen: " + (this.payment - tilgung));
      }

      var kreditdauerM = this.months + 1;
      var kreditdauerJ = kreditdauerM/12;
      this.kreditdauerManz = kreditdauerM;
      this.kreditdauerJanz = kreditdauerJ.toFixed(1);

      console.log(kreditdauerM + "Letzter monat mit Restbetrag von " + this.mortgageAmount + " kredit ausbezahlt");
      console.log("Kreditdauer: " + kreditdauerM + " Monate oder ca. " + kreditdauerJ + " Jahre");
      this.months = 0;

  }

}
