import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowArticlesComponent } from './show-articles.component';
import { ShowArticleComponent } from './show-article/show-article.component';

const articlesRoutes: Routes = [
    { path: 'articles', component: ShowArticlesComponent },
    { path: 'article/:id', component: ShowArticleComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticlesRoutingModule { }

