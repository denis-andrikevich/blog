import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';

const routing: Routes = [
    { path: '', component: AccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule],
    providers: []
})
export class AccountRouting {}