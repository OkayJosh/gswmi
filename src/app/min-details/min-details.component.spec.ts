import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinDetailsComponent } from './min-details.component';

describe('MinDetailsComponent', () => {
  let component: MinDetailsComponent;
  let fixture: ComponentFixture<MinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
