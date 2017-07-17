import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreakdownPage } from './breakdown';

@NgModule({
  declarations: [
    BreakdownPage,
  ],
  imports: [
    IonicPageModule.forChild(BreakdownPage),
  ],
  exports: [
    BreakdownPage
  ]
})
export class BreakdownPageModule {}
