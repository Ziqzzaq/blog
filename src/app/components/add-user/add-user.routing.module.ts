import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user.component';

const addUserRoutes: Routes = [
    { path: 'addUser', component: AddUserComponent }
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

