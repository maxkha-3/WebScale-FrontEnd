import {Component, OnInit} from '@angular/core';

import * as Muuri from 'muuri';
import {_document} from '@angular/platform-browser/src/browser';

@Component({
    selector: 'app-muuri-dashboard',
    templateUrl: './muuri-dashboard.component.html',
    styleUrls: ['./muuri-dashboard.component.scss']
})
export class MuuriDashboardComponent implements OnInit {

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
    }

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
    }

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

    public itemContainers: Array<any>;
    public columnGrids: Array<any>;
    public boardGrid: any;

    constructor() { }

    ngOnInit() {


        // Instantiate the board grid so we can drag those
        // columns around.
        this.boardGrid = new Muuri('.board', {
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            containerClass: 'board',
            itemClass: 'board-item'
        });
    }

}
