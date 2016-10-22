import { Post } from './../interfaces/post';
import { ApiEndpoint } from './../constants/api.constants';
import { Observable } from 'rxjs/Rx';
import { ApiHttp } from './apiHttp.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

    constructor(private apiHttp: ApiHttp) { }
    
    create(post: Post): Observable<Post>{
        return this.apiHttp.post(ApiEndpoint.domen + '/posts', post)
            .map(data => data.json());
    }
    
    loadAll(): Observable<Post[]>{
        return this.apiHttp.get(ApiEndpoint.domen + '/posts')
            .map(data => data.json());
    }
}