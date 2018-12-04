import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StreamOverviewComponent} from './stream-overview.component';

describe('StreamOverviewComponent', () => {
    let component: StreamOverviewComponent;
    let fixture: ComponentFixture<StreamOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StreamOverviewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StreamOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
