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
                return 'blue';
            case '1':
                return 'cyan';
            case '2':
                return 'green';
            case '3':
                return 'yellow';
            case '4':
                return 'red';
        }
        return 'black';
    };

}
