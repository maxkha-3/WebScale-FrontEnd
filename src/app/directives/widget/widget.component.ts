import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {HttpClient} from '@angular/common/http';
import {d3} from 'd3';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnDestroy {

    @Input() item;

    public layout = '';
    public state: any;
    public interval: number;


    constructor(private druidAPI: DruidDataService, private chartBase: ChartBaseService, public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit() {
        this.initializeWidget();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    /**
     * Initializes the widgets and refreshed its data
     */
    initializeWidget = () => {
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
            case 'tree':
                serializer = this.treeChartSerializer;
                this.state = this.chartBase.getTreeBase();
                this.layout = 'tree-chart';
                break;
            case 'number_cards':
                serializer = this.numberCardsChartSerializer;
                this.state = this.chartBase.getNumberCardsBase();
                this.layout = 'number-cards-chart';
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

        switch (this.item.widgetType) {

            case 'topNWorst':
                this.druidAPI.dataRetriever.topNWorst(this.item.dataGroup, this.item.dataType, this.item.count, this.item.timeSpan).then(data => {
                    this.state.xAxisLabel = 'Monitor';
                    this.state.yAxisLabel = 'SLA';
                    this.state.heading = 'Top ' + this.item.count + ' worst ' + this.item.dataGroup;

                    serializer(data, this.item.dataType);
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.topNWorst(this.item.dataGroup, this.item.dataType, this.item.count, this.item.timeSpan).then(refreshedData => {
                            serializer(refreshedData, this.item.dataType);
                        });
                    }, 5000);
                });
                break;

            case 'realTime':
                this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(data => {
                    this.state.xAxisLabel = 'Time';
                    this.state.yAxisLabel = 'Delay';
                    this.state.heading = 'Losses in monitor #' + this.item.dataSourceID;

                    serializer(data);
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(refreshedData => {
                            serializer(refreshedData);
                        });

                    }, 5000);

                });
                break;

            case 'esContribution':
                this.druidAPI.dataRetriever.esContribution(this.item.dataGroup, this.item.timeSpan).then(data => {
                    this.state.legendTitle = 'Contributor';
                    this.state.heading = 'ES contribution';

                    serializer(data, "es");
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.esContribution(this.item.dataGroup, this.item.timeSpan).then(refreshedData => {
                            serializer(refreshedData, "es");
                        });

                    }, 5000);
                });
                break;

            default:
                console.log("Invalid widget type", this.item);
        }
    };

    /**
     * Opens a widget settings modal.
     */
    showSettings = (): void => {
        let modalData = this.item;
        this.ngxSmartModalService.setModalData(modalData, 'widgetSettingsModal', true);
        this.ngxSmartModalService.getModal('widgetSettingsModal').open();
    };

    /**
     * Serializes data for a Bar Chart
     * @param data
     */
    barChartSerializer = (data: any, measure: string) => {
        const graphData = data.map((row) => ({'name': '#' + row.ID, 'value': row.Data[measure]}));
        this.state.results = graphData;
    };

    /**
     * Serializes data for Number Cards Chart
     * @param data
     */
    numberCardsChartSerializer = (data: any, measure: string) => {
        const graphData = data.map((row) => ({'name': '#' + row.ID, 'value': row.Data[measure]}));
        this.state.results = graphData;
    };

    /**
     * Serializes data for a Tree Chart
     * @param data
     */
    treeChartSerializer = (data: any, measure: string) => {
        const graphData = data.map((row) => ({'name': '#' + row.ID, 'value': row.Data[measure]}));
        this.state.results = graphData;
    };

    /**
     * Serializes data for a Doughnut Chart
     * @param data
     */
    doughnutChartSerializer = (data: any, measure: string) => {
        const graphData = data.map((row) => ({'name': '#' + row.ID, 'value': row.Data[measure]}));
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
    listSerializer = (data: any, measure: string) => {
        this.state.headers = ['Task', 'Delay (ms)'];
        this.state.data = data.map((row) => ['#' + row.ID, row.Data[measure]]);
    };


}
