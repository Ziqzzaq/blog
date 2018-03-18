import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/showArticles',
        pathMatch: 'full'
    },
    {
        path: 'showArticles',
        component: ShowArticlesComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
