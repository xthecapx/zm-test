import { Component, OnInit } from "@angular/core";
import { HeaderContainerService } from "./header-container.service";
import { FeaturedPostModel } from "./featured-post.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-header-container",
  templateUrl: "./header-container.component.html",
  styleUrls: ["./header-container.component.scss"]
})
export class HeaderContainerComponent implements OnInit {
  public featured$: Observable<FeaturedPostModel[]>;
  public featured: FeaturedPostModel;

  constructor(private headerContainerService: HeaderContainerService) {
    this.featured$ = this.headerContainerService.getFeaturedPostList().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as FeaturedPostModel;
          const id = a.payload.doc.id;
          return {
            id,
            ...data,
            background: `url(${a.payload.doc.data().background})`
          };
        })
      )
    );

    this.featured$.subscribe(post => {
      this.featured = post[0];
    });
  }

  ngOnInit() {}
}
