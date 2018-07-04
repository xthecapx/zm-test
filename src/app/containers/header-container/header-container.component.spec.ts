import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HeaderContainerComponent } from "./header-container.component";
import { HeaderContainerService } from "./header-container.service";
import { HeaderContainerServiceStub } from "./header-container.service.stub.spec";
import { Subscription } from "rxjs";

describe("HeaderContainerComponent", () => {
  let component: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContainerComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: HeaderContainerService,
          useClass: HeaderContainerServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the VotesComponent and set the correct ID", async(() => {
    expect(component).toBeTruthy();

    subs.push(
      component.featured$.subscribe(post => {
        expect(post[0].id).toEqual("ABC23");
      })
    );
  }));
});
