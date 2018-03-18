import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddUserComponent } from './auth/add-user/add-user.component';
import { ProfileComponent } from './auth/profile/profile.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/showArticles',
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
        component: ProfileComponent,
    },
    {
        path: 'showArticles',
        component: ShowArticlesComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
