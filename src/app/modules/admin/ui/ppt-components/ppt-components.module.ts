import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { PptCardModule } from '@ppt/components/card';
import { PptDateRangeModule } from '@ppt/components/date-range';
import { PptDrawerModule } from '@ppt/components/drawer';
import { PptHighlightModule } from '@ppt/components/highlight';
import { PptAlertModule } from '@ppt/components/alert';
import { PptMasonryModule } from '@ppt/components/masonry/masonry.module';
import { PptNavigationModule } from '@ppt/components/navigation';
import { PptScrollResetModule } from '@ppt/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { PptComponentsComponent } from 'app/modules/admin/ui/ppt-components/ppt-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/ppt-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/ppt-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/ppt-components/components/card/card.component';
import { DateRangeComponent } from 'app/modules/admin/ui/ppt-components/components/date-range/date-range.component';
import { DrawerComponent } from 'app/modules/admin/ui/ppt-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/ppt-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/ppt-components/components/highlight/highlight.component';
import { NavigationComponent } from 'app/modules/admin/ui/ppt-components/components/navigation/navigation.component';
import { MasonryComponent } from 'app/modules/admin/ui/ppt-components/components/masonry/masonry.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/ppt-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/ppt-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/ppt-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/ppt-components/services/confirmation/confirmation.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/ppt-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/ppt-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/ppt-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/ppt-components/validators/must-match/must-match.component';
import { pptComponentsRoutes } from 'app/modules/admin/ui/ppt-components/ppt-components.routing';

@NgModule({
    declarations: [
        PptComponentsComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DateRangeComponent,
        DrawerComponent,
        FullscreenComponent,
        HighlightComponent,
        MasonryComponent,
        NavigationComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        ConfirmationComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports: [
        RouterModule.forChild(pptComponentsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        PptAlertModule,
        PptCardModule,
        PptDateRangeModule,
        PptDrawerModule,
        PptHighlightModule,
        PptMasonryModule,
        PptNavigationModule,
        PptScrollResetModule,
        SharedModule
    ]
})
export class PptComponentsModule
{
}
