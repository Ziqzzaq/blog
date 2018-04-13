import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user.component';
import {AuthGuardsService} from '../../auth/auth-guards.service';

const addUserRoutes: Routes = [
    { path: 'addUser', component: AddUserComponent, canActivate:  [AuthGuardsService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(addUserRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AddUserRoutingModule { }

