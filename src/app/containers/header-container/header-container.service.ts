import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { FeaturedPostModel } from "./featured-post.model";

@Injectable()
export class HeaderContainerService {
  private dbPath = "/featuredPost";
  public featuredCollectionRef: AngularFirestoreCollection<FeaturedPostModel>;

  constructor(db: AngularFirestore) {
    this.featuredCollectionRef = db.collection<FeaturedPostModel>(this.dbPath);
  }

  public updateFeaturedPost(id: string, value: any): void {
    this.featuredCollectionRef
      .doc(id)
      .update(value)
      .catch(error => this.handleError(error));
  }

  public getFeaturedPostList(): Observable<
    DocumentChangeAction<FeaturedPostModel>[]
  > {
    return this.featuredCollectionRef.snapshotChanges();
  }

  private handleError(error) {
    console.log(error);
  }
}
