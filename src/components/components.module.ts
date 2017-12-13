import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";

import {CustomNavbarComponent} from './custom-navbar/custom-navbar';
import {CustomButtonComponent} from './custom-button/custom-button';

@NgModule({
	declarations: [
	  CustomNavbarComponent,
    CustomButtonComponent
  ],
	imports: [
    IonicPageModule.forChild(CustomNavbarComponent),
    IonicPageModule.forChild(CustomButtonComponent),
  ],
	exports: [
	  CustomNavbarComponent,
    CustomButtonComponent
  ]
})
export class ComponentsModule {}
