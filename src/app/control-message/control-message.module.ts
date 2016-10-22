import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlMessageComponent }   from './control-message.component';

@NgModule({
    imports: [CommonModule],
    exports: [ControlMessageComponent],
    declarations: [ControlMessageComponent],
    providers: [],
})
export class ControlMessageModule { }
