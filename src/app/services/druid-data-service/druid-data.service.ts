import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global-service/global.service';

@Injectable()
export class DruidDataService {



    constructor(private http: HttpClient, private global: GlobalService) {
    }

    public dataRetriever = {
        topNWorst: (selector: string, measure: string, count: number, interval: number): Promise<any> => {
            let serverTargetAddress = this.global.serverTargetAddressBase + "?dataType=topNWorst&selector=" + selector + "&measure=" + measure + "&threshold=" + count +"&interval=" + interval;
            return this.httpGetter(serverTargetAddress);
        },
        realTime: (selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
            let serverTargetAddress = this.global.serverTargetAddressBase + "?dataType=realTime&selector=" + selector + "&measure=" + measure + "&sourceID=" + sourceID + "&interval=" + interval;
            return this.httpGetter(serverTargetAddress);
        },
        esContribution: (selector: string, interval: number): Promise<any> => {
            let serverTargetAddress = this.global.serverTargetAddressBase + "?dataType=esContribution&selector=" + selector + "&interval=" + interval;
            return this.httpGetter(serverTargetAddress);
        }
    };


    httpGetter = (requestAddress: any): Promise<any> => {
        return new Promise((resolve) => {
            this.http.get(requestAddress).subscribe(data => {
                resolve(data)
            });
        });
    };


    MonitorOverview = (id: any): any => {

        let dt = new Date('1995-12-17T11:00:00');
        let tarr = new Array();
        for (let i = 0; i < 100; i++) {
            tarr.push(dt.toISOString());
            dt.setMinutes(dt.getMinutes() + 30);
        }

        let retval = {
            ID: id,
            tasks: []
        };

        for (let z = 0; z < 5; z++) {
            retval.tasks.push({
                ID: 'tsk' + (z + 1),
                ESData: tarr.map(x => ({Timestamp: x, ES: Math.floor((Math.random() * 3) + 1)}))
            });
        }

        return retval;
    };
}
