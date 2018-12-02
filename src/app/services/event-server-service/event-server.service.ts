import {Injectable} from '@angular/core';

@Injectable()
export class EventServerService {

    constructor() {
    }

    getEventNotifications = (): Array<any> => {
        return [
            {text: 'Monitor #2432 close to SLA boundary', severity: 'Critical'},
            {text: 'Monitor #263 exceeded SLA boundary', severity: 'Minor'},
            {text: 'Agent #5432 appears to be down', severity: 'Major'}
        ];
    };
}
