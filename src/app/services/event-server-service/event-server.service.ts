import {Injectable} from '@angular/core';
import {GlobalService} from '../global-service/global.service';
import {Subject} from 'rxjs/Subject';

declare var es_connector: any;

@Injectable()
export class EventServerService {

    public eventIncoming: Subject<any>;

    constructor(private global: GlobalService) {
        this.eventIncoming = new Subject<any>();
        let obj = es_connector(this.global.eventServerTargetAddressBase, {minlvl: 0, maxlvl: 4, cats: []}, this.onConnect, this.onDisconnect, this.onMessage);
        obj.connect();
    }

    private clientOnMessage: any = (event: any) => {};

    getEventNotifications = (): Array<any> => {
        return JSON.parse(localStorage.getItem('notifications'));
    };

    setOnMessage = (func: any) => {
        this.clientOnMessage = func;
    };

    private onMessage = (event: any) => {
        this.eventIncoming.next();
        this.saveNotification(event);
        this.clientOnMessage(event);
    };

    private onConnect = (event: any) => {
        console.log("Successfully connected to the EventServer");
    };

    private onDisconnect = (event: any) => {
        console.log("EventServer connection ended");
    };

    private saveNotification = (event: any) => {
        let savedNotifications = JSON.parse(localStorage.getItem('notifications'));
        savedNotifications = savedNotifications === null ? []: savedNotifications;
        savedNotifications.push(event);
        localStorage.setItem('notifications', JSON.stringify(savedNotifications));
    }
}
