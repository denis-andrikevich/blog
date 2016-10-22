import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AppValidators } from '../validators/app-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: boolean = false;
  constructor(private _fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  onSubmit() {
    this.authService.login(this.form.value.email, this.form.value.password)
    .subscribe(status => {
      if (status){
        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.authService.redirectUrl = '/';
        this.router.navigate([redirectUrl]);
      } else {
        this.showErrorMessage();
      }
    });
  }

  showErrorMessage(){
    this.errorMessage = true;
    setTimeout(() => this.errorMessage = false, 1000);
  }

  ngOnInit(){
     this.form = this._fb.group({
      email: ['', [Validators.required, AppValidators.emailValidator]],
      password: ['', [Validators.required, AppValidators.passwordValidator]]
    });
  }

}
