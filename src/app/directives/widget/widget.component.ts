import {Component, Input, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import { NgxChartsModule } from '@swimlane/ngx-charts';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    @Input() item;

    public layout = '';
    public state: any;

    constructor(private druidAPI: DruidDataService, private chartBase: ChartBaseService, public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit() {
        let serializer;
        switch (this.item.chartType) {
            case 'bar':
                serializer = this.barChartSerializer;
                this.state = this.chartBase.getBarBase();
                this.layout = 'bar-chart';
                break;
            case 'doughnut':
                serializer = this.doughnutChartSerializer;
                this.state = this.chartBase.getDoughnutBase();
                this.layout = 'pie-chart';
                break;
            case 'line':
                serializer = this.lineChartSerializer;
                this.state = this.chartBase.getLineBase();
                this.layout = 'line-chart';
                break;
            case 'list':
                serializer = this.listSerializer;
                this.state = {};
                this.layout = 'list';
                break;
            default:
                break;
        }

        let datafunc;
        switch (this.item.widgetType) {
            case 'sla_top10':
                this.state.xAxisLabel = 'Monitor';
                this.state.yAxisLabel = 'SLA'
                this.state.heading = 'Top worst monitors';
                datafunc = this.druidAPI.WorstMonitorsSLA15;
                setInterval(() => { serializer(datafunc()); }, 5000);

                break;
            case 'es_contribution':
                this.state.legendTitle = 'Contributor';
                this.state.heading = 'ES contribution';
                datafunc = this.druidAPI.ESContribution;
                setInterval(() => { serializer(datafunc()); }, 5000);

                break;
            case 'loss_1h':
                this.state.xAxisLabel = 'Time';
                this.state.yAxisLabel = 'Delay'
                this.state.heading = 'Losses in monitor #' + this.item.monitorId;
                datafunc = this.druidAPI.NFLMonitors;
                setInterval(() => { serializer(datafunc()); }, 5000);

                break;
            case 'delay_top10':
                this.state.heading = '10 Worst Tasks (Delay)';
                datafunc = this.druidAPI.WorstTasksDelay;
                break;
            default:
                datafunc = null;
        }

        serializer(datafunc());
    }

    /**
     * Opens a widget settings modal.
     */
    showSettings = (): void => {
        this.ngxSmartModalService.setModalData(this.item, 'widgetSettingsModal', true);
        this.ngxSmartModalService.getModal('widgetSettingsModal').open();
    };

    /**
     * Serializes data for a Bar Chart
     * @param data
     */
    barChartSerializer = (data: any) => {
        const graphData = data.map((row) => ({'name': '#' + row.ID, 'value': row.Data.SLA}));
        this.state.results = graphData;
    };

    /**
     * Serializes data for a Doughnut Chart
     * @param data
     */
    doughnutChartSerializer = (data: any) => {
        const graphData = data.map((row) => ({'name': '#' + row.ID, 'value': row.Data.ES}));
        this.state.results = graphData;
    };

    /**
     * Serializes data for a Line Chart
     * @param data
     */
    lineChartSerializer = (data: any) => {
        const DataNear = data.map((row) => ({'value': row.Data.Near, 'name': row.ID}));
        const DataFar = data.map((row) => ({'value': row.Data.Far, 'name': row.ID}));
        this.state.results = [
            {
                name: 'Near',
                series: DataNear
            },
            {
                name: 'Far',
                series: DataFar
            }
            ];
    };

    /**
     * Serializes data for a List Widget
     * @param data
     */
    listSerializer = (data: any) => {
        this.state.headers = ['Task', 'Delay (ms)'];
        this.state.data = data.map((row) => ['#' + row.ID, row.Data.Delay]);
    };


}
