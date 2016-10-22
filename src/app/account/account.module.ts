import { CommonModule } from '@angular/common';
import { ControlMessageModule } from './../control-message/control-message.module';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountRouting } from './account-routing.module';
import { NgModule } from '@angular/core';

import { AccountComponent }   from './account.component';

@NgModule({
    imports: [
        AccountRouting,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        ControlMessageModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        AccountComponent, 
        ProfileComponent,
        PostsComponent,
        PostsListComponent,
        PostCreateComponent
    ],
    providers: [],
})
export class AccountModule { }
