import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Subscription } from "rxjs";
import { SubmitNameComponent } from "./submit-name.component";

describe("SubmitNameComponent", () => {
  let component: SubmitNameComponent;
  let fixture: ComponentFixture<SubmitNameComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitNameComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the SubmitNameComponent", () => {
    expect(component).toBeTruthy();
  });
});
