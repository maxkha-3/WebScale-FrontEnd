import {TestBed, inject} from '@angular/core/testing';

import {LayoutFetchingService} from './layout-fetching.service';

describe('LayoutFetchingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LayoutFetchingService]
        });
    });

    it('should be created', inject([LayoutFetchingService], (service: LayoutFetchingService) => {
        expect(service).toBeTruthy();
    }));
});
