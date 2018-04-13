import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import {AuthGuardsService} from '../../auth/auth-guards.service';

const ProfileRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate:  [AuthGuardsService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(ProfileRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule { }

