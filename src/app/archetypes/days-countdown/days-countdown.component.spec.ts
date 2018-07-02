import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysCountdownComponent } from './days-countdown.component';

describe('DaysCountdownComponent', () => {
  let component: DaysCountdownComponent;
  let fixture: ComponentFixture<DaysCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
