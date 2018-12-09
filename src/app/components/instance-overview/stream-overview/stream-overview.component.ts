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

    public ESData: any;
    public RateData: any;
    public AvgDelayData: any;

    public numberCardsChartState: any;
    public lineChartState: any;

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private router: Router, private chartBase: ChartBaseService, private dummyAPI: DummyDataService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.streamID = params['id'];

                this.numberCardsChartState = this.chartBase.getNumberCardsBase();
                this.lineChartState = this.chartBase.getLineBase();

                this.dummyAPI.getStream(this.streamID).then(data => {
                    this.numberCardsChartState.results = [
                        {
                            name: 'Rate (Mbit/s)',
                            value: data.rate[data.rate.length - 1].value
                        },
                        {
                            name: 'Average delay (ms)',
                            value: data.avg_delay[data.avg_delay.length - 1].value
                        }
                    ]

                    this.ESData = {
                        name: 'Error Seconds',
                        series: data.error_seconds.map(x => ({name: new Date(x.timestamp), value: x.value}))
                    };
                    this.RateData = {
                        name: 'Rate',
                        series: data.rate.map(x => ({name: new Date(x.timestamp), value: x.value}))
                    };
                    this.AvgDelayData = {
                        name: 'Average Delay',
                        series: data.avg_delay.map(x => ({name: new Date(x.timestamp), value: x.value}))
                    };
                    this.lineChartState.results = [
                        this.ESData,
                        this.RateData,
                        this.AvgDelayData
                    ]
                    console.log(data);
                });

            }
        })
    }

    filterLineChartData = (event: any) => {

        let obj = null, newRes;
        switch (event.target.id) {
            case 'cb-es':
                obj = this.ESData;
                break;
            case 'cb-avg-delay':
                obj = this.AvgDelayData;
                break;
            case 'cb-rate':
                obj = this.RateData;
                break;
        }

        newRes = this.lineChartState.results.filter(x => x.name != obj.name);
        if(event.target.checked){
            newRes.push(obj);
        }
        this.lineChartState.results = newRes;
    }

    routeToOverview = (instanceType: string) => {
        this.router.navigate(['monitoring', instanceType]).then();
    }

    routeToInstance = (sourceType: string, sourceID : string) => {
        this.router.navigate(['monitoring/' + sourceType, sourceID]).then();
    }

    preventDropdownClose = (event: any) => {
        event.stopPropagation();
    }

}
