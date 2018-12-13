import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LayoutFetchingService {

    private dashboardLayouts: any;
    public layoutsUpdated: Subject<any>;
    public layoutsCleared: Subject<any>;

    constructor() {
        this.dashboardLayouts = JSON.parse(localStorage.getItem('dashboardLayouts'));
        this.layoutsUpdated = new Subject<any>();
        this.layoutsCleared = new Subject<any>();
    }

    /**
     * Lists available valid widget combinations.
     */
    public availableWidgets = [
        {
            widgetType: 'topNWorst',
            widgetName: 'Top N Worst',
            headerFunc: function(w) {
                return `Top ${w.count} Worst ${this.options[0].choices.find(x => x.type == w.dataGroup).name} (${w.timeSpan} min)`;
            },
            xAxisFunc: function(w) {
                return  this.options[0].choices.find(x => x.type == w.dataGroup).name.slice(0, -1);
            },
            yAxisFunc: function(w) {
                let opt = this.options[1].choices.find(x => x.type == w.dataType);
                return `${opt.name} (${opt.unit})`;
            },
            options: [
                {
                    heading: 'Selector',
                    type: 'dataGroup',
                    choices: [
                        {
                            type: 'monitors',
                            name: 'Monitors'
                        },
                        {
                            type: 'tasks',
                            name: 'Tasks'
                        },
                        {
                            type: 'streams',
                            name: 'Streams'
                        }
                    ]
                },
                {
                    heading: 'Measure',
                    type: 'dataType',
                    choices: [
                        {
                            type: 'sla',
                            name: 'SLA',
                            unit: '%'
                        },
                        {
                            type: 'davg',
                            name: 'Delay',
                            unit: 'ms'
                        }
                    ]
                },
                {
                    heading: 'Chart Type',
                    type: 'chartType',
                    choices: [
                        {
                            type: 'bar',
                            name: 'Bar chart'
                        },
                        {
                            type: 'list',
                            name: 'List'
                        }
                    ]
                },
                {
                    heading: 'Entries',
                    type: 'count'
                }
            ]
        },
        {
            widgetType: 'geo',
            widgetName: 'Geographic (*)',
            headerFunc: function(w) {
                return `none`;
            },
            xAxisFunc: function(w) {
                return  'none';
            },
            yAxisFunc: function(w) {
                return `none`;
            },
            options: [
                {
                    heading: 'Chart Type',
                    type: 'chartType',
                    choices: [
                        {
                            type: 'map',
                            name: 'Map'
                        }
                    ]
                },
                {
                    heading: 'From Latitude',
                    type: 'fromLat'
                },
                {
                    heading: 'To Latitude',
                    type: 'toLat'
                },
                {
                    heading: 'From Longitude',
                    type: 'fromLng'
                },
                {
                    heading: 'To Longitude',
                    type: 'toLng'
                },
            ]
        },
        {
            widgetType: 'esContribution',
            widgetName: 'ES Contribution (*)',
            headerFunc: function(w) {
                return w.dataGroup == 'all' ? `ES Contribution (${w.timeSpan} min)` : `ESC ${this.options[0].choices.find(x => x.type == w.dataGroup).name} (${w.timeSpan} min)`;
            },
            xAxisFunc: function(w) {
                return  'Not created';
            },
            yAxisFunc: function(w) {
                return 'Not created';
            },
            options: [
                {
                    heading: 'Selector',
                    type: 'dataGroup',
                    choices: [
                        {
                            type: 'all',
                            name: 'All'
                        },
                        {
                            type: 'monitor',
                            name: 'Monitors'
                        },
                        {
                            type: 'task',
                            name: 'Tasks'
                        },
                        {
                            type: 'stream',
                            name: 'Streams'
                        }
                    ]
                },
                {
                    heading: 'Chart Type',
                    type: 'chartType',
                    choices: [
                        {
                            type: 'doughnut',
                            name: 'Doughnut chart'
                        },
                        {
                            type: 'tree',
                            name: 'Tree map'
                        },
                        {
                            type: 'number_cards',
                            name: 'Number Cards'
                        }
                    ]
                }
            ]
        },
        {
            widgetType: 'realTime',
            widgetName: 'Real-Time',
            headerFunc: function(w) {
                return `${this.options[2].choices.find(x => x.type == w.dataType).name} in ${this.options[0].choices.find(x => x.type == w.dataGroup).name} ${w.dataSourceID} (${w.timeSpan} min)`;
            },
            xAxisFunc: function(w) {
                return  'Time';
            },
            yAxisFunc: function(w) {
                let opt = this.options[2].choices.find(x => x.type == w.dataType);
                return `${opt.name} (${opt.unit})`;
            },
            options: [
                {
                    heading: 'Selector',
                    type: 'dataGroup',
                    choices: [
                        {
                            type: 'stream',
                            name: 'Stream'
                        }
                    ]
                },
                {
                    heading: 'Selector ID',
                    type: 'dataSourceID'
                },
                {
                    heading: 'Measure',
                    type: 'dataType',
                    choices: [
                        {
                            type: 'sla',
                            name: 'SLA',
                            unit: '%'
                        },
                        {
                            type: 'davg',
                            name: 'Avg. response time',
                            unit: 'ms'
                        }
                    ]
                },
                {
                    heading: 'Chart Type',
                    type: 'chartType',
                    choices: [
                        {
                            type: 'line',
                            name: 'Line chart'
                        }
                    ]
                },
                {
                    heading: 'Show Prediction',
                    type: 'prediction',
                    choices: [
                        {
                            type: 'true',
                            name: 'Yes'
                        },
                        {
                            type: 'false',
                            name: 'No'
                        }
                    ]
                }
            ]
        },
        {
            widgetType: 'historic',
            widgetName: 'Historical',
            headerFunc: function(w) {
                return `Comparison of ${this.options[2].choices.find(x => x.type == w.dataType).name} in ${this.options[0].choices.find(x => x.type == w.dataGroup).name} ${w.dataSourceID} (${w.timeSpan} min) now vs ${this.options[4].choices.find(x => x.type == w.historicalParam).name} ago`;
            },
            xAxisFunc: function(w) {
                return  'Time delta (min)';
            },
            yAxisFunc: function(w) {
                let opt = this.options[2].choices.find(x => x.type == w.dataType);
                return `${opt.name} (${opt.unit})`;
            },
            options: [
                {
                    heading: 'Selector',
                    type: 'dataGroup',
                    choices: [
                        {
                            type: 'stream',
                            name: 'Stream'
                        }
                    ]
                },
                {
                    heading: 'Selector ID',
                    type: 'dataSourceID'
                },
                {
                    heading: 'Measure',
                    type: 'dataType',
                    choices: [
                        {
                            type: 'sla',
                            name: 'SLA',
                            unit: '%'
                        },
                        {
                            type: 'davg',
                            name: 'Avg. response time',
                            unit: 'ms'
                        }
                    ]
                },
                {
                    heading: 'Chart Type',
                    type: 'chartType',
                    choices: [
                        {
                            type: 'line',
                            name: 'Line chart'
                        }
                    ]
                },
                {
                    heading: 'Historical',
                    type: 'historicalParam',
                    choices: [
                        {
                            type: '60',
                            name: '60 minutes'
                        },
                        {
                            type: '1440',
                            name: '24 hours'
                        },
                        {
                            type: '43200',
                            name: '30 days'
                        }
                    ]
                }
            ]
        }
    ];

    /**
     * Lists available timespans.
     */
    public availableTimespans = [
        {
            key: '15',
            value: 'Last 15 minutes'
        },
        {
            key: '60',
            value: 'Last 60 minutes'
        },
        {
            key: '360',
            value: 'Last 6 hours'
        },
        {
            key: '720',
            value: 'Last 12 hours'
        },
        {
            key: '1440',
            value: 'Last 24 hours'
        },
        {
            key: '10080',
            value: 'Last 7 days'
        },
        {
            key: '43200',
            value: 'Last 30 days'
        }
    ];

    /**
     * Lists available widget sizes and its descriptions, which are used to populate options in the select formly fields.
     */
    public availableSizes = [
        {size: {sm: 8, md: 4, lg: 4, xl: 4}, description: 'Small'},
        {size: {sm: 12, md: 6, lg: 6, xl: 6}, description: 'Medium'},
        {size: {sm: 12, md: 8, lg: 8, xl: 8}, description: 'Large'},
        {size: {sm: 12, md: 12, lg: 12, xl: 12}, description: 'X-Large'}
    ];

    /**
     * Returns a size, according to label
     * @param sizeLabel
     */
    getSize = (sizeLabel: string): object => {
        for (let size of this.availableSizes) {
            if (sizeLabel == size.description) {
                return size.size;
            }
        }
    };

    /**
     * Test layout to initiate some dashboards, in case no dashboard layouts yet exist.
     */
    public testLayout = {
        layouts: [
            {
                id: 'alarmDashboard',
                name: 'Alarm Dashboard',
                widgets: [
                    {
                        widgetType: 'topNWorst',
                        dataGroup: 'monitors',
                        dataType: 'sla',
                        count: 10,
                        chartType: 'bar',
                        timeSpan: 43200,
                        size: this.getSize('Medium'),
                        ID: '541cad2d-936f-eb62-8918-82928d3c9968',
                        order: 5
                    },
                    {
                        widgetType: 'esContribution',
                        dataGroup: 'all',
                        chartType: 'doughnut',
                        timeSpan: 60,
                        size: this.getSize('Small'),
                        ID: '6afccb76-ed47-9bf2-239f-731f714d5ae9',
                        order: 2
                    },
                    {
                        widgetType: 'realTime',
                        dataGroup: 'stream',
                        dataType: 'davg',
                        chartType: 'line',
                        prediction: 'false',
                        dataSourceID: '2312',
                        timeSpan: 43200,
                        size: this.getSize('Large'),
                        ID: 'd101f0a6-3dfb-1758-a6c6-3bf83f25000a',
                        order: 3
                    },
                    {
                        widgetType: 'topNWorst',
                        dataGroup: 'tasks',
                        dataType: 'davg',
                        count: 10,
                        chartType: 'list',
                        timeSpan: 43200,
                        size: this.getSize('Medium'),
                        ID: '30ca3b75-e004-5a27-0820-438452c6a912',
                        order: 4
                    },
                    {
                        widgetType: 'geo',
                        chartType: 'map',
                        fromLat: 65.594954,
                        toLat: 65.574413,
                        fromLng: 22.113728,
                        toLng: 22.179343,
                        timeSpan: 60,
                        size: this.getSize('Large'),
                        ID: '30ca3b75-e004-5a27-0820-438452c6a222',
                        order: 1
                    }
                ]
            },
            {
                id: 'generalOverview',
                name: 'General Overview',
                widgets: [
                    {
                        widgetType: 'topNWorst',
                        dataGroup: 'monitors',
                        dataType: 'sla',
                        count: 10,
                        chartType: 'bar',
                        timeSpan: 43200,
                        size: this.getSize('Medium'),
                        ID: 'd19f3606-6b67-7055-3668-a594b098f053',
                        order: 1
                    },
                    {
                        widgetType: 'realTime',
                        dataGroup: 'stream',
                        dataType: 'davg',
                        prediction: 'true',
                        count: 10,
                        chartType: 'line',
                        dataSourceID: '1023',
                        timeSpan: 10080,
                        size: this.getSize('X-Large'),
                        ID: 'a04ae8f1-ae28-5f4a-8668-be4195a0b1ee',
                        order: 3
                    }
                ]
            }
        ]
    };

    /**
     * Fetches a JSON schema for a particular dashboard.
     * @param dashboardId
     */
    getLayout = (dashboardId: string): Array<any> => {
        if (this.dashboardLayouts != null) {
            for (let layout of this.dashboardLayouts.layouts) {
                if (layout.id === dashboardId) {
                    return layout.widgets;
                }
            }
        }
        return null;
    };

    /**
     * Fetches a JSON schema of available layouts.
     * Consists of 'name' and 'id' attribute
     */
    getAvailableLayouts = (): Array<any> => {
        if (this.dashboardLayouts !== null) {
            return this.dashboardLayouts.layouts.map(a => ({name: a.name, id: a.id}));
        }
        return null;
    };

    /**
     * Statically sets the layouts JSON schema (mainly for testing purposes).
     * @param layouts
     */
    setLayouts = (layouts: any): void => {
        this.dashboardLayouts = layouts;
    };

    /**
     * Sets a schema for a particular layout (used in widget deletion and addition processes).
     * @param dashboardId
     * @param newLayout
     */
    setLayout = (dashboardId: string, newLayout: any): void => {
        if (this.dashboardLayouts != null) {
            for (let layout of this.dashboardLayouts.layouts) {
                if (layout.id === dashboardId) {
                    layout = newLayout;
                }
            }
        }
        this.saveLayouts();
    };

    /**
     * Adds a new layout to the layout JSON schema.
     * @param dashboardId
     * @param dashboardName
     */
    addLayout = (dashboardId: string, dashboardName: string): void => {
        this.dashboardLayouts.layouts.push({id: dashboardId, name: dashboardName, widgets: []});
        this.saveLayouts();
    };

    /**
     * Removes a particular layout from the JSON schema.
     * @param dashboardId
     */
    deleteLayout = (dashboardId: string): void => {
        if (this.dashboardLayouts != null) {
            let index = 0;
            for (let layout of this.dashboardLayouts.layouts) {
                if (layout.id === dashboardId) {
                    this.dashboardLayouts.layouts.splice(index, 1);
                }
                index++;
            }
            this.saveLayouts();
        }
    };

    /**
     * Saves the layout JSON schema to the local storage of the browser.
     */
    saveLayouts = (): void => {
        localStorage.setItem('dashboardLayouts', JSON.stringify(this.dashboardLayouts));
        this.layoutsUpdated.next();
    };
}
