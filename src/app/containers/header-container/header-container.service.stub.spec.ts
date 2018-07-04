import { of } from "rxjs";

const dataMock = {
  payload: {
    doc: {
      newIndex: 0,
      oldIndex: -1,
      type: "added",
      id: "ABC23",
      data: function() {
        return {
          type: "added",
          creationDate: "1/1/2018",
          description: "asdasdasd",
          dislikes: 1,
          likes: 1,
          person: "person",
          tag: "tag",
          background: "/as/asd.jpg"
        };
      }
    }
  }
};

export class HeaderContainerServiceStub {
  public updateFeaturedPost(id: string, value: any): void {}
  public getFeaturedPostList() {
    return of([dataMock]);
  }
  public getUserVoteStatus() {}
}
