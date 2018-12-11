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
    public noData = false;
    public metricData: any = {
        es_sum: {name: 'Error Seconds', series: []},
        rate_sum: {name: 'Rate', series: []},
        davg_sum: {name: 'Average Delay', series: []},
        dmin_min: {name: 'Minimum Delay', series: []},
        dmax_max: {name: 'Maximum Delay', series: []},
        dv_sum: {name: 'Delay Variation', series: []},
        loss_far_sum: {name: 'Loss Far', series: []},
        miso_far_sum: {name: 'Misordered Packets Far', series: []},
        dmin_far_min: {name: 'Minimum Delay Far', series: []},
        davg_far_sum: {name: 'Average Delay Far', series: []},
        dv_far_sum: {name: 'Delay Variation Far', series: []},
        loss_near_sum: {name: 'Loss Near', series: []},
        miso_near_sum: {name: 'Misordered Packets Near', series: []},
        dmin_near_min: {name: 'Minimum Delay Near', series: []},
        davg_near_sum: {name: 'Average Delay Near', series: []},
        dv_near_sum: {name: 'Delay Variation Near', series: []},
        dmax_near_max: {name: 'Maximum Delay Near', series: []},
    };
    public cardsData: any = [
        {
            name: 'Rate (Mbit/s)',
            value: 0
        },
        {
            name: 'Average delay (ms)',
            value: 0
        }
    ];

    public metricDataKeys: any = Object.keys(this.metricData);

    public numberCardsChartState: any;
    public lineChartState: any;

    constructor(private druidAPI: DruidDataService, private route: ActivatedRoute, private router: Router, private chartBase: ChartBaseService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] != undefined) {
                this.streamID = params['id'];

                this.numberCardsChartState = this.chartBase.getNumberCardsBase();
                this.lineChartState = this.chartBase.getLineBase();
                console.log(this.lineChartState);

                this.updateDataStructure();
                setInterval(() => {this.updateDataStructure();}, 10000);

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

    updateDataStructure(){
        this.druidAPI.dataRetriever.streamOverview(parseInt(this.streamID), 1440).then(data => {

            if(!data.length){
                this.noData = true;
                return;
            }

            this.cardsData[0].value = data[data.length - 1].values.rate_sum;
            this.cardsData[1].value = data[data.length - 1].values.davg_sum;
            this.cardsData = this.cardsData.slice();

            for (let k in this.metricData) {
                this.metricData[k].series = data.map(x => ({name: new Date(x.timestamp), value: x.values[k]}));
            }
            console.log(this.cardsData);

            this.lineChartState.results = [
                this.metricData.es_sum,
                this.metricData.rate_sum,
                this.metricData.davg_sum
            ];

        });
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
