import {Injectable} from '@angular/core';

@Injectable()
export class DruidDataService {

    constructor() {
    }

    WorstMonitorsSLA15 = (): Array<any> => {
        return [
            {ID: 55, Data: {SLA: 80}},
            {ID: 465, Data: {SLA: 82}},
            {ID: 344, Data: {SLA: 87}},
            {ID: 254, Data: {SLA: 91}},
            {ID: 11, Data: {SLA: 95}},
            {ID: 755, Data: {SLA: 96}},
            {ID: 343, Data: {SLA: 96}},
            {ID: 222, Data: {SLA: 98}},
            {ID: 87, Data: {SLA: 99}},
            {ID: 555, Data: {SLA: 99}}
        ];
    };

    ESContribution = (): Array<any> => {
        return [
            {ID: 'Loss', Data: {ES: 500}},
            {ID: 'Delay', Data: {ES: 322}},
            {ID: 'Delay variation', Data: {ES: 65}},
            {ID: 'SES', Data: {ES: 23}}
        ];
    };

    NFLMonitors = (): Array<any> => {
        return [
            {ID: '10:30', Data: {Near: 2, Far: 3}},
            {ID: '10:35', Data: {Near: 2, Far: 2}},
            {ID: '10:40', Data: {Near: 3, Far: 1}},
            {ID: '10:45', Data: {Near: 2, Far: 1}},
            {ID: '10:50', Data: {Near: 4, Far: 3}},
            {ID: '10:55', Data: {Near: 4, Far: 4}},
            {ID: '11:00', Data: {Near: 3, Far: 3}},
        ];
    }

    WorstTasksDelay = (): Array<any> => {
        return [
            {ID: 55, Data: {Delay: 45}},
            {ID: 465, Data: {Delay: 34}},
            {ID: 344, Data: {Delay: 24}},
            {ID: 254, Data: {Delay: 23}},
            {ID: 11, Data: {Delay: 23}},
            {ID: 755, Data: {Delay: 21}},
            {ID: 343, Data: {Delay: 20}},
            {ID: 222, Data: {Delay: 19}},
            {ID: 87, Data: {Delay: 18}},
            {ID: 555, Data: {Delay: 18}}
        ];
    }
}
