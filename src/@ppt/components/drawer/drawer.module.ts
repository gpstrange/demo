import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptDrawerComponent } from '@ppt/components/drawer/drawer.component';

@NgModule({
    declarations: [
        PptDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        PptDrawerComponent
    ]
})
export class PptDrawerModule
{
}
