import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Min4Component } from './min4.component';

describe('Min4Component', () => {
  let component: Min4Component;
  let fixture: ComponentFixture<Min4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Min4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Min4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
