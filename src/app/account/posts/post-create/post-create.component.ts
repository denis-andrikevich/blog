import { Post } from './../../../interfaces/post';
import { PostService } from './../../../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: 'post-create.component.html'
})
export class PostCreateComponent implements OnInit {
    post: FormGroup;

    constructor(private _fb: FormBuilder, private postService: PostService) { }

    ngOnInit() {
        this.post = this._fb.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]]
        });
    }

    onSubmit(post: Post){
        this.postService.create(post)
            .subscribe(response => console.log(response));
    }

    
}