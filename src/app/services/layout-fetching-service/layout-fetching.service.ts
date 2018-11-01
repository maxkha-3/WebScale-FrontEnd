import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LayoutFetchingService {

    private dashboardLayouts: any;
    public layoutsUpdated: Subject<any>;

    private availableWidgets = {
        widgets: [
            {widgetType: 'sla_top10', chartTypes: ['bar', 'line'], heading: 'Top 10 worst monitors (SLA)'},
            {widgetType: 'es_contribution', chartTypes: ['doughnut'], heading: 'ES contribution'},
            {widgetType: 'loss_1h', chartTypes: ['line'], dependencies: ['monitorId'], heading: 'Losses in monitor #'}
        ]
    };

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

    getAvailableLayouts = (): Array<any> => {
        if (this.dashboardLayouts !== null) {
            return this.dashboardLayouts.layouts.map(a => ({name: a.name, id: a.id}));
        }
        return null;
    };

    setLayouts = (layouts: any): void => {
        this.dashboardLayouts = layouts;
    };

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

    addLayout = (dashboardId: string, dashboardName: string): void => {
        this.dashboardLayouts.layouts.push({id: dashboardId, name: dashboardName, widgets: []});
        this.saveLayouts();
    };

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

    saveLayouts = (): void => {
        localStorage.setItem('dashboardLayouts', JSON.stringify(this.dashboardLayouts));
        this.layoutsUpdated.next();
    };
}
