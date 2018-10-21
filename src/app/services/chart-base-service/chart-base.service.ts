import {Injectable} from '@angular/core';

@Injectable()
export class ChartBaseService {

    constructor() {
    }

    getBarBase = () => {
        return {
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
    };

    getDoughnutBase = () => {
        return {
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
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#D45AAB'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#D45AAB'
                        ]
                    }
                ]
            }
        };
    }

    getLineBase = () => {
        return  {
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
    }
}
