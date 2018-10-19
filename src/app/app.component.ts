import {Component, ViewContainerRef} from '@angular/core';
import {LayoutFetchingService} from './services/layout-fetching-service/layout-fetching.service';
import {Router} from '@angular/router';
import {ModalDialogService} from 'ngx-modal-dialog';
import {NewDashboardModalComponent} from './modals/new-dashboard-modal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public dashboardLayouts: Array<any>;

    constructor(private layoutFetcher: LayoutFetchingService, private router: Router, private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef) {
        //For testing purposes
        if (localStorage.getItem('dashboardLayouts') === null) {
            console.log('No layouts found, adding some test layouts');
            this.layoutFetcher.setLayouts(this.layoutFetcher.testLayout);
            this.layoutFetcher.saveLayouts();
        }
        this.dashboardLayouts = this.layoutFetcher.getAvailableLayouts();
    }

    createNewDashboard = (name: string) => {

    };

    routeToDashboard = (dashBoardId: string) => {
        this.router.navigate(['dashboard', dashBoardId]);
    };

    openSimpleModalWithCallback() {
        this.modalDialogService.openDialog(this.viewContainer, {
            title: 'Custom child component',
            childComponent: NewDashboardModalComponent,
            settings: {
                closeButtonClass: 'close theme-icon-close'
            },
            data: 'Hey, we are data passed from the parent!'
        });
    }
}
