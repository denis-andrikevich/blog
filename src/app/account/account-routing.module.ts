import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';

const routing: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: '', component: ProfileComponent },
        { path: 'posts', component: PostsComponent, children: [
            { path: '', component: PostsListComponent },
            { path: 'create', component: PostCreateComponent }
        ] }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule],
    providers: []
})
export class AccountRouting {}