import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddArticleComponent } from './add-article.component';
import { AuthGuardsService } from '../../auth/auth-guards.service';

const addArticlesRoutes: Routes = [
    { path: 'addArticle', component: AddArticleComponent, canActivate:  [AuthGuardsService]}
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

