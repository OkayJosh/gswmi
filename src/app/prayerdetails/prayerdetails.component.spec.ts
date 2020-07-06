import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerdetailsComponent } from './prayerdetails.component';

describe('PrayerdetailsComponent', () => {
  let component: PrayerdetailsComponent;
  let fixture: ComponentFixture<PrayerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
