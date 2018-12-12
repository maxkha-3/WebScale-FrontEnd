import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DruidDataService} from '../../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../../services/chart-base-service/chart-base.service';
import {DummyDataService} from '../../../services/dummy-data-service/dummy-data.service';
import * as d3 from 'd3';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-monitor-overview',
    templateUrl: './monitor-overview.component.html',
    styleUrls: ['./monitor-overview.component.scss']
})
export class MonitorOverviewComponent implements OnInit {

    public monitorID: string;

    public monitorChartState: any;
    public lineChartState: any;
    public tasks: Array<any>;
    public noData = false;

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private router: Router, private chartBase: ChartBaseService, private dummyAPI: DummyDataService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.monitorID = params['id'];

                this.monitorChartState = this.chartBase.getStackedTimelineBase();
                this.dummyAPI.getTasksInMonitor(this.monitorID).then(data => {
                    if(!data.length){
                        this.noData = true;
                        return;
                    }

                    this.tasks = data.map(x => ({
                        id: x.task_id,
                        name: 'Task ' + x.task_id,
                        series: x.error_seconds.map(y => ({
                            name: new Date(y.timestamp),
                            value: y.value
                        }))}));

                    this.monitorChartState.results = this.tasks.reverse();
                });

                //line
                this.lineChartState = this.chartBase.getESLineBase();
            }
        })
    }

    public onHover = (event: any) => {
        let selstr = '#taskAccordion [data-task-id="' + event.value.name + '"]';
        let prevsel = document.querySelector('#taskAccordion .accordion-selected');
        if (prevsel)
            prevsel.classList.remove('accordion-selected');
        document.querySelector(selstr).classList.add('accordion-selected');
    };

    public onSelect = (event: any) => {
        let selstr = '#taskAccordion [data-task-id="' + event.series + '"] a';
        let obj = (document.querySelector(selstr) as HTMLElement);
        obj.click();
    };

    routeToOverview = (instanceType: string) => {
        this.router.navigate(['monitoring', instanceType]).then();
    }

    routeToInstance = (sourceType: string, sourceID : string) => {
        this.router.navigate(['monitoring/' + sourceType, sourceID]).then();
    }

}
