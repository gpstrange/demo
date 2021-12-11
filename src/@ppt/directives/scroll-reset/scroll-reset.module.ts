import { NgModule } from '@angular/core';
import { PptScrollResetDirective } from '@ppt/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        PptScrollResetDirective
    ],
    exports     : [
        PptScrollResetDirective
    ]
})
export class PptScrollResetModule
{
}
