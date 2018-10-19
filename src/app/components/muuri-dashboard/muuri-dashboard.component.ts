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
