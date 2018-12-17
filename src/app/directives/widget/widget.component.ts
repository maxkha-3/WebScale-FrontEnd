import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DruidDataService} from '../../services/druid-data-service/druid-data.service';
import {ChartBaseService} from '../../services/chart-base-service/chart-base.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {LayoutFetchingService} from '../../services/layout-fetching-service/layout-fetching.service';
import {GlobalService} from "../../services/global-service/global.service";
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
    public dataPresent = true;
    public interval: any;
    public additionalClasses: any[] = [];

    constructor(private druidAPI: DruidDataService, private chartBase: ChartBaseService, public ngxSmartModalService: NgxSmartModalService, private layoutService: LayoutFetchingService, private router: Router, private global: GlobalService) {
    }

    ngOnInit() {
        this.initializeWidget();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    formatXAxis = (date, a) => {
        if (this.item.widgetType != 'historic') {
            return ("0" + date.getUTCHours()).slice(-2) + ":" +
                ("0" + date.getUTCMinutes()).slice(-2);
        } else {
            return date
        }
    };

    dateTimeString = (date) => {
        if (this.item.widgetType != 'historic') {
            return date.getUTCFullYear() + "-" +
                ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-" +
                ("0" + date.getUTCDate()).slice(-2) + " " +
                ("0" + date.getUTCHours()).slice(-2) + ":" +
                ("0" + date.getUTCMinutes()).slice(-2) + ":" +
                ("0" + date.getUTCSeconds()).slice(-2);
        } else {
            return date
        }
    };

    /**
     * Initializes the widgets and refreshes its data.
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
                this.state.tooltipTemplate = "pointHover";
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
                    }, this.global.interval);
                });
                break;

            case 'realTime':
                this.state.results = (this.item.prediction === 'true' ? [serializer([]), serializer([])] : [serializer([])]);
                this.item.prediction === 'true' ? this.additionalClasses.push('dashed-chart') : {};
                this.state.route = ['monitoring/' + this.item.dataGroup + 's', this.item.dataSourceID];

                this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(data => {
                    this.populateRealTimeWidget(data, serializer);
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.realTime(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan).then(refreshedData => {
                            this.populateRealTimeWidget(refreshedData, serializer);

                        });
                    }, this.global.interval);
                });
                break;

            case 'esContribution':
                this.druidAPI.dataRetriever.esContribution(this.item.dataGroup, this.item.timeSpan).then(data => {
                    serializer(data, 'es', '');
                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.esContribution(this.item.dataGroup, this.item.timeSpan).then(refreshedData => {
                            serializer(refreshedData, 'es', '');
                        });
                    }, this.global.interval);
                });
                break;

            case 'geo':
                this.druidAPI.dataRetriever.getReflectors(this.item.fromLat, this.item.fromLng, this.item.toLat, this.item.toLng).then(data => {
                    if (!data.length) {
                        this.dataPresent = false;
                        return;
                    } else {
                        this.dataPresent = true;
                    }

                    this.state.reflectors = data;
                    let that = this;
                    let streams = data.map(x => x.streams[0]);

                    let datafunc = () => {
                        Promise.all(streams.map(x => this.druidAPI.dataRetriever.realTime('', 'sla', x, 10))).then(stream_sla => {
                            let vals = stream_sla.map((xa, i) => ({
                                id: streams[i],
                                sla: xa['recent'].length ? xa['recent'][xa['recent'].length - 1].value : undefined
                            }));
                            this.state.data = vals;
                        });
                    };

                    datafunc();
                    this.interval = setInterval(datafunc, this.global.interval);
                });
                break;

            case 'historic':
                this.additionalClasses.push('dashed-chart');
                this.state.results = [serializer([]), serializer([])];
                this.druidAPI.dataRetriever.historical(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan, this.item.historicalParam).then(data => {
                    this.populateHistoricalWidget(data, serializer);

                    this.interval = setInterval(() => {
                        this.druidAPI.dataRetriever.historical(this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan, this.item.historicalParam).then(refreshedData => {
                            this.populateHistoricalWidget(refreshedData, serializer);
                        });
                    }, this.global.interval);
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
     * Generates datasets from fetched API data for Real Time widgets.
     * @param data
     * @param serializer
     */
    populateRealTimeWidget = (data: any, serializer: Function): void => {
        if (data.recent.length !== 0) {
            let cpy = this.state.results.slice();
            this.dataPresent = true;
            cpy[0] = serializer(data.recent);
            if (this.item.prediction == 'true') {
                this.druidAPI.predictionRetriever.realTimePrediction(new Date(data.recent[data.recent.length - 1].timestamp), data.recent[data.recent.length - 1].value, this.item.dataGroup, this.item.dataType, this.item.dataSourceID, this.item.timeSpan * 0.3).then(predictionData => {
                    if (predictionData.hasOwnProperty("prediction")) {

                        cpy[1] = serializer(predictionData.prediction);

                        this.state.results = cpy;
                    } else {
                        this.dataPresent = false;
                    }
                });
            } else {
                this.state.results = cpy;
            }
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Generates datasets from fetched API data for Historical widgets.
     * @param data
     * @param serializer
     */
    populateHistoricalWidget = (data: any, serializer: Function) => {
        if (data.recent.length !== 0 && data.historical.length !== 0) {
            this.dataPresent = true;

            let cpy = this.state.results.slice();
            cpy[0] = serializer(data.recent);
            this.state.results = cpy;

            cpy = this.state.results.slice();
            cpy[1] = serializer(data.historical);
            this.state.results = cpy;

            //Modify X-Scale with time difference (delta) instead of Dates

            this.state.results[0].name = "Now";
            this.state.results[0].series = this.state.results[0].series.map((dataPoint) => ({
                name: (dataPoint.name - (Date.now() - (this.item.timeSpan * 60 * 1000))) / (1000 * 60),
                value: dataPoint.value
            }));
            this.state.results[1].name = "Before";
            this.state.results[1].series = this.state.results[1].series.map((dataPoint) => ({
                name: (dataPoint.name - ((Date.now() - (this.item.historicalParam * 60 * 1000)) - (this.item.timeSpan * 60 * 1000))) / (1000 * 60),
                value: dataPoint.value
            }));
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Serializes data for a Bar Chart.
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    barChartSerializer = (data: any, measure?: string, prefix?: string): void => {
        if (data.length !== 0) {
            this.dataPresent = true;

            measure = (measure == undefined ? 'value' : measure);
            prefix = (prefix == undefined ? '#' : prefix);
            this.state.results = data.map((row) => ({'name': row.selector_id, 'value': row[measure]}));
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Serializes data for Number Cards Chart.
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    numberCardsChartSerializer = (data: any, measure?: string, prefix?: string): void => {
        if (data.length !== 0) {
            this.dataPresent = true;

            measure = (measure == undefined ? 'value' : measure);
            prefix = (prefix == undefined ? '#' : prefix);
            this.state.results = data.map((row) => ({'name': prefix + row.ID, 'value': row.Data[measure]}));
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Serializes data for a Tree Chart.
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before x-axis label
     */
    treeChartSerializer = (data: any, measure?: string, prefix?: string): void => {
        if (data.length !== 0) {
            this.dataPresent = true;

            measure = (measure == undefined ? 'value' : measure);
            prefix = (prefix == undefined ? '#' : prefix);
            this.state.results = data.map((row) => ({'name': prefix + row.ID, 'value': row.Data[measure]}));
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Serializes data for a Doughnut Chart.
     * @param data
     * @param measure (optional)
     * @param prefix (optional) - prefix before label
     */
    doughnutChartSerializer = (data: any, measure?: string, prefix?: string): void => {
        if (data.length !== 0) {
            this.dataPresent = true;

            measure = (measure == undefined ? 'value' : measure);
            prefix = (prefix == undefined ? '#' : prefix);
            this.state.results = data.map((row) => ({'name': prefix + row.ID, 'value': row.Data[measure]}));
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Serializes data for a Line Chart.
     * @param data
     * @param measure (optional)
     */
    lineChartSerializer = (data: any, measure?: string): object => {
        if (data.length !== 0) {
            this.dataPresent = true;

            measure = (measure == undefined ? 'value' : measure);
            const Data = data.map((row) => ({'name': new Date(row.timestamp), 'value': row[measure]}));
            return {
                name: 'Value',
                series: Data
            };
        } else {
            this.dataPresent = false;
            return {
                name: 'Unknown',
                series: []
            };
        }
    };

    /**
     * Serializes data for a List Widget.
     * @param data
     * @param measure (optional)
     */
    listSerializer = (data: any, measure?: string): void => {
        if (data.length !== 0) {
            this.dataPresent = true;

            measure = (measure == undefined ? 'value' : measure);
            this.state.listOptions.headers = {id: this.state.xAxisLabel, value: this.state.yAxisLabel};
            this.state.data = data.map((row) => [row.selector_id, row[measure].toFixed(5)]);
        } else {
            this.dataPresent = false;
        }
    };

    /**
     * Serializes data for a Map Widget.
     * @param data
     */
    mapSerializer = (data: any): void => {
        this.state.data = data;
    };


    /**
     * Routes to an instance, when clicking on widget header.
     */
    routeToInstance = (): void => {
        if (this.state.route && this.dataPresent) {
            this.router.navigate(this.state.route).then();
        }
    };

    handleChartClick = (event: any) => {
        this.router.navigate([`monitoring/${this.item.dataGroup}/${event.name}`]).then();
    };
}
