import {Injectable} from '@angular/core';

@Injectable()
export class LayoutFetchingService {

    private dashboardLayouts: any;

    public testLayout = {
        layouts: [
            {
                id: 'alarmDashboard',
                name: 'Alarm Dashboard',
                widgets: [
                    {widgetType: 'loss24h', chartType: 'bar', heading: 'Loss 24h'},
                    {widgetType: 'loss12h', chartType: 'bar', heading: 'Loss 12h'},
                    {widgetType: 'loss1h', chartType: 'bar', heading: 'Loss 1h'},
                ]
            },
            {
                id: 'generalOverview',
                name: 'General Overview',
                widgets: [
                    {widgetType: 'uptime24h', chartType: 'bar', heading: 'Uptime 24h'},
                    {widgetType: 'uptime12h', chartType: 'bar', heading: 'Uptime 12h'},
                    {widgetType: 'uptime1h', chartType: 'bar', heading: 'Uptime 1h'},
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

    saveLayouts = (): void => {
        localStorage.setItem('dashboardLayouts', JSON.stringify(this.dashboardLayouts));
    };
}
