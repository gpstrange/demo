import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PptVerticalNavigationComponent } from '@ppt/components/navigation/vertical/vertical.component';
import { PptNavigationService } from '@ppt/components/navigation/navigation.service';
import { PptNavigationItem } from '@ppt/components/navigation/navigation.types';

@Component({
    selector       : 'ppt-vertical-navigation-group-item',
    templateUrl    : './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PptVerticalNavigationGroupItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() autoCollapse: boolean;
    @Input() item: PptNavigationItem;
    @Input() name: string;

    private _pptVerticalNavigationComponent: PptVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _pptNavigationService: PptNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._pptVerticalNavigationComponent = this._pptNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._pptVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
