import {Component, OnInit, AfterViewInit} from '@angular/core';
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
export class DashboardComponent implements OnInit, AfterViewInit {

    public currentDashboard: string;
    public currentDashboardID: string;
    public widgetLayout: Array<any>;

    public widgetGrid: any;

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit() {
        // Instantiate the board grid so we can drag those
        // columns around.
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.currentDashboard = _.startCase(params['id']);
                this.currentDashboardID = params['id'];
                this.widgetLayout = this.layoutFetcher.getLayout(_.camelCase(this.currentDashboard));
                console.log(this.widgetLayout);
                if (this.widgetLayout == null) {
                    console.log('Redirecting to home');
                    //this.router.navigate("home")
                }
            }
        });


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

    addNewWidget = (widgetType: string, chartType: string, widgetLayout: string) => {

    };

    saveLayout = (): void => {
        this.layoutFetcher.setLayout(this.currentDashboardID, this.widgetLayout);
        this.layoutFetcher.saveLayouts();
        alert('Layout saved!');
    };

    deleteWidget = () => {
        if (!confirm('Do you really want to remove this widget?'))
            return;

        const widgetId = document.querySelector('#widgetSettingsDeleteBtn').getAttribute('data-widget-id');
        for (let a = this.widgetLayout.length - 1; a >= 0; a--) {
            if (this.widgetLayout[a].ID === widgetId) {
                this.widgetLayout.splice(a, 1);
                const elem = document.querySelector('[data-widget-id="' + widgetId + '"]');
                this.widgetGrid.remove(elem, {removeElements: true});

                break;
            }
        }
    };
}
