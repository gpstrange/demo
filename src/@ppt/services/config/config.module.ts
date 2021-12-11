import { ModuleWithProviders, NgModule } from '@angular/core';
import { PptConfigService } from '@ppt/services/config/config.service';
import { PPT_APP_CONFIG } from '@ppt/services/config/config.constants';

@NgModule()
export class PptConfigModule
{
    /**
     * Constructor
     */
    constructor(private _pptConfigService: PptConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<PptConfigModule>
    {
        return {
            ngModule : PptConfigModule,
            providers: [
                {
                    provide : PPT_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
