import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction
} from "angularfire2/firestore";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
  private dbPath = "/post";
  public posts$: Observable<Post[]>;
  public postCollectionRef: AngularFirestoreCollection<Post>;

  constructor(db: AngularFirestore) {
    this.postCollectionRef = db.collection<Post>(this.dbPath);
  }

  public updatePost(id: string, value: any): void {
    this.postCollectionRef
      .doc(id)
      .update(value)
      .catch(error => this.handleError(error));
  }

  public getPostList(): Observable<DocumentChangeAction<Post>[]> {
    return this.postCollectionRef.snapshotChanges();
  }

  private handleError(error) {
    console.log(error);
  }
}
