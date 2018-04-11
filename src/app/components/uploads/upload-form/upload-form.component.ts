import { Component } from '@angular/core';

import { UploadService } from '../../../services/upload.service';

import { Upload } from '../../../models/upload';

import * as _ from 'lodash';

@Component({
  selector: 'app-upload-form',
  templateUrl: 'upload-form.component.html',
  styleUrls: ['upload-form.component.css']
})
export class UploadFormComponent {
  selectedFiles: FileList | null;
  currentUpload: Upload;
  dropzoneActive = false;

  constructor(private upSvc: UploadService) {}

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadSingle() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.upSvc.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (!files || files.length === 0) {
      console.error('No Multi Files found!');
      return;
    }

    Array.from(files).forEach(file => {
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload);
    });
  }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
    const filesIndex = _.range(fileList.length);

    _.each(filesIndex, idx => {
      this.currentUpload = new Upload(fileList[idx]);
      this.upSvc.pushUpload(this.currentUpload);
    });
  }
}
