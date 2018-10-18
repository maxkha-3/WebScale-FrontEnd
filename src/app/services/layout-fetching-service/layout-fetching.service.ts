import {Injectable} from '@angular/core';

@Injectable()
export class LayoutFetchingService {

    private testLayout = {
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
    }


    getLayout = (dashboardId: string): Array<any> => {
        for (let layout of this.testLayout.layouts) {
            if (layout.id === dashboardId) {
                return layout.widgets
            }
        }
        return null
    };

    getAvailableLayouts = (): Array<any> => {
        return this.testLayout.layouts.map(a => ({name: a.name, id: a.id}));
    }
}
