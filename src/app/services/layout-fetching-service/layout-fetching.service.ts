import {Injectable} from '@angular/core';

@Injectable()
export class LayoutFetchingService {

    private dashboardLayouts: any;

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
                    {widgetType: 'sla_top10', chartType: 'bar', size: 4},
                    {widgetType: 'es_contribution', chartType: 'doughnut', size: 4},
                    {widgetType: 'loss_1h', chartType: 'line', monitorId: '1023', size: 8},
                    {widgetType: 'delay_top10', chartType: 'list', size: 4}
                ]
            },
            {
                id: 'generalOverview',
                name: 'General Overview',
                widgets: [
                    {widgetType: 'sla_top10', chartType: 'bar', size: 4},
                    {widgetType: 'es_contribution', chartType: 'doughnut', size: 4},
                    {widgetType: 'loss_1h', chartType: 'line', monitorId: '443', size: 8}
                ]
            }
        ]
    };


    constructor() {
        this.dashboardLayouts = JSON.parse(localStorage.getItem('dashboardLayouts'));
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
    };

    addLayout = (dashboardId: string, dashboardName: string): void => {
        this.dashboardLayouts.layouts.push({id: dashboardId, name: dashboardName, widgets: []});
    };

    saveLayouts = (): void => {
        localStorage.setItem('dashboardLayouts', JSON.stringify(this.dashboardLayouts));
    };
}
