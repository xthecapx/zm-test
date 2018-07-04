import { Component, OnInit, Input } from "@angular/core";
import { FeaturedPostModel } from "src/app/containers/header-container/featured-post.model";
import { HeaderContainerService } from "src/app/containers/header-container/header-container.service";

@Component({
  selector: "app-header-card",
  templateUrl: "./header-card.component.html",
  styleUrls: ["./header-card.component.scss"]
})
export class HeaderCardComponent {
  @Input() config: FeaturedPostModel;
  constructor(private headerContainerService: HeaderContainerService) {}

  public updateFeaturedPostRate(key: string) {
    const updatedObject = {
      [key]: ++this.config[key]
    };

    this.headerContainerService.updateFeaturedPost(
      this.config.id,
      updatedObject
    );
  }
}
