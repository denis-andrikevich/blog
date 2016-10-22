import { AccountRouting } from './account-routing.module';
import { NgModule } from '@angular/core';

import { AccountComponent }   from './account.component';

@NgModule({
    imports: [AccountRouting],
    exports: [],
    declarations: [AccountComponent],
    providers: [],
})
export class AccountModule { }
