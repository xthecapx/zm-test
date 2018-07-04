import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-votes",
  templateUrl: "./votes.component.html",
  styleUrls: ["./votes.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class VotesComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(db: AngularFirestore, private postService: PostService) {
    this.posts$ = this.postService.getPostList().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;

          return {
            id,
            ...data,
            background: `url(${a.payload.doc.data().background})`
          };
        })
      )
    );
  }

  ngOnInit() {}
}
