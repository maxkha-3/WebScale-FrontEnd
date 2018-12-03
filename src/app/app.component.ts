import {Component} from '@angular/core';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {GlobalService} from './services/global-service/global.service';
import {EventServerService} from './services/event-server-service/event-server.service';

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
    public notifications: Array<any>;

    constructor(private layoutFetcher: LayoutFetchingService, private router: Router, private toastr: ToastrService, public global: GlobalService, private http: HttpClient, private eventFetcher: EventServerService) {
        //For testing purposes
        if (localStorage.getItem('dashboardLayouts') === null) {
            console.log('No layouts found, adding some test layouts');
            this.layoutFetcher.setLayouts(this.layoutFetcher.testLayout);
            this.layoutFetcher.saveLayouts();
        }
        this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
        this.notifications = this.eventFetcher.getEventNotifications();
        this.newLayoutInitiated = false;

        this.layoutFetcher.layoutsUpdated.subscribe(() => {
            this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
        })
    }

    /**
     * Indicates an initiation of new layout creation, when 'status' is true. Aborts if 'status' is false.
     * @param status
     */
    initiateNewLayout = (status: boolean): void => {
        this.newLayoutName = '';
        this.newLayoutInitiated = status;
    };

    /**
     * Creates a new dashboard layout. Stores the layouts in local storage via LayoutFetchingService.
     * @param name
     */
    createNewDashboard = (name: string): void => {
        this.toastr.success('New layout has been added', 'Success!');
        this.layoutFetcher.addLayout(_.camelCase(name), _.startCase(name));
        this.newLayoutName = '';
        this.newLayoutInitiated = false;
        this.router.navigate(['dashboard', _.camelCase(name)]).then();
    };

    /**
     * Routes to a specific dashboard layout.
     * @param dashBoardId
     */
    routeToDashboard = (dashBoardId: string) => {
        this.router.navigate(['dashboard', dashBoardId]).then();
    };

    /**
     * Routes to a specific dashboard layout.
     * @param sourceType
     */
    routeToMonitoring = (sourceType: string) => {
        this.router.navigate(['monitoring', sourceType]).then();
    };

    /**
     * Routes to specific component.
     * @param componentName
     */
    routeToComponent = (componentName: string) => {
        this.router.navigate([componentName]).then();
    };

    /**
     * Pings the server to see if it is alive
     */
    pingServer = () => {
        if (this.router.url !== "/serverError") {
            this.http.get(this.global.serverTargetAddressBase + "ping").subscribe(data => {
            },err => {
                console.error(err);
                this.router.navigate(['serverError']).then();
            });
        }
    }
}
