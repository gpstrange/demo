import { Component } from '@angular/core';
import { PptDrawerMode, PptDrawerService } from '@ppt/components/drawer';
import { PptComponentsComponent } from 'app/modules/admin/ui/ppt-components/ppt-components.component';

@Component({
    selector   : 'drawer',
    templateUrl: './drawer.component.html'
})
export class DrawerComponent
{
    drawerMode: PptDrawerMode;

    /**
     * Constructor
     */
    constructor(
        private _pptDrawerService: PptDrawerService,
        private _pptComponentsComponent: PptComponentsComponent
    )
    {
        // Set the defaults
        this.drawerMode = 'side';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     *
     * @param name
     */
    toggleDrawerMode(name: string): void
    {
        const drawer = this._pptDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.mode = drawer.mode === 'side' ? 'over' : 'side';
        }
    }

    /**
     * Toggle the drawer open
     *
     * @param name
     */
    toggleDrawerOpen(name: string): void
    {
        const drawer = this._pptDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.toggle();
        }
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._pptComponentsComponent.matDrawer.toggle();
    }
}
