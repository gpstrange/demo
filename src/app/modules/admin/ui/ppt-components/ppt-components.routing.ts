import { Route } from '@angular/router';
import { PptComponentsComponent } from 'app/modules/admin/ui/ppt-components/ppt-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/ppt-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/ppt-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/ppt-components/components/card/card.component';
import { DateRangeComponent } from 'app/modules/admin/ui/ppt-components/components/date-range/date-range.component';
import { DrawerComponent } from 'app/modules/admin/ui/ppt-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/ppt-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/ppt-components/components/highlight/highlight.component';
import { MasonryComponent } from 'app/modules/admin/ui/ppt-components/components/masonry/masonry.component';
import { NavigationComponent } from 'app/modules/admin/ui/ppt-components/components/navigation/navigation.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/ppt-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/ppt-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/ppt-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/ppt-components/services/confirmation/confirmation.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/ppt-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/ppt-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/ppt-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/ppt-components/validators/must-match/must-match.component';

export const pptComponentsRoutes: Route[] = [
    {
        path     : '',
        component: PptComponentsComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'libraries/mock-api'
            },
            {
                path    : 'libraries',
                children: [
                    {
                        path     : 'mock-api',
                        component: MockApiComponent
                    }
                ]
            },
            {
                path    : 'components',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'alert'
                    },
                    {
                        path     : 'alert',
                        component: AlertComponent
                    },
                    {
                        path     : 'card',
                        component: CardComponent
                    },
                    {
                        path     : 'date-range',
                        component: DateRangeComponent
                    },
                    {
                        path     : 'drawer',
                        component: DrawerComponent
                    },
                    {
                        path     : 'fullscreen',
                        component: FullscreenComponent
                    },
                    {
                        path     : 'highlight',
                        component: HighlightComponent
                    },
                    {
                        path     : 'masonry',
                        component: MasonryComponent
                    },
                    {
                        path     : 'navigation',
                        component: NavigationComponent
                    }
                ]
            },
            {
                path    : 'directives',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'scrollbar'
                    },
                    {
                        path     : 'scrollbar',
                        component: ScrollbarComponent
                    },
                    {
                        path     : 'scroll-reset',
                        component: ScrollResetComponent
                    }
                ]
            },
            {
                path    : 'services',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'config'
                    },
                    {
                        path     : 'config',
                        component: ConfigComponent
                    },
                    {
                        path     : 'confirmation',
                        component: ConfirmationComponent
                    },
                    {
                        path     : 'splash-screen',
                        component: SplashScreenComponent
                    },
                    {
                        path     : 'media-watcher',
                        component: MediaWatcherComponent
                    }
                ]
            },
            {
                path    : 'pipes',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'find-by-key'
                    },
                    {
                        path     : 'find-by-key',
                        component: FindByKeyComponent
                    }
                ]
            },
            {
                path    : 'validators',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'must-match'
                    },
                    {
                        path     : 'must-match',
                        component: MustMatchComponent
                    }
                ]
            }
        ]
    }
];
