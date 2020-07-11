import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Min3Component } from './min3.component';

describe('Min3Component', () => {
  let component: Min3Component;
  let fixture: ComponentFixture<Min3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Min3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Min3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
