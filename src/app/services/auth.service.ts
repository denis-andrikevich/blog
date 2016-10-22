import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ApiHttp } from './apiHttp.service';
import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndpoint } from '../constants/api.constants';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  redirectUrl: string;

  constructor(private apiHttp: ApiHttp, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('auth_token');
  }

  register(user: User): Observable<boolean> {
    return this.apiHttp.post(ApiEndpoint.domen + '/users', user)
      .map((response: Response) => {
        return this.afterLogin(response);
      });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.apiHttp.post(ApiEndpoint.domen + '/auth/local', { email, password })
      .map((response: Response) => {
        return this.afterLogin(response);
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  me(): Observable<any> {
    return this.apiHttp.get(ApiEndpoint.domen + '/users/me')
      .map(data => data.json());
  }

  afterLogin(response): boolean {
    if (response.status === 200) {
      localStorage.setItem('auth_token', response.json().token);
      this.isLoggedIn = true;
      return true;
    } return false;
  }

}
