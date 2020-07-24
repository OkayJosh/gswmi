import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMinComponent } from './create-min.component';

describe('CreateMinComponent', () => {
  let component: CreateMinComponent;
  let fixture: ComponentFixture<CreateMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
