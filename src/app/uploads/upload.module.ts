import { NgModule } from "@angular/core";

import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailComponent } from './upload-detail/upload-detail.component'
import { ClipboardModule } from 'ngx-clipboard';
import { UploadService } from "../services/upload.service";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        UploadFormComponent,
        UploadListComponent,
        UploadDetailComponent
    ],
    imports: [
        CommonModule,
        ClipboardModule
    ],
    providers: 
    [
        UploadService
    ]
})

export class UploadModule {}