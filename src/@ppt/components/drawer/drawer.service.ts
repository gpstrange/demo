import { Injectable } from '@angular/core';
import { PptDrawerComponent } from '@ppt/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class PptDrawerService
{
    private _componentRegistry: Map<string, PptDrawerComponent> = new Map<string, PptDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: PptDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): PptDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
