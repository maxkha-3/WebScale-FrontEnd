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

    rnd = (lowest, highest): any => {
        return Math.floor((Math.random() * (highest - lowest + 1)) + lowest);
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

    WorstMonitorsSLA15 = (): Array<any> => {

        let data = [
            {ID: this.rnd(1, 2), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(3, 4), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(5, 6), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(7, 8), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(9, 10), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(11, 12), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(13, 14), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(15, 16), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(17, 18), Data: {SLA: this.rnd(60, 100)}},
            {ID: this.rnd(19, 20), Data: {SLA: this.rnd(60, 100)}}
        ];

        data.sort((a, b) => a.Data.SLA - b.Data.SLA);

        return data;
    };

    ESContribution = (): Array<any> => {
        let rnd = function () {
            return Math.random() / 2 + 0.5;
        };

        return [
            {ID: 'Loss', Data: {ES: rnd() * 500}},
            {ID: 'Delay', Data: {ES: rnd() * 322}},
            {ID: 'Delay variation', Data: {ES: rnd() * 350}},
            {ID: 'SES', Data: {ES: rnd() * 200}}
        ];
    };

    NFLMonitors = (): Array<any> => {
        this.NFLDate.setMinutes(this.NFLDate.getMinutes() + 5);
        let hours = this.NFLDate.getHours();
        let minutes = this.NFLDate.getMinutes();

        let near = Math.floor((Math.random() * 5) + 1);
        let far = Math.floor((Math.random() * 5) + 1);

        this.NFLArray.shift();
        this.NFLArray.push({ID: hours + ':' + minutes, Data: {Near: near, Far: far}});

        return this.NFLArray;
    };

    WorstTasksDelay = (): Array<any> => {
        let data = [
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}},
            {ID: this.rnd(1, 1000), Data: {Delay: this.rnd(1, 50)}}
        ];

        data.sort((b, a) => a.Data.Delay - b.Data.Delay);

        return data;
    };
}
