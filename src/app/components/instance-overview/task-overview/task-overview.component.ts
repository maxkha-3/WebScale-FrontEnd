import {Component, OnInit} from '@angular/core';
import {DruidDataService} from '../../../services/druid-data-service/druid-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChartBaseService} from '../../../services/chart-base-service/chart-base.service';
import {DummyDataService} from '../../../services/dummy-data-service/dummy-data.service';

@Component({
    selector: 'app-task-overview',
    templateUrl: './task-overview.component.html',
    styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

    public taskID: string;

    public monitorChartState: any;
    public lineChartState: any;
    public streams: Array<any>;

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private router: Router, private chartBase: ChartBaseService, private dummyAPI: DummyDataService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.taskID = params['id'];

                this.monitorChartState = this.chartBase.getStackedTimelineBase();
                this.dummyAPI.getStreamsInTask(this.taskID).then(data => {
                    this.streams = data.map(x => ({
                        id: x.stream_id,
                        name: 'Stream ' + x.stream_id,
                        series: x.error_seconds.map(y => ({
                            name: new Date(y.timestamp),
                            value: y.value
                        }))}));

                    this.monitorChartState.results = this.streams.reverse();
                });

                //line
                this.lineChartState = this.chartBase.getESLineBase();
            }
        })
    }

    public onHover = (event: any) => {
        let selstr = '#taskAccordion [data-stream-id="' + event.value.name + '"]';
        let prevsel = document.querySelector('#taskAccordion .accordion-selected');
        if (prevsel)
            prevsel.classList.remove('accordion-selected');
        document.querySelector(selstr).classList.add('accordion-selected');
    };

    public onSelect = (event: any) => {
        let selstr = '#taskAccordion [data-stream-id="' + event.series + '"] a';
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
