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

    private geoLocations: any[] = [];

    realTimePrediction = (selector: string, measure: string, sourceID: string, interval: number): any => {

        return new Promise(function(resolve, reject) {
            let rnd = (from, to) => {
                return (Math.min(from, to) + Math.abs(from - to) * Math.random());
            };

            let retval = [
                {ID: '11:00', Data: rnd(0, 5)},
                {ID: '11:05', Data: rnd(0, 5)},
                {ID: '11:10', Data: rnd(0, 5)},
                {ID: '11:15', Data: rnd(0, 5)},
                {ID: '11:20', Data: rnd(0, 5)}
            ];


            resolve(retval);
        });
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

    GeographicOverview = (FromLat, FromLng, ToLat, ToLng): any => {

        let that = this;
        return new Promise(function(resolve, reject) {
            let rnd = (from, to) => {
                return (Math.min(from, to) + Math.abs(from - to) * Math.random());
            };


            if(!that.geoLocations.length){
                console.log('hej');
                let retval = [];
                for (let i = 1; i < 101; i++) {
                    retval.push({
                        ID: i,
                        name: 'reflector' + i,
                        lat: rnd(FromLat, ToLat),
                        lng: rnd(FromLng, ToLng),
                        breachedSLA: i % 10 === 0 ? true : false
                    });
                }
                that.geoLocations = retval;
            } else {
                for (let i = 0; i < that.geoLocations.length; i++){
                    that.geoLocations[i]['breachedSLA'] = rnd(0, 10) > 9 ? true : false;
                }
            }




            resolve(that.geoLocations.slice());
        });
    };
}
