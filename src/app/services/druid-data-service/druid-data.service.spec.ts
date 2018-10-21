import {TestBed, inject} from '@angular/core/testing';

import {DruidDataService} from './druid-data.service';

describe('DruidDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DruidDataService]
        });
    });

    it('should be created', inject([DruidDataService], (service: DruidDataService) => {
        expect(service).toBeTruthy();
    }));
});
