import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Subscription } from "rxjs";
import { MainQuoteComponent } from "./main-quote.component";

describe("SubmitNameComponent", () => {
  let component: MainQuoteComponent;
  let fixture: ComponentFixture<MainQuoteComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainQuoteComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the MainQuoteComponent", () => {
    expect(component).toBeTruthy();
  });
});
