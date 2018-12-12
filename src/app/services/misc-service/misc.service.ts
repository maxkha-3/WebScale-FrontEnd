import {Injectable} from '@angular/core';

@Injectable()
export class MiscService {

    constructor() {
    }

    randomInt = (from, to) => {
        return (Math.min(from, to) + Math.abs(from - to) * Math.random());
    };

    getNotificationColor = (level: string): string => {
        switch (level) {
            case '0':
                return '#523d3d'; //bug
            case '1':
                return '#00d1c0'; //info
            case '2':
                return '#1d6400'; //success
            case '3':
                return '#c27500'; //warning
            case '4':
                return '#8b1110'; //critical
        }
        return 'black';
    };

}
