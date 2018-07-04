import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/containers/votes/post.service";
import { Post } from "src/app/containers/votes/post.model";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.scss"]
})
export class VoteComponent implements OnInit {
  @Input() config;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  public updateLikes(post: Post) {
    const updatedObject = {
      likes: ++post.likes
    };

    this.postService.updatePost(post.id, updatedObject);
  }

  public updateDislikes(post: Post) {
    const updatedObject = {
      likes: ++post.likes
    };

    this.postService.updatePost(post.id, updatedObject);
  }

  public updatePostRate(post: Post, key: string) {
    const updatedObject = {
      [key]: ++post[key]
    };

    this.postService.updatePost(post.id, updatedObject);
  }
}
