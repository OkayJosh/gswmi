import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerlistComponent } from './prayerlist.component';

describe('PrayerlistComponent', () => {
  let component: PrayerlistComponent;
  let fixture: ComponentFixture<PrayerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
