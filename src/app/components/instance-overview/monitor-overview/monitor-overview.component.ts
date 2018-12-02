import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DruidDataService} from '../../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../../services/chart-base-service/chart-base.service';

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

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private router: Router, private chartBase: ChartBaseService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.monitorID = params['id'];

                this.monitorChartState = this.chartBase.getStackedTimelineBase();
                let data = this.druidAPI.dataRetriever.monitorOverview(params['id']);

                this.tasks = data.tasks.map(x => ({
                    ID: x.ID,
                    Reference: Math.random().toString(36).substr(2, 8)
                }));

                this.monitorChartState.results = data.tasks.map(x => ({
                    name: x.ID,
                    series: x.ESData.map(y => ({
                        value: y.ES,
                        name: new Date(y.Timestamp)
                    }))
                }));

                //line
                this.lineChartState = this.chartBase.getLineBase();
                this.lineChartState.showXAxisLabel = false;
                this.lineChartState.showYAxisLabel = false;
                this.lineChartState.xAxis = false;
                this.lineChartState.yAxis = false;
                this.lineChartState.tooltipDisabled = true;
                this.lineChartState.scheme = {
                    domain: ['#00ff00', '#ffae0c', '#ff0000'],
                    group: 'Continuous'
                }
                this.lineChartState.schemeType = 'linear';
                this.lineChartState.gradient = true;
                this.lineChartState.legend = false;
                this.lineChartState.results = [
                    {
                        name: 'test',
                        series: [
                            {name: new Date('2011-10-05T14:48:00.000Z'), value: 0},
                            {name: new Date('2011-10-05T14:50:00.000Z'), value: 3},
                            {name: new Date('2011-10-05T14:50:20.000Z'), value: 20},
                            {name: new Date('2011-10-05T14:50:30.000Z'), value: 70},
                            {name: new Date('2011-10-05T14:51:00.000Z'), value: 15},
                            {name: new Date('2011-10-05T15:00:00.000Z'), value: 5},
                        ]
                    }
                ]
            }
        })
    }

    public onHover = (event: any) => {
        let selstr = '#taskAccordion [data-task-id=' + event.value.name + ']';
        let prevsel = document.querySelector('#taskAccordion .accordion-selected');
        if (prevsel)
            prevsel.classList.remove('accordion-selected');
        document.querySelector(selstr).classList.add('accordion-selected');
    };

    public onSelect = (event: any) => {
        let selstr = '#taskAccordion [data-task-id=' + event.series + '] button';
        let obj = (document.querySelector(selstr) as HTMLElement);
        obj.click();

        $('html, body').animate({
            scrollTop: $(obj).offset().top
        }, 2000);
    };

    routeToOverview = (instanceType: string) => {
        this.router.navigate(['monitoring', instanceType]).then();
    }

}
