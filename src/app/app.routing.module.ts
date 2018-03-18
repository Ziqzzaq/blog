import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/showArticles',
        pathMatch: 'full'
    },
    {
        path: 'addArticle',
        component: AddArticleComponent
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
