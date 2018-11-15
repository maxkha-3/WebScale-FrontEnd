import {Injectable} from '@angular/core';
import * as d3 from 'd3';

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
            labels: true,
            legend: false,
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
            gradient: false,
            curve: d3.curveMonotoneX
        };
    };

    /**
     * Returns base for a Tree Chart
     */
    getTreeBase = () => {
        return {
            results: [],
            scheme: 'vivid',
            gradient: false
        };
    };

    /**
     * Returns base for Number Cards Chart
     */
    getNumberCardsBase = () => {
        return {
            results: [],
            scheme: 'vivid'
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
