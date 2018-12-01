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
                let data = this.druidAPI.MonitorOverview(params['id']);

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
                    domain: ['#ff0000', '#7aa3e5', '#a8385d', '#00bfa5']
                };
                this.lineChartState.schemeType = 'linear';
                this.lineChartState.gradient = false;
                this.lineChartState.legend = true;
                this.lineChartState.results = [
                    {
                        name: 'test',
                        series: [
                            {name: '10:00', value: 100},
                            {name: '11:00', value: 80},
                            {name: '12:00', value: 100}
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
