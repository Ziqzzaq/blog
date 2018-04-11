import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadListComponent } from './upload-list/upload-list.component';

const UploadRoutes: Routes = [
    { path: 'uploadsList', component: UploadListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(UploadRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UploadRoutingModule { }

