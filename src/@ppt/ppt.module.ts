import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PptConfirmationModule } from '@ppt/services/confirmation';
import { PptMediaWatcherModule } from '@ppt/services/media-watcher/media-watcher.module';
import { PptSplashScreenModule } from '@ppt/services/splash-screen/splash-screen.module';
import { PptTailwindConfigModule } from '@ppt/services/tailwind/tailwind.module';
import { PptUtilsModule } from '@ppt/services/utils/utils.module';

@NgModule({
    imports  : [
        PptConfirmationModule,
        PptMediaWatcherModule,
        PptSplashScreenModule,
        PptTailwindConfigModule,
        PptUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class PptModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: PptModule)
    {
        if ( parentModule )
        {
            throw new Error('PptModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
