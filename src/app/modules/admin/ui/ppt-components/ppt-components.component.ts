import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PptNavigationItem } from '@ppt/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { PptMediaWatcherService } from '@ppt/services/media-watcher';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector       : 'ppt-components',
    templateUrl    : './ppt-components.component.html',
    styleUrls      : ['./ppt-components.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PptComponentsComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: PptNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _pptMediaWatcherService: PptMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'ppt-components.libraries',
                title   : 'Libraries',
                type    : 'group',
                children: [
                    {
                        id   : 'ppt-components.libraries.mock-api',
                        title: 'MockAPI',
                        type : 'basic',
                        link : '/ui/ppt-components/libraries/mock-api'
                    }
                ]
            },
            {
                id      : 'ppt-components.components',
                title   : 'Components',
                type    : 'group',
                children: [
                    {
                        id   : 'ppt-components.components.alert',
                        title: 'Alert',
                        type : 'basic',
                        link : '/ui/ppt-components/components/alert'
                    },
                    {
                        id   : 'ppt-components.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/ui/ppt-components/components/card'
                    },
                    {
                        id   : 'ppt-components.components.date-range',
                        title: 'DateRange',
                        type : 'basic',
                        link : '/ui/ppt-components/components/date-range'
                    },
                    {
                        id   : 'ppt-components.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/ui/ppt-components/components/drawer'
                    },
                    {
                        id   : 'ppt-components.components.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/ui/ppt-components/components/fullscreen'
                    },
                    {
                        id   : 'ppt-components.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/ui/ppt-components/components/highlight'
                    },
                    {
                        id   : 'ppt-components.components.masonry',
                        title: 'Masonry',
                        type : 'basic',
                        link : '/ui/ppt-components/components/masonry'
                    },
                    {
                        id   : 'ppt-components.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/ui/ppt-components/components/navigation'
                    }
                ]
            },
            {
                id      : 'ppt-components.directives',
                title   : 'Directives',
                type    : 'group',
                children: [
                    {
                        id   : 'ppt-components.directives.scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/ui/ppt-components/directives/scrollbar'
                    },
                    {
                        id   : 'ppt-components.directives.scroll-reset',
                        title: 'ScrollReset',
                        type : 'basic',
                        link : '/ui/ppt-components/directives/scroll-reset'
                    }
                ]
            },
            {
                id      : 'ppt-components.services',
                title   : 'Services',
                type    : 'group',
                children: [
                    {
                        id   : 'ppt-components.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/ui/ppt-components/services/config'
                    },
                    {
                        id   : 'ppt-components.services.confirmation',
                        title: 'Confirmation',
                        type : 'basic',
                        link : '/ui/ppt-components/services/confirmation'
                    },
                    {
                        id   : 'ppt-components.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/ui/ppt-components/services/splash-screen'
                    },
                    {
                        id   : 'ppt-components.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/ui/ppt-components/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'ppt-components.pipes',
                title   : 'Pipes',
                type    : 'group',
                children: [
                    {
                        id   : 'ppt-components.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/ui/ppt-components/pipes/find-by-key'
                    }
                ]
            },
            {
                id      : 'ppt-components.validators',
                title   : 'Validators',
                type    : 'group',
                children: [
                    {
                        id   : 'ppt-components.validators.must-match',
                        title: 'MustMatch',
                        type : 'basic',
                        link : '/ui/ppt-components/validators/must-match'
                    }
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media query change
        this._pptMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
