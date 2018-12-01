import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global-service/global.service';
import {DummyDataService} from '../dummy-data.service';

@Injectable()
export class DruidDataService {


    constructor(private http: HttpClient, private global: GlobalService, private dummyData: DummyDataService) {
    }

    public dataRetriever = {
        topNWorst: (selector: string, measure: string, count: number, interval: number): Promise<any> => {
            let serverTargetAddress = this.global.serverTargetAddressBase + 'topn/' + selector + '/' + measure + '?interval=' + '99999' + '&count=' + count;
            return this.httpGetter(serverTargetAddress);
        },
        realTime: (selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
            let serverTargetAddress = this.global.serverTargetAddressBase + 'timeseries/' + sourceID + '/' + measure + '?interval=' + '99999';
            return this.httpGetter(serverTargetAddress);
        },
        esContribution: (selector: string, interval: number): Promise<any> => {
            return this.dummyData.esContributionData();
        },
        geographicOverview: (fromLat, fromLng, toLat, toLng): Promise<any> => {
            return this.dummyData.geographicOverviewData(fromLat, fromLng, toLat, toLng);
        },
        monitorOverview: (id: any): any => {
            return this.dummyData.monitorOverviewData(id);
        }
    };

    public predictionRetriever = {
        realTimePrediction: (latestTimestamp: Date, latestValue: string, selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
            return this.dummyData.realTimePredictionData(latestTimestamp, latestValue, selector, measure, sourceID, interval);
        }
    };



    httpGetter = (requestAddress: any): Promise<any> => {
        return new Promise((resolve) => {
            this.http.get(requestAddress).subscribe(data => {
                resolve(data);
            });
        });
    };
}
