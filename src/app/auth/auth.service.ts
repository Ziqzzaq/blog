import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from '@firebase/auth-types';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: User;
  users: Observable<any[]>;
  typing;

  constructor(
    private angularFire: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    angularFire.authState.subscribe(user => {
      this.user = user;
      this.updateOnConnect();
    });
  }

  /*------------STATUS-------------*/

  updateStatus(status: string) {
    if (this.user) {
      return this.db
        .object(`users/` + this.user.uid)
        .update({ status: status, name: this.user.displayName });
    }
  }

  /// Updates status when connection to Firebase starts
  private updateOnConnect() {
    return this.updateStatus('online');
  }

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

  isTyping() {
    return (this.typing = this.db
      .list('isTyping')
      .snapshotChanges()
      .map(actions => {
        return actions.map(typing => {
          const data = typing.payload.val();
          return data ;
        });
      }));
  }

  setTyping(state) {
    this.db
      .object(`isTyping/`)
      .update({ status: `${state}`, name: this.user.displayName });
  }


  setOnline() {
    this.db
      .object(`users/` + this.user.uid)
      .update({ status: 'online', name: this.user.displayName });
  }

  setAway() {
    this.db
      .object(`users/` + this.user.uid)
      .update({ status: 'away', name: this.user.displayName });
  }

  setOffline() {
    this.db
      .object(`users/` + this.user.uid)
      .update({ status: 'offline', name: this.user.displayName });
  }

  login(email: string, password: string) {
    this.angularFire.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        this.router.navigate(['/articles']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  loginInAnonymously() {
    this.angularFire.auth.signInAnonymously().catch(function(error) {});
  }

  addUser(email: string, password: string, name: string) {
    this.angularFire.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        user
          .updateProfile({
            displayName: name
          })
          .then(
            () => {
              console.log('Succesful update');
            },
            error => {
              console.log(error);
            }
          );
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    this.updateStatus('offline');
    this.angularFire.auth.signOut();
  }

  updateName(newName: string) {
    this.user
      .updateProfile({
        displayName: newName,
        photoURL: ''
      })
      .then(() => {
        console.log('Succesful update name');
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateEmail(newEmail: string) {
    this.user
      .updateEmail(newEmail)
      .then(() => {
        console.log('Succesful update email');
      })
      .catch(error => {
        console.log(error);
      });
  }

  updatePassword(newPassword) {
    this.user
      .updatePassword(newPassword)
      .then(function() {
        console.log('Succesful update password');
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
