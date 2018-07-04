import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-votes",
  templateUrl: "./votes.component.html",
  styleUrls: ["./votes.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class VotesComponent {
  public posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
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
}
