import {Component, OnInit} from '@angular/core';
import {EventServerService} from '../../services/event-server-service/event-server.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    public notifications: Array<any>;

    constructor(private eventFetcher: EventServerService, private router: Router) {
    }

    ngOnInit() {
        this.getNotifications();
        this.eventFetcher.eventIncoming.subscribe(() => {
            this.getNotifications();
        });
    }

    /**
     * Fetches notifications from EventServerService.
     */
    getNotifications = () => {
        this.notifications = this.eventFetcher.getEventNotifications();
    };

    removeNotification = (notification: any): void => {
        let savedNotifications = JSON.parse(localStorage.getItem('notifications'));
        let updatedNotifications = [];
        savedNotifications = savedNotifications === null ? [] : savedNotifications;
        savedNotifications.forEach((row) => {
            if (JSON.stringify(row) !== JSON.stringify(notification)) {
               updatedNotifications.push(row);
            }
        });
        localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
        this.eventFetcher.eventIncoming.next();
    };

    clearNotifications = (): void => {
        localStorage.removeItem('notifications');
        this.eventFetcher.eventIncoming.next();
    };

    /**
     * Routes to an instance for monitoring.
     * @param sourceType
     * @param sourceID
     */
    routeToInstance = (sourceType: string, sourceID : string) => {
        this.router.navigate(['monitoring/' + sourceType, sourceID]).then();
    }
}
