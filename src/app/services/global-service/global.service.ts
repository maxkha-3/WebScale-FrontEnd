import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    public dummyServerTargetAddressBase = 'http://localhost/kubescale-backend-dummy/api-main.php';
    public serverTargetAddressBase = 'http://130.240.200.77:3000/metrics/';

    constructor() {
    }
}
