import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

    globalVars = {
        dashboardRows: 3
    };

    constructor() {
    }

    setDashboardRows = function(numOfRows : number) {
        this.globalVars.dashboardRows = numOfRows
    }

}
