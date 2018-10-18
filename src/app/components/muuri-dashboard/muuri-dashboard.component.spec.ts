import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuuriDashboardComponent } from './muuri-dashboard.component';

describe('MuuriDashboardComponent', () => {
  let component: MuuriDashboardComponent;
  let fixture: ComponentFixture<MuuriDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuuriDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuuriDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
