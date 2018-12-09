import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DummyDataService} from '../../services/dummy-data-service/dummy-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';

@Component({
    selector: 'app-instance-overview',
    templateUrl: './instance-overview.component.html',
    styleUrls: ['./instance-overview.component.scss']
})
export class InstanceOverviewComponent implements OnInit {

    public sourceType: string;
    public lineChartState: any;
    public list: any[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private dataAPI: DummyDataService, private chartBase: ChartBaseService ) {
    }

    ngOnInit() {
        this.lineChartState = this.chartBase.getESLineBase();

        this.route.params.subscribe(params => {
            if (params['sourceType'] == "monitors" || params['sourceType'] == "streams" || params['sourceType'] == "tasks") {
                this.sourceType = params['sourceType'];
            } else {
                this.router.navigate(['home']).then();
            }

            switch(this.sourceType){
                case 'monitors':
                    this.dataAPI.getAllMonitors().then((data) => {
                        console.log(data);
                       this.list = data.map(x => ({
                           id: x.monitor_id,
                           name: 'Monitor ' + x.monitor_id,
                           series: x.error_seconds.map(y => ({
                               name: new Date(y.timestamp),
                               value: y.value
                           }))}));
                    });
                    break;
                case 'tasks':
                    this.dataAPI.getAllTasks().then((data) => {
                        this.list = data.map(x => ({
                            id: x.task_id,
                            name: 'Task ' + x.task_id,
                            series: x.error_seconds.map(y => ({
                                name: new Date(y.timestamp),
                                value: y.value
                            }))}));
                    });
                    break;
                case 'streams':
                    this.dataAPI.getAllStreams().then((data) => {
                        this.list = data.map(x => ({
                            id: x.stream_id,
                            name: 'Stream ' + x.stream_id,
                            series: x.error_seconds.map(y => ({
                                name: new Date(y.timestamp),
                                value: y.value
                            }))}));
                    });
                    break;
            }
        });

    }

    /**
     * Routes to an instance for monitoring.
     * @param sourceType
     * @param sourceID
     */
    routeToInstance = (sourceType: string, sourceID : string) => {
        this.router.navigate(['monitoring/' + sourceType, sourceID]).then();
    }

}
