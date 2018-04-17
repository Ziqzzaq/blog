import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class ChatService {

  photos: Observable<any[]>;
  users: Observable<any[]>;
  basePath = 'face';
  constructor(private db: AngularFireDatabase, private authService: AuthService) { }


  getUsers() {
    return (this.users = this.db
      .list('users')
      .snapshotChanges()
      .map(actions => {
        return actions.map(user => {
          const data = user.payload.val();
          const $key = user.payload.key;
          return { $key, ...data };
        });
      }));
  }

  getPhotos(userId) {
    return (this.photos = this.db
      .list(`${this.basePath}/${userId}`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.val();
          const $key = a.payload.key;
          return { $key, ...data };
        });
      }));
  }

}
