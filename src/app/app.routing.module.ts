import { ShowArticlesModule } from './components/show-articles/show-articles.module';
import { ChatModule } from './components/chat/chat.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddArticleModule } from './components/add-article/add-article.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileModule } from './components/profile/profile.module';
import { LoginModule } from './components/login/login.module';
import { AddUserModule } from './components/add-user/add-user.module';
import { UploadModule } from './components/uploads/upload.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    UploadModule,
    ProfileModule,
    AddUserModule,
    LoginModule,
    AddArticleModule,
    ShowArticlesModule,
    UploadModule,
    ChatModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
