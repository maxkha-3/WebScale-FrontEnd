import {Component} from '@angular/core';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import * as _ from 'lodash';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public dashboardLayouts: Array<any>;
    public newLayoutInitiated: boolean;
    public newLayoutName: string;

    constructor(private layoutFetcher: LayoutFetchingService, private router: Router, private toastr: ToastrService, public ngxSmartModalService: NgxSmartModalService) {
        //For testing purposes
        if (localStorage.getItem('dashboardLayouts') === null) {
            console.log('No layouts found, adding some test layouts');
            this.layoutFetcher.setLayouts(this.layoutFetcher.testLayout);
            this.layoutFetcher.saveLayouts();
        }
        this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
        this.newLayoutInitiated = false;

        this.layoutFetcher.layoutsUpdated.subscribe(() => {
            this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
        })
    }

    xd = () => {
        this.ngxSmartModalService.setModalData(this.dashboardLayouts, "myModal");
        this.ngxSmartModalService.getModal('myModal').open()
    };

    initiateNewLayout = (status: boolean): void => {
        this.newLayoutName = '';
        this.newLayoutInitiated = status;
    };

    createNewDashboard = (name: string): void => {
        console.log(name);
        this.toastr.success('New layout has been added', 'Success!');
        this.layoutFetcher.addLayout(_.camelCase(name), _.startCase(name));
        this.newLayoutName = '';
        this.newLayoutInitiated = false;
        this.router.navigate(['dashboard', _.camelCase(name)]);
    };

    routeToDashboard = (dashBoardId: string) => {
        this.router.navigate(['dashboard', dashBoardId]);
    };
}
