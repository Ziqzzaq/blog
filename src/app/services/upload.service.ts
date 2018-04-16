import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Upload } from '../models/upload';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadService {
  basePath = 'uploads';
  uploads: Observable<Upload[]>;

  constructor(private db: AngularFireDatabase) {}

  getUploads() {
    return (this.uploads = this.db
      .list(this.basePath)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.val();
          const $key = a.payload.key;
          return { $key, ...data };
        });
      }));
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then(() => {
        this.deleteFileStorage(upload.name);
      })
      .catch(error => console.log(error));
  }

  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${upload.file.name}`)
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

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

  // Writes the file details to the realtime db
  private deleteFileData(key: string) {
    console.log(`${this.basePath}/${key}`);
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
