import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VotesComponent implements OnInit {

  public posts: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.posts = db.collection('post').valueChanges();
  }

  ngOnInit() {
  }

}
