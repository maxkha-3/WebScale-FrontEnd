import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LayoutFetchingService {

    private dashboardLayouts: any;
    public layoutsUpdated: Subject<any>;

    /**
     * Lists available valid widget combinations.
     */
    private availableWidgets = {
        widgets: [
            {widgetType: 'sla_top10', chartTypes: ['bar', 'line'], heading: 'Top 10 worst monitors (SLA)'},
            {widgetType: 'es_contribution', chartTypes: ['doughnut'], heading: 'ES contribution'},
            {widgetType: 'loss_1h', chartTypes: ['line'], dependencies: ['monitorId'], heading: 'Losses in monitor #'}
        ]
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
                    {widgetType: 'sla_top10', chartType: 'bar', size: 4, ID: '12'},
                    {widgetType: 'es_contribution', chartType: 'doughnut', size: 4, ID: '14'},
                    {widgetType: 'loss_1h', chartType: 'line', monitorId: '1023', size: 8, ID: '17'},
                    {widgetType: 'delay_top10', chartType: 'list', size: 4, ID: '33'}
                ]
            },
            {
                id: 'generalOverview',
                name: 'General Overview',
                widgets: [
                    {widgetType: 'sla_top10', chartType: 'bar', size: 4, ID: '52'},
                    {widgetType: 'es_contribution', chartType: 'doughnut', size: 4, ID: '55'},
                    {widgetType: 'loss_1h', chartType: 'line', monitorId: '443', size: 8, ID: '67'}
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
}
