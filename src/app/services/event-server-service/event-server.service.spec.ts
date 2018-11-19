import {TestBed, inject} from '@angular/core/testing';

import {EventServerService} from './event-server.service';

describe('EventServerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventServerService]
        });
    });

    it('should be created', inject([EventServerService], (service: EventServerService) => {
        expect(service).toBeTruthy();
    }));
});
