import {Injectable} from '@angular/core';

@Injectable()
export class DummyDataService {

    constructor() {
    }

    esContributionData = (): Promise<any> => {
        return new Promise((resolve => resolve([
            {ID: 'Monitor Loss', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'Delay', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'Delay variation', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'SES', 'Data': {es: Math.floor((Math.random() * 100) + 1)}}
        ])));
    };
}
