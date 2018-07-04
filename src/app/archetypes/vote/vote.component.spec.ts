import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Subscription } from "rxjs";
import { VoteComponent } from "./vote.component";
import { PostService } from "src/app/containers/votes/post.service";
import {
  PostServiceStub,
  POST_MOCK
} from "src/app/containers/votes/post.service.stub.spec";

describe("VoteComponent", () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let subs: Subscription[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: PostService, useClass: PostServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    component.config = POST_MOCK;
    fixture.detectChanges();
  });

  it("should create the VoteComponent", () => {
    expect(component).toBeTruthy();
  });

  describe("actionClicked()", () => {
    it("should set the clicked key", () => {
      component.actionClicked("key");

      expect(component.active).toEqual("key");
    });
  });

  describe("vote()", () => {
    it("should call the post service and updatePostRate", () => {
      const updatePost = spyOn((<any>component).postService, "updatePost");
      (<any>component).active = true;

      component.vote();

      expect(updatePost).toHaveBeenCalled();
    });
  });

  describe("voteAgain()", () => {
    it("should set the correct status of userVote", () => {
      const setUserVote = spyOn((<any>component).postService, "setUserVote");

      component.voteAgain();

      expect(component.userVote).toBeFalsy();
      expect(setUserVote).toHaveBeenCalled();
    });
  });
});
