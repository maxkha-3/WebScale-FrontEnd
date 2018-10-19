import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global-service/global.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';

import * as _ from 'lodash';
import * as Muuri from 'muuri';
import {_document} from '@angular/platform-browser/src/browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public currentDashboard: string;
    public widgetLayout: Array<any>;

    public widgetGrid: any;

    constructor(private global: GlobalService, private route: ActivatedRoute, private router: Router, private layoutFetcher: LayoutFetchingService) {}

    ngOnInit() {
        // Instantiate the board grid so we can drag those
        // columns around.
        this.widgetGrid = new Muuri('.board', {
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            containerClass: 'board',
            itemClass: 'board-item'
        });

        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.currentDashboard = _.startCase(params['id']);
                this.widgetLayout = this.layoutFetcher.getLayout(_.camelCase(this.currentDashboard));
                if (this.widgetLayout == null) {
                    console.log("Redirecting to home")
                    //this.router.navigate("home")
                }
            }
        })
    }

    addNewWidget = (widgetType: string, chartType: string, widgetLayout: string) => {

    };

    item1 = {
        heading: 'Top 10 worst monitors (SLA)',
        type: 'bar',
        options: {
            legend: {
                display: false
            }
        },
        data: {
            labels: ['#104', '#665', '#211', '#133', '#766', '#1002', '#21', '#78', '#33', '#773'],
            datasets: [
                {
                    label: 'SLA (%)',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [67, 68, 68, 70, 71, 76, 83, 88, 98, 100]
                }
            ]
        }
    };

    item2 = {
        heading: 'Losses in monitor #1023',
        type: 'line',
        options: {
            legend: {
                position: 'top'
            }
        },
        data: {
            labels: ['10:35', '10:40', '10:45', '10:50', '10:55', '11:00', '11:05'],
            datasets: [
                {
                    label: 'Far loss (%)',
                    data: [2, 2, 4, 2, 3, 1, 2],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Near loss (%)',
                    data: [2, 3, 3, 6, 6, 5, 3],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    };

    item3 = {
        heading: 'ES contribution',
        type: 'doughnut',
        options: {
            legend: {
                position: 'top'
            }
        },
        data: {
            labels: ['Loss', 'Delay', 'Delay variation', 'SES'],
            datasets: [
                {
                    data: [500, 322, 76, 34],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#D45AAB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#D45AAB"
                    ]
                }
            ]
        }
    }
}
