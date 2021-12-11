import { Component } from '@angular/core';
import { PptComponentsComponent } from 'app/modules/admin/ui/ppt-components/ppt-components.component';

@Component({
    selector   : 'must-match',
    templateUrl: './must-match.component.html'
})
export class MustMatchComponent
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
