import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const ProfileRoutes: Routes = [
    { path: 'profile', component: ProfileComponent }
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

