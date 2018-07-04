import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/containers/votes/post.service";
import { Post } from "src/app/containers/votes/post.model";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.scss"]
})
export class VoteComponent implements OnInit {
  public active: string;
  public userVote: boolean;
  public percentages: {
    total: number;
    likes: number;
    dislikes: number;
  };
  @Input() config: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this._calculatePercentage();
    this.userVote = this.postService.getUserVoteStatus()[this.config.id];
  }

  public actionClicked(key: string) {
    this.active = key;
  }

  public vote(): void {
    if (this.active) {
      this.updatePostRate(this.active);
      this.postService.setUserVote(this.config.id, true);
    }
  }

  public voteAgain(): void {
    this.userVote = false;
    this.postService.setUserVote(this.config.id, false);
  }

  public updatePostRate(key: string) {
    const updatedObject = {
      [key]: ++this.config[key]
    };

    this.postService.updatePost(this.config.id, updatedObject);
  }

  private _calculatePercentage() {
    const total = this.config.likes + this.config.dislikes;
    const likes = (this.config.likes / total) * 100;
    const dislikes = 100 - likes;

    this.percentages = {
      total: total,
      likes: likes,
      dislikes: dislikes
    };
  }
}
