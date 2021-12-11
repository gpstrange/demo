import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PptAlertComponent } from '@ppt/components/alert/alert.component';

@NgModule({
    declarations: [
        PptAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        PptAlertComponent
    ]
})
export class PptAlertModule
{
}
