import { Component } from '@angular/core';
import { PptComponentsComponent } from 'app/modules/admin/ui/ppt-components/ppt-components.component';

@Component({
    selector   : 'card',
    templateUrl: './card.component.html'
})
export class CardComponent
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
