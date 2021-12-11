import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptMasonryComponent } from '@ppt/components/masonry/masonry.component';

@NgModule({
    declarations: [
        PptMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        PptMasonryComponent
    ]
})
export class PptMasonryModule
{
}
