import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadListComponent } from './upload-list/upload-list.component';
import {AuthGuardsService} from '../../auth/auth-guards.service';

const UploadRoutes: Routes = [
    { path: 'uploadsList', component: UploadListComponent, canActivate:  [AuthGuardsService] }
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

