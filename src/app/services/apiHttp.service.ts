import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Response, Headers, Http } from '@angular/http';

@Injectable()
export class ApiHttp {
    private errorObservable: Observable<any>;
    private errorObserver: Observer<any>;
    constructor(private http: Http) {
        this.errorObservable = Observable.create((observer: Observer<any>) => {
            this.errorObserver = observer;
        }).share();
    }

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
                    this.notifyError(err);
                    return Observable.empty();
                } else {
                    return Observable.throw(err);
                }
            });
    }

    notifyError(error: any) {
        this.errorObserver.next(error);
    }

    onError(callback: (err: any) => void) {
        this.errorObservable.subscribe(callback);
    }
}

