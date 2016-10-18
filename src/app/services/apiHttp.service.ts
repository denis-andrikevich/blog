import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Response, Headers, Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class ApiHttp {
    constructor(private http: Http, private _router: Router, private authService: AuthService) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('authorization', 'Bearer ' + localStorage.getItem('auth_token'));
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.intercept(this.http.get(url, {
            headers: headers
        }));
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.intercept(this.http.post(url, data, {
            headers: headers
        }));
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        observable.subscribe(data => console.log(data));
        return observable
            .catch((err, source) => {
                if (err.status === 401) {
                    this.authService.logout();
                    this._router.navigate(['/login']);
                    return Observable.empty();
                } else {
                    return Observable.throw(err);
                }
            });

    }
}

let apiHttpFactrory = (http: Http, router: Router, authService: AuthService) => new ApiHttp(http, router, authService);

export let apiHttpServiceProvider = {
    provide: ApiHttp,
    useFactory: apiHttpFactrory,
    deps: [Http, Router]
};
