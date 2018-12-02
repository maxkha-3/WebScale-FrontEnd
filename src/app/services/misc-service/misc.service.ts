import {Injectable} from '@angular/core';

@Injectable()
export class MiscService {

    constructor() {
    }

    randomInt = (from, to) => {
        return (Math.min(from, to) + Math.abs(from - to) * Math.random());
    };

}
