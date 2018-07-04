import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Subscription } from "rxjs";
import { DaysCountdownComponent } from "./days-countdown.component";

describe("DaysCountdownComponent", () => {
  let component: DaysCountdownComponent;
  let fixture: ComponentFixture<DaysCountdownComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaysCountdownComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysCountdownComponent);
    component = fixture.componentInstance;
    component.config = { closingDate: "10/10/2018", creationDate: "1/10/2018" };
    fixture.detectChanges();
  });

  it("should create the DaysCountdownComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should return the days between two dates", () => {
    const a = new Date("10/1/2018");
    const b = new Date("10/3/2018");

    expect(component.dateDiffInDays(a, b)).toBe(2);
  });
});
