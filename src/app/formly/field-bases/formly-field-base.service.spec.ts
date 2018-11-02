import {TestBed, inject} from '@angular/core/testing';

import {FormlyFieldBaseService} from './formly-field-base.service';

describe('FormlyFieldBaseService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FormlyFieldBaseService]
        });
    });

    it('should be created', inject([FormlyFieldBaseService], (service: FormlyFieldBaseService) => {
        expect(service).toBeTruthy();
    }));
});
