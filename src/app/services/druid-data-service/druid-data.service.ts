import {Injectable} from '@angular/core';

@Injectable()
export class DruidDataService {

    public NFLArray: any[] = [
        {ID: '10:30', Data: {Near: 2, Far: 3}},
        {ID: '10:35', Data: {Near: 2, Far: 2}},
        {ID: '10:40', Data: {Near: 3, Far: 1}},
        {ID: '10:45', Data: {Near: 2, Far: 1}},
        {ID: '10:50', Data: {Near: 4, Far: 3}},
        {ID: '10:55', Data: {Near: 4, Far: 4}},
        {ID: '11:00', Data: {Near: 3, Far: 3}},
    ];
    public NFLDate: Date = new Date('1995-12-17T11:00:00');

    constructor() {
    }

    WorstMonitorsSLA15 = (): Array<any> => {
        let rnd = function(){
            return Math.random()/2 + 0.5;
        }

        return [
            {ID: 55, Data: {SLA: rnd()*80}},
            {ID: 465, Data: {SLA: rnd()*82}},
            {ID: 344, Data: {SLA: rnd()*87}},
            {ID: 254, Data: {SLA: rnd()*91}},
            {ID: 11, Data: {SLA: rnd()*95}},
            {ID: 755, Data: {SLA: rnd()*96}},
            {ID: 343, Data: {SLA: rnd()*96}},
            {ID: 222, Data: {SLA: rnd()*98}},
            {ID: 87, Data: {SLA: rnd()*99}},
            {ID: 555, Data: {SLA: rnd()*99}}
        ];
    };

    ESContribution = (): Array<any> => {
        let rnd = function(){
            return Math.random()/2 + 0.5;
        }

        return [
            {ID: 'Loss', Data: {ES: rnd()*500}},
            {ID: 'Delay', Data: {ES: rnd()*322}},
            {ID: 'Delay variation', Data: {ES: rnd()*350}},
            {ID: 'SES', Data: {ES: rnd()*200}}
        ];
    };

    NFLMonitors = (): Array<any> => {
        this.NFLDate.setMinutes(this.NFLDate.getMinutes()+5);
        let hours = this.NFLDate.getHours();
        let minutes = this.NFLDate.getMinutes();

        let near = Math.floor((Math.random() * 5) + 1);
        let far = Math.floor((Math.random() * 5) + 1);

        this.NFLArray.shift();
        this.NFLArray.push({ID: hours + ':' + minutes, Data: {Near: near, Far: far}});

        return this.NFLArray;
    };

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
    };
}
