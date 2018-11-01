import {Component, OnInit, AfterViewInit} from '@angular/core';
import {GlobalService} from '../../services/global-service/global.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';
import {ToastrService} from 'ngx-toastr';

import * as _ from 'lodash';
import * as Muuri from 'muuri';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    public currentDashboard: string;
    public currentDashboardID: string;
    public widgetLayout: Array<any>;
    public widgetGrid: any;
    public validWidgets: any;

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService, private toastr: ToastrService, public ngxSmartModalService: NgxSmartModalService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.currentDashboard = _.startCase(params['id']);
                this.currentDashboardID = params['id'];
                this.widgetLayout = this.layoutFetcher.getLayout(_.camelCase(this.currentDashboard));
                this.validWidgets = this.layoutFetcher.availableWidgets;
                if (this.widgetLayout == null) {
                    this.router.navigate(['home']);
                }
            }
        });

        //In order to redraw the grid, once everything is fetched
        window.dispatchEvent(new Event('resize'));
    }

    ngAfterViewInit() {
        this.widgetGrid = new Muuri('.board', {
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            dragStartPredicate: {
                distance: 0,
                delay: 0,
                handle: '.widget-drag-handle'
            },
            containerClass: 'board',
            itemClass: 'board-item'
        });
    }

    /**
     * Removes widget from a dashoard layout.
     * @param widgetData
     */
    removeWidget = (widgetData: any) => {
        let index = 0;
        for (let widget of this.widgetLayout) {
            if(_.isEqual(widgetData, widget)) {
                this.widgetLayout.splice(index, 1);
                this.toastr.success("Widget was successfully deleted", "Success")
            }
            index++;
        }
        this.ngxSmartModalService.getModal('widgetSettingsModal').close();
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);

        //Triggers redrawing of the grid
        window.dispatchEvent(new Event('resize'));
    };

    /**
     * Opens New Widget modal
     */
    initiateNewWidget = () => {
        this.ngxSmartModalService.get("newWidgetModal").open();
    };

    //TODO:implement addition of widgets
    addNewWidget = (widgetType: string, chartType: string, widgetLayout: string) => {

    };

    /**
     * Deletes a dashboard layout
     */
    deleteDashboard = (): void => {
        this.layoutFetcher.deleteLayout(this.currentDashboardID);
        this.toastr.success('Dashboard layout was removed', 'Success!');
        this.router.navigate(['home']);
    };
}
