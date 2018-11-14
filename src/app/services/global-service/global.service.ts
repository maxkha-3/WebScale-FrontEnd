import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    public serverTargetAddressBase = 'http://localhost/kubescale-backend-dummy/api-main.php';

    constructor() {
    }
}
