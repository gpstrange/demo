import { NgModule } from '@angular/core';
import { PptScrollbarDirective } from '@ppt/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        PptScrollbarDirective
    ],
    exports     : [
        PptScrollbarDirective
    ]
})
export class PptScrollbarModule
{
}
