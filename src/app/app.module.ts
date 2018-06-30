import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './archetypes/header/header.component';
import { HeaderCardComponent } from './archetypes/header-card/header-card.component';
import { DaysCountdownComponent } from './archetypes/days-countdown/days-countdown.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCardComponent,
    DaysCountdownComponent,
    HeaderContainerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'zemoga'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
