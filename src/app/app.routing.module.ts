import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardsService } from './auth/auth-guards.service';

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
