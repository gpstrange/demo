import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PptScrollbarModule } from '@ppt/directives/scrollbar/public-api';
import { PptHorizontalNavigationBasicItemComponent } from '@ppt/components/navigation/horizontal/components/basic/basic.component';
import { PptHorizontalNavigationBranchItemComponent } from '@ppt/components/navigation/horizontal/components/branch/branch.component';
import { PptHorizontalNavigationDividerItemComponent } from '@ppt/components/navigation/horizontal/components/divider/divider.component';
import { PptHorizontalNavigationSpacerItemComponent } from '@ppt/components/navigation/horizontal/components/spacer/spacer.component';
import { PptHorizontalNavigationComponent } from '@ppt/components/navigation/horizontal/horizontal.component';
import { PptVerticalNavigationAsideItemComponent } from '@ppt/components/navigation/vertical/components/aside/aside.component';
import { PptVerticalNavigationBasicItemComponent } from '@ppt/components/navigation/vertical/components/basic/basic.component';
import { PptVerticalNavigationCollapsableItemComponent } from '@ppt/components/navigation/vertical/components/collapsable/collapsable.component';
import { PptVerticalNavigationDividerItemComponent } from '@ppt/components/navigation/vertical/components/divider/divider.component';
import { PptVerticalNavigationGroupItemComponent } from '@ppt/components/navigation/vertical/components/group/group.component';
import { PptVerticalNavigationSpacerItemComponent } from '@ppt/components/navigation/vertical/components/spacer/spacer.component';
import { PptVerticalNavigationComponent } from '@ppt/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        PptHorizontalNavigationBasicItemComponent,
        PptHorizontalNavigationBranchItemComponent,
        PptHorizontalNavigationDividerItemComponent,
        PptHorizontalNavigationSpacerItemComponent,
        PptHorizontalNavigationComponent,
        PptVerticalNavigationAsideItemComponent,
        PptVerticalNavigationBasicItemComponent,
        PptVerticalNavigationCollapsableItemComponent,
        PptVerticalNavigationDividerItemComponent,
        PptVerticalNavigationGroupItemComponent,
        PptVerticalNavigationSpacerItemComponent,
        PptVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        PptScrollbarModule
    ],
    exports     : [
        PptHorizontalNavigationComponent,
        PptVerticalNavigationComponent
    ]
})
export class PptNavigationModule
{
}
