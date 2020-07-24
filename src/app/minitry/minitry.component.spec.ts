import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitryComponent } from './minitry.component';

describe('MinitryComponent', () => {
  let component: MinitryComponent;
  let fixture: ComponentFixture<MinitryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
