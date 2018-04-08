import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { ShowArticlesModule } from './show-articles/show-articles.module';
import { UserStatusComponent } from './user-status/user-status.component';
import { UsersListComponent } from './users-list/users-list.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/articles',
        pathMatch: 'full'
    },
    {
        path: 'addArticle',
        component: AddArticleComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: 'addUser',
        component: AddUserComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'uploadsList',
        component: UploadListComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: 'status',
        component: UsersListComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [ShowArticlesModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
