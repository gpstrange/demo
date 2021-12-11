import { NgModule } from '@angular/core';
import { PptMediaWatcherService } from '@ppt/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        PptMediaWatcherService
    ]
})
export class PptMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _pptMediaWatcherService: PptMediaWatcherService)
    {
    }
}
