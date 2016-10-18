import { ApiHttp } from './apiHttp.service';
import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ApiEndpoint } from '../constants/api.constants';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  loggedIn: Boolean;
  constructor(private apiHttp: ApiHttp, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  register(user: User) {
    this.apiHttp.post(ApiEndpoint.domen + '/users', user)
      .map(data => data.json())
      .subscribe(
      response => {
        console.log(response);
        this.loggedIn = true;
      }
      )
  }

  login(email: string, password: string) {
    this.apiHttp.post(ApiEndpoint.domen + '/auth/local', { email, password })
      .map(data => data.json())
      .subscribe(
      response => {
        localStorage.setItem('auth_token', response.token);
        this.me();
      }
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  me() {

    this.apiHttp.get(ApiEndpoint.domen + '/users/me')
      .map(data => data.json())
      .subscribe(
      response => console.log(response)
      )
  }

}
