import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';
import {Router} from '@angular/router';
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
    public interval: any;
    public additionalClasses: any[] = [];

    constructor(private druidAPI: DruidDataService, private chartBase: ChartBaseService, public ngxSmartModalService: NgxSmartModalService, private layoutService: LayoutFetchingService, private router: Router) {
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
        let serializer, hasXAxis, hasYAxis;
        switch (this.item.chartType) {
            case 'bar':
                serializer = this.barChartSerializer;
                hasXAxis = true;
                hasYAxis = true;
                this.state = this.chartBase.getBarBase();
                this.layout = 'bar-chart';
                break;
            case 'doughnut':
                serializer = this.doughnutChartSerializer;
                hasXAxis = false;
                hasYAxis = false;
                this.state = this.chartBase.getDoughnutBase();
                this.layout = 'pie-chart';
                break;
            case 'tree':
                serializer = this.treeChartSerializer;
                hasXAxis = false;
                hasYAxis = false;
                this.state = this.chartBase.getTreeBase();
                this.layout = 'tree-chart';
                break;
            case 'number_cards':
                serializer = this.numberCardsChartSerializer;
                hasXAxis = false;
                hasYAxis = false;
                this.state = this.chartBase.getNumberCardsBase();
                this.layout = 'number-cards-chart';
                break;
            case 'line':
                serializer = this.lineChartSerializer;
                hasXAxis = true;
                hasYAxis = true;
                this.state = this.chartBase.getLineBase();
                this.layout = 'line-chart';
                break;
            case 'list':
                serializer = this.listSerializer;
                hasXAxis = true;
                hasYAxis = true;
                this.state = {
                    data: {},
                    listOptions: {
                        count: this.item.count
                    }
                };
                this.layout = 'list';
                break;
            case 'map':
                serializer = this.mapSerializer;
                this.layout = 'map';
                this.state = {};
                this.state.mapOptions = {
                    bounds: {
                        fromLat: this.item.fromLat,
                        toLat: this.item.toLat,
                        fromLng: this.item.fromLng,
                        toLng: this.item.toLng
                    }
                };
                hasXAxis = false;
                hasYAxis = false;
                break;
            default:
                break;
        }

        this.state.heading = this.layoutService.availableWidgets.find(x => x.widgetType == this.item.widgetType).headerFunc(this.item);
        if (hasXAxis) {
            this.state.xAxisLabel = this.layoutService.availableWidgets.find(x => x.widgetType == this.item.widgetType).xAxisFunc(this.item);
        }
        if (hasYAxis) {
            this.state.yAxisLabel = this.layoutService.availableWidgets.find(x => x.widgetType == this.item.widgetType).yAxisFunc(this.item);
        }

        switch (this.item.widgetType) {

            case 'topNWorst':
                this.druidAPI.dataRetriever.topNWorst(this.item.dataGroup, this.item.dataType, this.item.count, this.item.timeSpan).then(data => {

                    serializer(data);
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.topNWorst(this.item.dataGroup, this.item.dataType, this.item.count, this.item.timeSpan).then(refreshedData => {
                            serializer(refreshedData);
                        });
                    }, 5000);
                });
                break;

            case 'realTime':
                if (this.item.prediction == 'true') {
                    this.additionalClasses.push('dashed-chart');
                    this.state.results = [serializer([]), serializer([])];
                } else {
                    this.state.results = [serializer([])];
                }
                this.state.route = ['monitoring/' + this.item.dataGroup + 's', this.item.dataSourceID];
                this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(data => {
                    let cpy = this.state.results.slice();
                    cpy[0] = serializer(data.recent);
                    this.state.results = cpy;
                    let latestTimestamp = new Date(cpy[0].series[cpy[0].series.length - 1].name);
                    let latestValue = cpy[0].series[cpy[0].series.length - 1].value;

                    if (this.item.prediction == 'true') {
                        this.druidAPI.predictionRetriever.realTimePrediction(latestTimestamp, latestValue, this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(data => {
                            let cpy = this.state.results.slice();
                            cpy[1] = serializer(data);
                            this.state.results = cpy;
                        });
                    }

                    if (this.item.prediction == 'true') {
                        this.interval = setInterval(() => {
                            this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(refreshedData => {
                                let cpy = this.state.results.slice();
                                cpy[0] = serializer(refreshedData.recent);
                                this.state.results = cpy;
                                let latestTimestamp = new Date(cpy[0].series[cpy[0].series.length - 1].name);
                                let latestValue = cpy[0].series[cpy[0].series.length - 1].value;

                                this.druidAPI.predictionRetriever.realTimePrediction(latestTimestamp, latestValue, this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(refreshedData => {
                                    let cpy = this.state.results.slice();
                                    cpy[1] = serializer(refreshedData);
                                    this.state.results = cpy;
                                });
                            });

                        }, 5000);
                    } else {
                        this.interval = setInterval(() => {
                            this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(refreshedData => {
                                let cpy = this.state.results.slice();
                                cpy[0] = serializer(refreshedData.recent);
                                this.state.results = cpy;
                            });
                        }, 5000);
                    }

                });
                break;

            case 'esContribution':
                this.druidAPI.dataRetriever.esContribution(this.item.dataGroup, this.item.timeSpan).then(data => {

                    serializer(data, 'es', '');
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.esContribution(this.item.dataGroup, this.item.timeSpan).then(refreshedData => {
                            serializer(refreshedData, 'es', '');
                        });

                    }, 5000);
                });
                break;

            case 'geo':
                this.druidAPI.dataRetriever.geographicOverview(this.item.fromLat, this.item.fromLng, this.item.toLat, this.item.toLng).then(data => {
                    serializer(data);

                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.geographicOverview(this.item.fromLat, this.item.fromLng, this.item.toLat, this.item.toLng).then(refreshedData => {
                            serializer(refreshedData);
                        });

                    }, 5000);
                });
                break;

            case 'historic':
                this.state.results = [serializer([]), serializer([])];
                this.druidAPI.dataRetriever.historical(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan, this.item.historicalParam).then(data => {

                    this.additionalClasses.push('dashed-chart');
                    let cpy = this.state.results.slice();
                    cpy[0] = serializer(data.historical);
                    this.state.results = cpy;

                    cpy = this.state.results.slice();
                    cpy[1] = serializer(data.recent);
                    this.state.results = cpy;

                    //Modify X-Scale with time difference (delta) instead of Dates
                    this.state.results[0].series = this.state.results[0].series.map((dataPoint) => ({name: (Date.now() - dataPoint.name - (this.item.timeSpan * 60 * 1000))/(1000 * 60), value: dataPoint.value}));
                    this.state.results[1].series = this.state.results[1].series.map((dataPoint) => ({name: (Date.now() - dataPoint.name)/(1000 * 60), value: dataPoint.value}));

                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.historical(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan, this.item.historicalParam).then(refreshedData => {
                            let cpy = this.state.results.slice();
                            cpy[0] = serializer(data.historical);
                            this.state.results = cpy;

                            cpy = this.state.results.slice();
                            cpy[1] = serializer(data.recent);
                            this.state.results = cpy;

                            //Modify X-Scale with time difference (delta) instead of Dates
                            this.state.results[0].series = this.state.results[0].series.map((dataPoint) => ({name: (Date.now() - dataPoint.name - (this.item.timeSpan * 60 * 1000))/(1000 * 60), value: dataPoint.value}));
                            this.state.results[1].series = this.state.results[1].series.map((dataPoint) => ({name: (Date.now() - dataPoint.name)/(1000 * 60), value: dataPoint.value}));
                        })
                    }, 5000)
                });
                break;

            default:
                console.log('Invalid widget type', this.item);
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
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    barChartSerializer = (data: any, measure?: string, prefix?: string) => {
        measure = (measure == undefined ? "value" : measure);
        prefix = (prefix == undefined ? "#" : prefix);
        this.state.results = data.map((row) => ({'name': prefix + row.selector_id, 'value': row[measure]}));
    };

    /**
     * Serializes data for Number Cards Chart
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    numberCardsChartSerializer = (data: any, measure?: string, prefix?: string) => {
        measure = (measure == undefined ? "value" : measure);
        prefix = (prefix == undefined ? "#" : prefix);
        this.state.results = data.map((row) => ({'name': prefix + row.ID, 'value': row.Data[measure]}));
    };

    /**
     * Serializes data for a Tree Chart
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    treeChartSerializer = (data: any, measure?: string, prefix?: string) => {
        measure = (measure == undefined ? "value" : measure);
        prefix = (prefix == undefined ? "#" : prefix);
        this.state.results = data.map((row) => ({'name': prefix + row.ID, 'value': row.Data[measure]}));
    };

    /**
     * Serializes data for a Doughnut Chart
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before label
     */
    doughnutChartSerializer = (data: any, measure?: string, prefix?: string) => {
        measure = (measure == undefined ? "value" : measure);
        prefix = (prefix == undefined ? "#" : prefix);
        this.state.results = data.map((row) => ({'name': prefix + row.ID, 'value': row.Data[measure]}));
    };

    /**
     * Serializes data for a Line Chart
     * @param data
     * @param measure (optional)
     */
    lineChartSerializer = (data: any, measure?: string): object => {
        measure = (measure == undefined ? "value" : measure);
        const Data = data.map((row) => ({'name': new Date(row.timestamp), 'value': row[measure]}));
        return {
            name: 'Value',
            series: Data
        };
    };

    /**
     * Serializes data for a List Widget
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    listSerializer = (data: any, measure?: string, prefix?: string) => {
        measure = (measure == undefined ? "value" : measure);
        prefix = (prefix == undefined ? "#" : prefix);
        this.state.listOptions.headers = [this.state.xAxisLabel, this.state.yAxisLabel];
        this.state.data = data.map((row) => [prefix + row.selector_id, row[measure].toFixed(5)]);
    };

    /**
     * Serializes data for a Map Widget
     * @param data
     */
    mapSerializer = (data: any) => {
        this.state.data = data;
    };


    routeToInstance = () => {
        if (this.state.route) {
            this.router.navigate(this.state.route).then();
        }
    };
}
