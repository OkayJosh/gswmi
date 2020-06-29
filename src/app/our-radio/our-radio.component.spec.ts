import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRadioComponent } from './our-radio.component';

describe('OurRadioComponent', () => {
  let component: OurRadioComponent;
  let fixture: ComponentFixture<OurRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
