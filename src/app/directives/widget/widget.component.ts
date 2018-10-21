import {Component, Input, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    test = true;

    @Input() item;

    private state: any;

    constructor(private druidAPI:DruidDataService) {}

    ngOnInit() {
        switch (this.item.type) {
            case '10WorstMonitorsChart15':
                var data = this.druidAPI.WorstMonitorsSLA_15();
                const labels = data.map((row) => '#' + row.ID);
                const graphData = data.map((row) => row.SLA);
                this.state = {
                    heading: 'Top 10 worst monitors (SLA)',
                    type: 'bar',
                    options: {
                        legend: {
                            display: false
                        }
                    },
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'SLA (%)',
                                backgroundColor: '#42A5F5',
                                borderColor: '#1E88E5',
                                data: graphData
                            }
                        ]
                    }
                };
        }
    }

}
