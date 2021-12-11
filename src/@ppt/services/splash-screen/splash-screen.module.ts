import { NgModule } from '@angular/core';
import { PptSplashScreenService } from '@ppt/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        PptSplashScreenService
    ]
})
export class PptSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _pptSplashScreenService: PptSplashScreenService)
    {
    }
}
