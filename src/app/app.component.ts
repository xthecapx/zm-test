import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public votes: Observable<any[]>;
  title = 'app';

  constructor(db: AngularFirestore) {
    // this.votes = db.collection('votes').valueChanges();
  }
}
