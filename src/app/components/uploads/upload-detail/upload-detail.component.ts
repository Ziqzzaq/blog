import { Component, Input } from '@angular/core';

import { UploadService } from '../../../services/upload.service';

import { Upload } from '../../../models/upload';

@Component({
  selector: 'app-upload-detail',
  templateUrl: 'upload-detail.component.html',
  styleUrls: ['upload-detail.component.css'],
})
export class UploadDetailComponent {

  @Input() upload: Upload;

  constructor(private upSvc: UploadService) { }

  deleteUpload() {
    this.upSvc.deleteUpload(this.upload);
  }
}
