import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    public dummyApiServerTargetAddressBase = 'http://localhost/kubescale-backend-dummy/api-main.php';
    public apiServerTargetAddressBase = 'http://metrics.api.kubescale.cloud/metrics/';
    public eventServerTargetAddressBase = 'ws://130.240.200.46:5000/ws-dummy';

    constructor() {
    }
}
