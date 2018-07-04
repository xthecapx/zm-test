import { getTestBed, TestBed } from "@angular/core/testing";
import { PostService } from "./post.service";
import { AngularFirestore } from "angularfire2/firestore";
import { of } from "rxjs";

class AngularFirestoreStub {
  collection() {
    return {
      snapshotChanges: () => {
        return true;
      },
      doc: () => {
        return {
          update: () => {
            return {
              catch: () => {}
            };
          }
        };
      }
    };
  }
  snapshotChanges() {
    return true;
  }
}

describe("PostService", () => {
  let injector: TestBed;
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        { provide: AngularFirestore, useClass: AngularFirestoreStub }
      ]
    });
    injector = getTestBed();
    service = injector.get(PostService);
  });

  afterAll(() => {
    injector = null;
    service = null;
  });

  it("should create the postCollectionRef", () => {
    expect(service.postCollectionRef).toBeDefined();
  });

  describe("getPostList()", () => {
    it("should call snapshotChanges", () => {
      const snapshotChanges = spyOn(
        service.postCollectionRef,
        "snapshotChanges"
      );

      service.getPostList();

      expect(snapshotChanges).toHaveBeenCalled();
    });
  });

  describe("setUserVote()", () => {
    it("should set the correct status of a single vote", () => {
      service.setUserVote("test", true);

      expect(service.getUserVoteStatus()["test"]).toBeTruthy();
    });
  });

  describe("updatePost", () => {
    it("should update the firebase database", () => {
      const doc = spyOn(service.postCollectionRef, "doc").and.callThrough();

      service.updatePost("ID", {});

      expect(doc).toHaveBeenCalledWith("ID");
    });
  });
});
