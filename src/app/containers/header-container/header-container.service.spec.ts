import { getTestBed, TestBed } from "@angular/core/testing";
import { AngularFirestore } from "angularfire2/firestore";
import { of } from "rxjs";
import { HeaderContainerService } from "./header-container.service";

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

describe("HeaderContainerService", () => {
  let injector: TestBed;
  let service: HeaderContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeaderContainerService,
        { provide: AngularFirestore, useClass: AngularFirestoreStub }
      ]
    });
    injector = getTestBed();
    service = injector.get(HeaderContainerService);
  });

  afterAll(() => {
    injector = null;
    service = null;
  });

  it("should create the featuredCollectionRef", () => {
    expect(service.featuredCollectionRef).toBeDefined();
  });

  describe("getFeaturedPostList()", () => {
    it("should call snapshotChanges", () => {
      const snapshotChanges = spyOn(
        service.featuredCollectionRef,
        "snapshotChanges"
      );

      service.getFeaturedPostList();

      expect(snapshotChanges).toHaveBeenCalled();
    });
  });

  describe("updatePost", () => {
    it("should update the firebase database", () => {
      const doc = spyOn(service.featuredCollectionRef, "doc").and.callThrough();

      service.updateFeaturedPost("ID", {});

      expect(doc).toHaveBeenCalledWith("ID");
    });
  });
});
