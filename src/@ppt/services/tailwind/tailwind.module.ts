import { NgModule } from '@angular/core';
import { PptTailwindService } from '@ppt/services/tailwind/tailwind.service';

@NgModule({
    providers: [
        PptTailwindService
    ]
})
export class PptTailwindConfigModule
{
    /**
     * Constructor
     */
    constructor(private _pptTailwindConfigService: PptTailwindService)
    {
    }
}
