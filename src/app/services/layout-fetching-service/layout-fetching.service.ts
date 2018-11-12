import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LayoutFetchingService {

    private dashboardLayouts: any;
    public layoutsUpdated: Subject<any>;

    /**
     * Lists available valid widget combinations.
     */
    public availableWidgets = [
        {
            widgetType: 'sla_top10',
            widgetName: 'SLA',
            chartTypes: ['bar', 'line'],
            dependencies: ['timeSpan', 'numOfEntries'],
            heading: 'Top 10 worst monitors (SLA)'
        },
        {
            widgetType: 'es_contribution',
            widgetName: 'ES Contribution',
            chartTypes: ['doughnut'],
            heading: 'ES contribution'
        },
        {
            widgetType: 'loss_1h',
            widgetName: 'Losses in monitor',
            chartTypes: ['line'],
            dependencies: ['monitorId', 'timeSpan'],
            heading: 'Losses in monitor #'
        },
        {
            widgetType: 'delay_top10',
            widgetName: '10 Worst Delays',
            chartTypes: ['list'],
            dependencies: ['numOfEntries'],
            heading: '10 Worst Tasks (delay)'

        }
    ];

    /**
     * Lists available dependencies.
     */
    public availableDependencies = [
        {
            dependencyType: 'monitorId',
            dependencyName: 'Monitor ID',
            formlyType: 'input',
            required: true
        },
        {
            dependencyType: 'timeSpan',
            dependencyName: 'Time Span (h)',
            formlyType: 'input',
            required: true
        },
        {
            dependencyType: 'numOfEntries',
            dependencyName: 'Entries',
            formlyType: 'input',
            required: true
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
     * Test layout to initiate some dashboards, in case no dashboard layouts yet exist.
     */
    public testLayout = {
        layouts: [
            {
                id: 'alarmDashboard',
                name: 'Alarm Dashboard',
                widgets: [
                    {widgetType: 'sla_top10', chartType: 'bar', size: {sm: 12, md: 12, lg: 6, xl: 4}, ID: '541cad2d-936f-eb62-8918-82928d3c9968'},
                    {widgetType: 'es_contribution', chartType: 'doughnut', size: {sm: 12, md: 12, lg: 6, xl: 4}, ID: '6afccb76-ed47-9bf2-239f-731f714d5ae9'},
                    {widgetType: 'loss_1h', chartType: 'line', monitorId: '1023', size: {sm: 12, md: 12, lg: 12, xl: 8}, ID: 'd101f0a6-3dfb-1758-a6c6-3bf83f25000a'},
                    {widgetType: 'delay_top10', chartType: 'list', size: {sm: 12, md: 12, lg: 6, xl: 4}, ID: '30ca3b75-e004-5a27-0820-438452c6a912'}
                ]
            },
            {
                id: 'generalOverview',
                name: 'General Overview',
                widgets: [
                    {widgetType: 'sla_top10', chartType: 'bar', size: {sm: 12, md: 12, lg: 6, xl: 4}, ID: 'd19f3606-6b67-7055-3668-a594b098f053'},
                    {widgetType: 'es_contribution', chartType: 'doughnut', size: {sm: 12, md: 12, lg: 6, xl: 4}, ID: '43ca3b0b-c63a-19cd-d845-961581735d5d'},
                    {widgetType: 'loss_1h', chartType: 'line', monitorId: '443', size: {sm: 12, md: 12, lg: 12, xl: 8}, ID: 'a04ae8f1-ae28-5f4a-8668-be4195a0b1ee'}
                ]
            }
        ]
    };

    constructor() {
        this.dashboardLayouts = JSON.parse(localStorage.getItem('dashboardLayouts'));
        this.layoutsUpdated = new Subject<any>();
    }

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

    /**
     * Gets a dependency and its parameters
     * @param dependencyId
     */
    getDependency = (dependencyId: string): any => {
        for (let dependency of this.availableDependencies) {
            if (dependencyId === dependency.dependencyType) {
                return dependency;
            }
        }
    }
}
