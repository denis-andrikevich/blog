import { PostService } from './../../../services/post.service';
import { Post } from './../../../interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-posts-list',
    templateUrl: 'posts-list.component.html'
})
export class PostsListComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.loadAll()
            .subscribe(response => this.posts = response);
    }
}