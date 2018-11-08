import {Injectable} from '@angular/core';

@Injectable()
export class ChartBaseService {

    constructor() {
    }

    /**
     * Returns a base for a Bar Chart
     */
    getBarBase = () => {
        return {
            results: [],
            scheme: 'vivid',
            schemeType: 'linear',
            xAxisLabel: '',
            yAxisLabel: '',
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxis: true,
            yAxis: true,
            gradient: false
        };
    };

    /**
     * Returns base for a Doughnut Chart
     */
    getDoughnutBase = () => {
        return {
            results: [],
            scheme: 'vivid',
            schemeType: 'linear',
            labels: false,
            legend: true,
            doughnut: true,
            legendTitle: '',
            legendPosition: 'right',
            gradient: false,
            maxLabelLength: 20
        };
    };

    /**
     * Returns base for a Line Chart
     */
    getLineBase = () => {
        return {
            results: [],
            scheme: 'vivid',
            schemeType: 'linear',
            xAxisLabel: '',
            yAxisLabel: '',
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxis: true,
            yAxis: true,
            gradient: false
        };
    };

    getStackedTimelineBase = () => {
        return {
            results: [],
            scheme: 'vivid',
            schemeType: 'linear',
            xAxisLabel: '',
            yAxisLabel: '',
            showXAxisLabel: false,
            showYAxisLabel: false,
            xAxis: true,
            yAxis: true,
            gradient: false,
            timeline: true,
            roundDomains: false,
            tooltipDisabled: false
        };
    };
}
