import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global-service/global.service';
import {DummyDataService} from '../dummy-data-service/dummy-data.service';

@Injectable()
export class DruidDataService {

    constructor(private http: HttpClient, private global: GlobalService, private dummyData: DummyDataService) {
    }

    /**
     * JSON object with functions, that are used to retrieve data for widget population.
     *
     * Following parameters are used in the functions:
     * selector - Data source type for queries (streams, tasks, or monitors).
     * measure - Measure for queries (SLA, delay, etc).
     * sourceID - ID of the source stream in timeseries queries.
     * interval - Time interval to fetch data from.
     * historical - Number of minutes to go back in time to fetch historical data of a timeseries.
     * count - Number of entries to display in top-n query.
     */
    public dataRetriever = {
        topNWorst: (selector: string, measure: string, count: number, interval: number): Promise<any> => {
            return this.httpGetter(this.global.apiServerTargetAddressBase + 'topn/' + selector + '/' + measure + '?interval=' + interval + '&count=' + count);
        },
        realTime: (selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
            return this.httpGetter(this.global.apiServerTargetAddressBase + 'timeseries/' + sourceID + '/' + measure + '?interval=' + interval);
        },
        historical: (selector: string, measure: string, sourceID: string, interval: number, historical: number): Promise<any> => {
            return this.httpGetter(this.global.apiServerTargetAddressBase + 'timeseries/' + sourceID + '/' + measure + '?interval=' + interval + '&historic=' + historical);
        },
        esContribution: (selector: string, interval: number): Promise<any> => {
            return this.dummyData.esContributionData();
        },
        getReflectors: (fromLat, fromLng, toLat, toLng): Promise<any> => {
            return this.dummyData.getReflectors(fromLat, fromLng, toLat, toLng);
        },
        streamOverview: (streamID: number, interval: number): Promise<any> => {
            return this.httpGetter(this.global.apiServerTargetAddressBase + 'scan/' + streamID +  '?interval=' + interval);
        },
        monitorOverview: (id: any): any => {
            return this.dummyData.monitorOverviewData(id);
        }
    };

    /**
     * JSON object with functions, that are used to retrieve predictions for widget population.* selector - Data source type for queries (streams, tasks, or monitors).
     *
     * Following parameters are used in the functions:
     * latestTimestamp - latest timestamp of the data series.
     * latestValue - latest value of the data series.
     * measure - Measure for queries (SLA, delay, etc).
     * sourceID - ID of the source stream in timeseries queries.
     * interval - Time interval to fetch data from.
     */
    public predictionRetriever = {
        realTimePrediction: (latestTimestamp: Date, latestValue: string, selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
            if (measure === 'davg') {
                return this.httpGetter(this.global.predictionServerTargetAddressBase + sourceID + '/' + measure + '?interval=' + interval);
            }
            return this.dummyData.realTimePredictionData(latestTimestamp, latestValue, selector, measure, sourceID, interval);
        }
    };

    /**
     * Makes HTTP GET calls to a target address.
     * @param targetAddress
     */
    httpGetter = (targetAddress: any): Promise<any> => {
        return new Promise((resolve) => {
            this.http.get(targetAddress).subscribe(data => {
                resolve(data);
            });
        });
    };
}
