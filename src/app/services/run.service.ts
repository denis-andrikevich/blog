import { AuthService } from './auth.service';
import { ApiHttp } from './apiHttp.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RunService {
    constructor(private authService: AuthService) {
        console.log(this.authService)
    }
}
