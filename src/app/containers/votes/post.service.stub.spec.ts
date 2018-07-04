import { of } from "rxjs";

export const POST_MOCK = {
  type: "added",
  creationDate: "1/1/2018",
  description: "asdasdasd",
  dislikes: 1,
  likes: 1,
  person: "person",
  tag: "tag",
  background: "/as/asd.jpg"
};

export const fireBaseMock = {
  payload: {
    doc: {
      newIndex: 0,
      oldIndex: -1,
      type: "added",
      id: "ABC23",
      data: function() {
        return POST_MOCK;
      }
    }
  }
};

export class PostServiceStub {
  public updatePost(id: string, value: any): void {}
  public getPostList() {
    return of([fireBaseMock]);
  }
  public setUserVote(key, status) {}
  public getUserVoteStatus() {
    return true;
  }
}
