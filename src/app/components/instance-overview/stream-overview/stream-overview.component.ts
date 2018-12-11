import {Component, OnInit} from '@angular/core';
import {DruidDataService} from '../../../services/druid-data-service/druid-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChartBaseService} from '../../../services/chart-base-service/chart-base.service';
import {DummyDataService} from '../../../services/dummy-data-service/dummy-data.service';

@Component({
    selector: 'app-stream-overview',
    templateUrl: './stream-overview.component.html',
    styleUrls: ['./stream-overview.component.scss']
})
export class StreamOverviewComponent implements OnInit {

    public streamID: string;
    public metricData: any = {
        es: {name: 'Error Seconds', series: []},
        rate: {name: 'Rate', series: []},
        davg: {name: 'Average Delay', series: []},
        dmin: {name: 'Minimum Delay', series: []},
        dmax: {name: 'Maximum Delay', series: []},
        dv: {name: 'Delay Variation', series: []},
        loss_far: {name: 'Loss Far', series: []},
        miso_far: {name: 'Misordered Packets Far', series: []},
        dmin_far: {name: 'Minimum Delay Far', series: []},
        davg_far: {name: 'Average Delay Far', series: []},
        dv_far: {name: 'Delay Variation Far', series: []},
        loss_near: {name: 'Loss Near', series: []},
        miso_near: {name: 'Misordered Packets Near', series: []},
        dmin_near: {name: 'Minimum Delay Near', series: []},
        davg_near: {name: 'Average Delay Near', series: []},
        dv_near: {name: 'Delay Variation Near', series: []},
        dmax_near: {name: 'Maximum Delay Near', series: []},
    };
    public metricDataKeys: any = Object.keys(this.metricData);

    public numberCardsChartState: any;
    public lineChartState: any;

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private router: Router, private chartBase: ChartBaseService, private dummyAPI: DummyDataService) {
    }

    ngOnInit() {
        console.log(this.metricDataKeys);
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.streamID = params['id'];

                this.numberCardsChartState = this.chartBase.getNumberCardsBase();
                this.lineChartState = this.chartBase.getLineBase();

                this.dummyAPI.getStream(this.streamID).then(data => {
                    this.numberCardsChartState.results = [
                        {
                            name: 'Rate (Mbit/s)',
                            value: data.metrics[data.metrics.length - 1].rate
                        },
                        {
                            name: 'Average delay (ms)',
                            value: data.metrics[data.metrics.length - 1].davg
                        }
                    ];

                    for (let k in this.metricData) {
                        this.metricData[k].series = data.metrics.map(x => ({name: new Date(x.timestamp), value: x[k]}));
                    }

                    this.lineChartState.results = [
                        this.metricData.es,
                        this.metricData.rate,
                        this.metricData.davg
                    ];
                    console.log(data);
                });

            }
        });
    }

    filterLineChartData = (event: any) => {

        if (!event.target.id.startsWith('cb-'))
            return;

        let newRes;
        let selector = event.target.id.slice(3);
        let obj = this.metricData[selector];

        newRes = this.lineChartState.results.filter(x => x.name != obj.name);
        if (event.target.checked) {
            newRes.push(obj);
        }
        this.lineChartState.results = newRes;
    };

    routeToOverview = (instanceType: string) => {
        this.router.navigate(['monitoring', instanceType]).then();
    };

    routeToInstance = (sourceType: string, sourceID: string) => {
        this.router.navigate(['monitoring/' + sourceType, sourceID]).then();
    };

    preventDropdownClose = (event: any) => {
        event.stopPropagation();
    };

}
