import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PptConfirmationService } from '@ppt/services/confirmation/confirmation.service';
import { PptConfirmationDialogComponent } from '@ppt/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PptConfirmationDialogComponent
    ],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        PptConfirmationService
    ]
})
export class PptConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _pptConfirmationService: PptConfirmationService)
    {
    }
}
