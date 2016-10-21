import { ErrorNotifier } from './error-notifier.service';
import { Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response, Headers, Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class ApiHttp {
    constructor(private http: Http, private errorNotifier: ErrorNotifier) { }

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
        return observable
            .catch((err, source) => {
                if (err.status === 401) {
                    this.errorNotifier.notifyError(err);
                    return Observable.empty();
                } else {
                    return Observable.throw(err);
                }
            });

    }
}


// // let apiHttpFactrory = (http: Http, router: Router,  authService: AuthService) => new ApiHttp(http, router, authService);

// export let apiHttpServiceProvider = {
//     provide: ApiHttp,
//     useClass: ApiHttp
//     // useFactory: apiHttpFactrory,
//     // deps: [Http, Router]
// };

