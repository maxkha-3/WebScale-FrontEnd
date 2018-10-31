import {Component} from '@angular/core';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {Router} from '@angular/router';

import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public dashboardLayouts: Array<any>;
    public newLayoutInitiated: boolean;
    public newLayoutName: string;

    constructor(private layoutFetcher: LayoutFetchingService, private router: Router) {
        //For testing purposes
        if (localStorage.getItem('dashboardLayouts') === null) {
            console.log('No layouts found, adding some test layouts');
            this.layoutFetcher.setLayouts(this.layoutFetcher.testLayout);
            this.layoutFetcher.saveLayouts();
        }
        this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
        this.newLayoutInitiated = false;
    }

    initiateNewLayout = (status: boolean): void => {
        this.newLayoutName = "";
        this.newLayoutInitiated = status;
    };

    createNewDashboard = (name: string): void => {
        console.log(name);
        this.layoutFetcher.addLayout(_.camelCase(name), _.startCase(name));
        this.newLayoutName = "";
        this.newLayoutInitiated = false;
        this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
    };

    routeToDashboard = (dashBoardId: string) => {
        this.router.navigate(['dashboard', dashBoardId]);
    };
}
