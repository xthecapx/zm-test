import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Subscription } from "rxjs";
import { HeaderCardComponent } from "./header-card.component";
import { POST_MOCK } from "src/app/containers/votes/post.service.stub.spec";
import { HeaderContainerService } from "src/app/containers/header-container/header-container.service";
import { HeaderContainerServiceStub } from "src/app/containers/header-container/header-container.service.stub.spec";

const FEATURED_MOCK = {
  id: "ABC",
  description: "description",
  disclaimer: "disclaimer",
  dislikes: 5,
  likes: 5,
  question: "question",
  title: "title",
  closingDate: "1/10/2018",
  creationDate: "1/1/2018",
  background: "img.jpg"
};

describe("HeaderCardComponent", () => {
  let component: HeaderCardComponent;
  let fixture: ComponentFixture<HeaderCardComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCardComponent],
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
    fixture = TestBed.createComponent(HeaderCardComponent);
    component = fixture.componentInstance;
    component.config = FEATURED_MOCK;
    fixture.detectChanges();
  });

  it("should create the HeaderCardComponent", () => {
    expect(component).toBeTruthy();
  });

  describe("updateFeaturedPostRate", () => {
    it("should update the clicked like or dislike", () => {
      const updateFeaturedPost = spyOn(
        (<any>component).headerContainerService,
        "updateFeaturedPost"
      );
      component.updateFeaturedPostRate("like");

      expect(updateFeaturedPost).toHaveBeenCalled();
    });
  });
});
