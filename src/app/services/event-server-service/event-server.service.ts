import {Injectable} from '@angular/core';

@Injectable()
export class EventServerService {

    constructor() {
        let obj = es_connector("ws://130.240.200.46:5000/ws-dummy", {minlvl: 0, maxlvl: 4, cats: []}, this.onConnect, this.onDisconnect, this.onMessage);
        obj.connect();
    }

    private clientOnMessage: any = (event: any) => {};

    getEventNotifications = (): Array<any> => {
        return [
            {
                ts: '2018-12-02 14:00:11',
                level: 1,
                cat: 'something',
                msg: 'Monitor #2432 close to SLA boundary'
            },
            {
                ts: '2018-12-02 14:00:11',
                level: 2,
                cat: 'something',
                msg: 'Monitor #263 exceeded SLA boundary'
            },
            {
                ts: '2018-12-02 14:00:11',
                level: 3,
                cat: 'something',
                msg: 'Agent #5432 appears to be down'
            }
        ];
    };

    setOnMessage = (func: any) => {
        this.clientOnMessage = func;
    };

    private onMessage = (event: any) => {
        //TODO add storing in localstorage or whatever

        this.clientOnMessage(event);
    };

    private onConnect = (event: any) => {
        console.log("Successfully connected to the EventServer");
    };

    private onDisconnect = (event: any) => {
        console.log("EventServer connection ended");
    };
}
