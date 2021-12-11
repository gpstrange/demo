import { NgModule } from '@angular/core';
import { PptFindByKeyPipe } from '@ppt/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        PptFindByKeyPipe
    ],
    exports     : [
        PptFindByKeyPipe
    ]
})
export class PptFindByKeyPipeModule
{
}
