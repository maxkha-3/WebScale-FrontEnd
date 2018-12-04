import {Injectable} from '@angular/core';
import {MiscService} from '../misc-service/misc.service';

@Injectable()
export class DummyDataService {

    private geoLocations: any[] = [];

    constructor(private miscService: MiscService) {
    }

    esContributionData = (): Promise<any> => {
        return new Promise((resolve => resolve([
            {ID: 'Monitor Loss', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'Delay', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'Delay variation', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'SES', 'Data': {es: Math.floor((Math.random() * 100) + 1)}}
        ])));
    };

    monitorOverviewData = (id: any): any => {
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

    geographicOverviewData = (fromLat, fromLng, toLat, toLng): any => {
        let that = this;
        return new Promise((resolve, reject) => {
            if (!that.geoLocations.length) {
                let retval = [];
                for (let i = 1; i < 101; i++) {
                    retval.push({
                        ID: i,
                        name: 'reflector' + i,
                        lat: this.miscService.randomInt(fromLat, toLat),
                        lng: this.miscService.randomInt(fromLng, toLng),
                        breachedSLA: i % 10 === 0
                    });
                }
                that.geoLocations = retval;
            } else {
                for (let i = 0; i < that.geoLocations.length; i++) {
                    that.geoLocations[i]['breachedSLA'] = this.miscService.randomInt(0, 10) > 9;
                }
            }
            resolve(that.geoLocations.slice());
        });
    };

    realTimePredictionData = (latestTimestamp: Date, latestValue: string, selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
        return new Promise((resolve, reject) => {
            let predictionData = [{timestamp: latestTimestamp.toISOString(), value: latestValue}];

            let randFrom = 0;
            let randTo = 1000;

            if (measure === "sla") {
                randFrom = 0;
                randTo = 100;
            } else if (measure === "avg_response_time") {
                randFrom = 0;
                randTo = 600;
            }

            for (let i = 1; i < 10; i++) {
                predictionData.push({timestamp: new Date(latestTimestamp.getTime() + (interval / 20 * i * 60 * 1000)).toISOString(), value: this.miscService.randomInt(randFrom, randTo).toString()});
            }
            resolve(predictionData);
        });
    };
}
