import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/containers/votes/post.service';
import { Post } from 'src/app/containers/votes/post.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  @Input() config;

  constructor(private postService: PostService) {}

  ngOnInit() {
  }

  updateLikes(config: Post) {
    const updatedObject = { ...config, likes: ++config.likes };
    this.postService.updateCustomer(config.id, updatedObject);
  }
}
