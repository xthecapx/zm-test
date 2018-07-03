import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
 
  private dbPath = '/post';
  public posts$: Observable<Post[]>;
  public postCollectionRef: AngularFirestoreCollection<Post>;
 
  constructor(db: AngularFirestore) {
    this.postCollectionRef = db.collection<Post>(this.dbPath);
  }
 
  /*createCustomer(customer: Post): void {
    this.customersRef.push(customer);
  }
 
  updateCustomer(key: string, value: any): void {
    this.customersRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteCustomer(key: string): void {
    this.customersRef.remove(key).catch(error => this.handleError(error));
  }*/
 
  updateCustomer(id: string, value: any): void {
    this.postCollectionRef.doc(id).update(value).catch(error => this.handleError(error));
  }

  getPostList(): Observable<DocumentChangeAction<Post>[]> {
    return this.postCollectionRef.snapshotChanges();
  }
 
  /*deleteAll(): void {
    this.customersRef.remove().catch(error => this.handleError(error));
  }*/
 
  private handleError(error) {
    console.log(error);
  }
}