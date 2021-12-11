import { Component } from '@angular/core';
import { PptComponentsComponent } from 'app/modules/admin/ui/ppt-components/ppt-components.component';

@Component({
    selector   : 'splash-screen',
    templateUrl: './splash-screen.component.html'
})
export class SplashScreenComponent
{
    /**
     * Constructor
     */
    constructor(private _pptComponentsComponent: PptComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._pptComponentsComponent.matDrawer.toggle();
    }
}
