import { NgModule } from '@angular/core';
import { PptUtilsService } from '@ppt/services/utils/utils.service';

@NgModule({
    providers: [
        PptUtilsService
    ]
})
export class PptUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _pptUtilsService: PptUtilsService)
    {
    }
}
