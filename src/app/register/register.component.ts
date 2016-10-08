import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator } from '../validators/email';

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
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, EmailValidator.mailFormat]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      sex: [this.sexs[0], Validators.required]
    })
  }

  onSubmit(){
    this.userService.register(this.form.value);
  }

}
