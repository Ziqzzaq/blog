import { Component, OnInit } from '@angular/core';

import { UploadService } from '../../../services/upload.service';
import { Upload } from '../../../models/upload';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-uploads-list',
  templateUrl: 'upload-list.component.html',
  styleUrls: ['upload-list.component.css'],
})
export class UploadListComponent implements OnInit {

  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false);
  }
}
