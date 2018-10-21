import {Component, Input, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';

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

    private barBase = {
        heading: '',
        type: 'bar',
        options: {
            legend: {
                display: false
            }
        },
        data: {
            labels: [],
            datasets: [
                {
                    label: 'SLA (%)',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: []
                }
            ]
        }
    };

    private donutBase = {
        heading: '',
        type: 'doughnut',
        options: {
            legend: {
                position: 'top'
            }
        },
        data: {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#D45AAB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#D45AAB"
                    ]
                }
            ]
        }
    }

    private lineBase = {
        heading: '',
        type: 'line',
        options: {
            legend: {
                position: 'top'
            }
        },
        data: {
            labels: [],
            datasets: []
        }
    };

    constructor() {}

    ngOnInit() {
        switch (this.item.type) {
            case '10WorstMonitorsChart15':

                //var data = this.druidAPI.WorstMonitorsSLA15();
                var data = [
                {ID: 55, SLA: 80},
                {ID: 465, SLA: 82},
                {ID: 344, SLA: 87},
                {ID: 254, SLA: 91},
                {ID: 11, SLA: 95},
                {ID: 755, SLA: 96},
                {ID: 343, SLA: 96},
                {ID: 222, SLA: 98},
                {ID: 87, SLA: 99},
                {ID: 555, SLA: 99}
            ];
                const labels = data.map((row) => '#' + row.ID);
                const graphData = data.map((row) => row.SLA);
                this.state = this.barBase;
                this.state.heading = 'Top 10 worst monitors (SLA)';
                this.state.data.labels = labels;
                this.state.data.datasets[0].data = graphData;
                this.isChart = true;
                break;
            case 'ESContribution':
                var escondata = [
                    {Type: 'Loss', Count: 500},
                    {Type: 'Delay', Count: 322},
                    {Type: 'Delay variation', Count: 65},
                    {Type: 'SES', Count: 23}
                ];
                const esconlabels = escondata.map((row) => row.Type);
                const escongraphData = escondata.map((row) => row.Count);
                this.state = this.donutBase;
                this.state.heading = 'ES contribution';
                this.state.data.labels = esconlabels;
                this.state.data.datasets[0].data = escongraphData;
                this.isChart = true;
                break;
            case 'NearFarLossMonitorChart':
                var nflmdata = [
                    {Time: '10:30', Loss: {Near: 2, Far: 3}},
                    {Time: '10:35', Loss: {Near: 2, Far: 2}},
                    {Time: '10:40', Loss: {Near: 3, Far: 1}},
                    {Time: '10:45', Loss: {Near: 2, Far: 1}},
                    {Time: '10:50', Loss: {Near: 4, Far: 3}},
                    {Time: '10:55', Loss: {Near: 4, Far: 4}},
                    {Time: '11:00', Loss: {Near: 3, Far: 3}},
                ];
                const nflmlabels = nflmdata.map((row) => row.Time);
                const nflmgraphDataNear = nflmdata.map((row) => row.Loss.Near);
                const nflmgraphDataFar = nflmdata.map((row) => row.Loss.Far);
                this.state = this.lineBase;
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
                })
                this.isChart = true;
                break;
            case '10WorstTasksDelayList':
                var wtdldata = [
                    {ID: 55, Delay: 45},
                    {ID: 465, Delay: 34},
                    {ID: 344, Delay: 24},
                    {ID: 254, Delay: 23},
                    {ID: 11, Delay: 23},
                    {ID: 755, Delay: 21},
                    {ID: 343, Delay: 20},
                    {ID: 222, Delay: 19},
                    {ID: 87, Delay: 18},
                    {ID: 555, Delay: 18}
                ];
                this.state = {
                    heading: '10 Worst Tasks (Delay)',
                    headers: ['Task', 'Delay (ms)'],
                    data: wtdldata.map((row) => ['#' + row.ID, row.Delay])
                }
                this.isList = true;
                break;

            default:
                break;
        }
    }

}
