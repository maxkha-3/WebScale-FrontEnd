import {Component, Input, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    public isChart: boolean = false;
    public isList: boolean = false;

    @Input() item;

    public state: any;

    constructor(private druidAPI: DruidDataService, private chartBase: ChartBaseService) {
    }

    ngOnInit() {
        switch (this.item.type) {
            case '10WorstMonitorsChart15':
                let data = this.druidAPI.WorstMonitorsSLA15();
                const labels = data.map((row) => '#' + row.ID);
                const graphData = data.map((row) => row.SLA);
                this.state = this.chartBase.getBarBase();
                this.state.heading = 'Top 10 worst monitors (SLA)';
                this.state.data.labels = labels;
                this.state.data.datasets[0].data = graphData;
                this.isChart = true;
                break;

            case 'ESContribution':
                let escondata = this.druidAPI.ESContribution();
                const esconlabels = escondata.map((row) => row.Type);
                const escongraphData = escondata.map((row) => row.Count);
                this.state = this.chartBase.getDoughnutBase();
                this.state.heading = 'ES contribution';
                this.state.data.labels = esconlabels;
                this.state.data.datasets[0].data = escongraphData;
                this.isChart = true;
                break;

            case 'NearFarLossMonitorChart':
                let nflmdata = this.druidAPI.NFLMonitors();
                const nflmlabels = nflmdata.map((row) => row.Time);
                const nflmgraphDataNear = nflmdata.map((row) => row.Loss.Near);
                const nflmgraphDataFar = nflmdata.map((row) => row.Loss.Far);
                this.state = this.chartBase.getLineBase();
                this.state.heading = 'Losses in monitor #' + this.item.monitor;
                this.state.data.labels = nflmlabels;
                this.state.data.datasets.push({
                    label: 'Far loss (%)',
                    data: nflmgraphDataFar,
                    fill: false,
                    borderColor: '#4bc0c0'
                });
                this.state.data.datasets.push({
                    label: 'Near loss (%)',
                    data: nflmgraphDataNear,
                    fill: false,
                    borderColor: '#565656'
                });
                this.isChart = true;
                break;

            case '10WorstTasksDelayList':
                let wtdldata = this.druidAPI.WorstTasksDelay();
                this.state = {
                    heading: '10 Worst Tasks (Delay)',
                    headers: ['Task', 'Delay (ms)'],
                    data: wtdldata.map((row) => ['#' + row.ID, row.Delay])
                };
                this.isList = true;
                break;

            default:
                break;
        }
    }

}
