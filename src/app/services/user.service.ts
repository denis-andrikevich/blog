import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ApiEndpoint } from '../constants/api.constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  loggedIn: Boolean;
  constructor(private http: Http, private router: Router) { 
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  register(user: User){
    this.http.post(ApiEndpoint.domen + '/users', user)
      .map(data => data.json())
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem('auth_token', response.token);
          this.loggedIn = true;
        }
      )
  }

  login(email: string, password: string){
    this.http.post(ApiEndpoint.domen + '/auth/local', {email, password})
      .map(data => data.json())
      .subscribe(
        response => {
          localStorage.setItem('auth_token', response.token);
          this.me();
        }
      )
  }

  logout(){
    localStorage.removeItem('auth_roken');
    this.loggedIn = false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  me(){
    let token = localStorage.getItem('auth_token');
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', `Bearer ${token}`)
    let options = new RequestOptions({ headers: headers });

    this.http.get(ApiEndpoint.domen + '/users/me', options)
      .map(data => data.json())
      .subscribe(
        response => console.log(response)
      )
  }

}
