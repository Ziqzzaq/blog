import { NgModule } from '@angular/core';

import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailComponent } from './upload-detail/upload-detail.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UploadService } from '../../services/upload.service';
import { CommonModule } from '@angular/common';
import { FileDropDirective } from '../../file-drop.directive';
import { UploadRoutingModule } from './upload.routing.module';

@NgModule({
  declarations: [
    UploadFormComponent,
    UploadListComponent,
    UploadDetailComponent,
    FileDropDirective
  ],
  imports: [CommonModule, ClipboardModule, UploadRoutingModule],
  providers: [UploadService]
})
export class UploadModule {}
