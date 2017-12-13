import { Component } from '@angular/core';

/**
 * Generated class for the CustomButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-button',
  templateUrl: 'custom-button.html'
})
export class CustomButtonComponent {

  text: string;

  constructor() {
    console.log('Hello CustomButtonComponent Component');
    this.text = 'Hello World';
  }

}
