import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component'
import { AddArticleComponent } from './add-article/add-article.component';

const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'admin/addArticle', component: AddArticleComponent },
    { path: 'admin/addUser', component: AddUserComponent },
    { path: 'admin/profile', component: ProfileComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }

