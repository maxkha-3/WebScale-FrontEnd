import {Component} from '@angular/core';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public dashboardLayouts: Array<any>;

    constructor(private layoutFetcher: LayoutFetchingService, private router: Router) {
        //For testing purposes
        if (localStorage.getItem("dashboardLayouts") === null) {
            console.log("No layouts found, adding some test layouts");
            this.layoutFetcher.setLayouts(this.layoutFetcher.testLayout);
            this.layoutFetcher.saveLayouts()
        }
        this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts()
    }

    createNewDashboard = (name: string) => {

    };

    routeToDashboard = (dashBoardId: string) => {
        this.router.navigate(['dashboard', dashBoardId]);
    }
}
