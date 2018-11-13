import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

    public monitorChartState: any;
    public tasks: Array<any>;

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private chartBase: ChartBaseService,) {
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

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
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
            }
        });
    }

}
