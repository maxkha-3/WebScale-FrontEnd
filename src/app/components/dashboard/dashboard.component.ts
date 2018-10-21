import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global-service/global.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';

import * as _ from 'lodash';
import * as Muuri from 'muuri';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    item1 = {
        type: '10WorstMonitorsChart15'
    };

    item2 = {
        type: 'NearFarLossMonitorChart',
        monitor: 1333
    };

    item3 = {
        type: 'ESContribution'
    };

    item4 = {
        type: '10WorstTasksDelayList'
    };

    public currentDashboard: string;
    public widgetLayout: Array<any>;

    public widgetGrid: any;

    addNewWidget = (widgetType: string, chartType: string, widgetLayout: string) => {

    };

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService) {
    }

    ngOnInit() {
        // Instantiate the board grid so we can drag those
        // columns around.
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

        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.currentDashboard = _.startCase(params['id']);
                this.widgetLayout = this.layoutFetcher.getLayout(_.camelCase(this.currentDashboard));
                if (this.widgetLayout == null) {
                    console.log('Redirecting to home');
                    //this.router.navigate("home")
                }
            }
        });

        window.dispatchEvent(new Event('resize'));
    }


}
