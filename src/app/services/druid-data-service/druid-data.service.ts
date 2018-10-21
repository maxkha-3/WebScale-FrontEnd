import {Injectable} from '@angular/core';

@Injectable()
export class DruidDataService {

    constructor() {
    }

    WorstMonitorsSLA15 = (): Array<any> => {
        return [
            {ID: 55, SLA: 80},
            {ID: 465, SLA: 82},
            {ID: 344, SLA: 87},
            {ID: 254, SLA: 91},
            {ID: 11, SLA: 95},
            {ID: 755, SLA: 96},
            {ID: 343, SLA: 96},
            {ID: 222, SLA: 98},
            {ID: 87, SLA: 99},
            {ID: 555, SLA: 99}
        ];
    };

    ESContribution = (): Array<any> => {
        return [
            {Type: 'Loss', Count: 500},
            {Type: 'Delay', Count: 322},
            {Type: 'Delay variation', Count: 65},
            {Type: 'SES', Count: 23}
        ];
    };

    NFLMonitors = (): Array<any> => {
        return [
            {Time: '10:30', Loss: {Near: 2, Far: 3}},
            {Time: '10:35', Loss: {Near: 2, Far: 2}},
            {Time: '10:40', Loss: {Near: 3, Far: 1}},
            {Time: '10:45', Loss: {Near: 2, Far: 1}},
            {Time: '10:50', Loss: {Near: 4, Far: 3}},
            {Time: '10:55', Loss: {Near: 4, Far: 4}},
            {Time: '11:00', Loss: {Near: 3, Far: 3}},
        ];
    }

    WorstTasksDelay = (): Array<any> => {
        return [
            {ID: 55, Delay: 45},
            {ID: 465, Delay: 34},
            {ID: 344, Delay: 24},
            {ID: 254, Delay: 23},
            {ID: 11, Delay: 23},
            {ID: 755, Delay: 21},
            {ID: 343, Delay: 20},
            {ID: 222, Delay: 19},
            {ID: 87, Delay: 18},
            {ID: 555, Delay: 18}
        ];
    }
}
