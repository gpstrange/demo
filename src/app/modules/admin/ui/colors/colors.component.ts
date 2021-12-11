import { Component, ViewEncapsulation } from '@angular/core';
import { pptAnimations } from '@ppt/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    animations   : pptAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
