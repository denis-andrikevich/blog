import { AuthService } from './../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AppValidators } from '../validators/app-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private authService: AuthService) {
    this.form = this._fb.group({
      email: ['', [Validators.required, AppValidators.emailValidator]],
      password: ['', [Validators.required, AppValidators.passwordValidator]]
    });
  }

  onSubmit() {
    this.authService.login(this.form.value.email, this.form.value.password);
  }

}
