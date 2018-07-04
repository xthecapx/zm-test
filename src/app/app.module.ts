import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { HeaderComponent } from "./archetypes/header/header.component";
import { HeaderCardComponent } from "./archetypes/header-card/header-card.component";
import { DaysCountdownComponent } from "./archetypes/days-countdown/days-countdown.component";
import { HeaderContainerComponent } from "./containers/header-container/header-container.component";
import { MainQuoteComponent } from "./archetypes/main-quote/main-quote.component";
import { ContentComponent } from "./containers/content/content.component";
import { VoteComponent } from "./archetypes/vote/vote.component";
import { VotesComponent } from "./containers/votes/votes.component";
import { SubmitNameComponent } from "./archetypes/submit-name/submit-name.component";
import { FooterComponent } from "./containers/footer/footer.component";
import { PostService } from "./containers/votes/post.service";
import { HeaderContainerService } from "src/app/containers/header-container/header-container.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCardComponent,
    DaysCountdownComponent,
    HeaderContainerComponent,
    MainQuoteComponent,
    ContentComponent,
    VoteComponent,
    VotesComponent,
    SubmitNameComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "zemoga"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [PostService, HeaderContainerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
