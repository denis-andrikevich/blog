import { Component, Input  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'control-messages',
  template: '<div *ngIf="errorMessage !== null">{{errorMessage}}</div>',
  styles: ['div {color: red; margin: 5px 0;}']
})

export class ControlMessageComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage(){
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this.errorMessages(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

  errorMessages(propertyName, minLength?: any):string {
    let config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${minLength.requiredLength}`
        };
    return config[propertyName];
  }



}
