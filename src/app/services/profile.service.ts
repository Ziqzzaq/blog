import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { User } from '@firebase/auth-types';
import {AngularFireDatabase} from 'angularfire2/database';
import {Upload} from '../models/upload';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class ProfileService {

  user: User;
  photo: Observable<any[]>;
  basePath = 'face';

  constructor(private angularFire: AngularFireAuth, private db: AngularFireDatabase) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
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

  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${this.user.uid}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        const snap = snapshot;
        upload.progress = Math.round(
          snap.bytesTransferred / snap.totalBytes * 100
        );
      },
      error => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        if (uploadTask.snapshot.downloadURL) {
          upload.url = uploadTask.snapshot.downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(upload);
          return;
        } else {
          console.error('No download URL!');
        }
      }
    );
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/${this.user.uid}`).push(upload);
  }

  getPhoto() {
    return (this.photo = this.db
      .list(`${this.basePath}/${this.user.uid}`)
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
