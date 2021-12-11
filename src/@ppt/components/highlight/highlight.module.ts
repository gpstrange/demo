import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptHighlightComponent } from '@ppt/components/highlight/highlight.component';

@NgModule({
    declarations: [
        PptHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        PptHighlightComponent
    ]
})
export class PptHighlightModule
{
}
