import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptCardComponent } from '@ppt/components/card/card.component';

@NgModule({
    declarations: [
        PptCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        PptCardComponent
    ]
})
export class PptCardModule
{
}
