import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddArticleComponent } from './add-article.component';

const addArticlesRoutes: Routes = [
    { path: 'addArticle', component: AddArticleComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(addArticlesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AddArticleRoutingModule { }

