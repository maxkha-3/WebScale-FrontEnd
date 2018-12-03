import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    public dummyServerTargetAddressBase = 'http://localhost/kubescale-backend-dummy/api-main.php';
    public serverTargetAddressBase = 'http://metrics.api.kubescale.cloud/metrics/';

    constructor() {
    }
}
