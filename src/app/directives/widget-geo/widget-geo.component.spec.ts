import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGeoComponent } from './widget-geo.component';

describe('WidgetGeoComponent', () => {
  let component: WidgetGeoComponent;
  let fixture: ComponentFixture<WidgetGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
