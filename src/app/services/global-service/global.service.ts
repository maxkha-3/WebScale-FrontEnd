import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    public dummyApiServerTargetAddressBase = 'http://localhost/kubescale-backend-dummy/api-main.php';
    public apiServerTargetAddressBase = 'http://metrics.api.kubescale.cloud/metrics/';
    public predictionServerTargetAddressBase = 'http://metrics.api.kubescale.cloud/predictions/';
    public dummyEventServerTargetAddressBase = 'wss:/events.api.kubescale.cloud:5000/ws-dummy';
    public eventServerTargetAddressBase = 'wss:/events.api.kubescale.cloud:5000/ws';

    constructor() {
    }
}
