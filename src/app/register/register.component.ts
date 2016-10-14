import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ControlMessageComponent } from '../control-message/control-message.component';

import { AppValidators } from '../validators/app-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  sexs:string[] = ['men', 'women'];
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, AppValidators.emailValidator]],
      password: ['', [Validators.required, AppValidators.passwordValidator]],
      sex: [this.sexs[0], Validators.required]
    })
  }

  onSubmit(){
    this.userService.register(this.form.value);
  }

}
