import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Min2Component } from './min2.component';

describe('Min2Component', () => {
  let component: Min2Component;
  let fixture: ComponentFixture<Min2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Min2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Min2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
