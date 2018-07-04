import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { VotesComponent } from "./votes.component";
import { PostService } from "./post.service";
import { PostServiceStub } from "./post.service.stub.spec";
import { Subscription } from "rxjs";

describe("VotesComponent", () => {
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotesComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: PostService, useClass: PostServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
  });

  afterAll(() => {
    component = null;
    fixture = null;
    subs.forEach(sub => sub.unsubscribe());
  });

  it("should create the VotesComponent and set the correct ID", async(() => {
    expect(component).toBeTruthy();

    subs.push(
      component.posts$.subscribe(post => {
        expect(post[0].id).toEqual("ABC23");
      })
    );
  }));
});
