import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Injectable()
export class ReactionService {

  userId: string;
  emojiList = ['like', 'love', 'wow', 'haha', 'sad', 'angry'];

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        this.userId = auth.uid;
      }
    });
  }

  getReactions(itemId): AngularFireObject<any> {
    return this.db.object(`reactions/${itemId}`);
  }

  updateReaction(itemId, reaction = 0) {
    const data = { [this.userId]: reaction };
    this.db.object(`reactions/${itemId}`).update(data);
  }

  removeReaction(itemId) {
    this.db.object(`reactions/${itemId}/${this.userId}`).remove();
  }

  countReactions(reactions: Array<any>) {
    return _.mapValues(_.groupBy(reactions), 'length');
  }

  userReaction(reactions: Array<any>) {
    return _.get(reactions, this.userId);
  }

}
