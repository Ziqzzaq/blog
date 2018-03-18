import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ArticleService } from './services/article.service'
import { AuthService } from './auth/auth.service'
import { AuthGuardsService } from './auth/auth-guards.service'
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './auth/login/login.component'
import { AddUserComponent } from './auth/add-user/add-user.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from './app.routing.module';
import { ShowArticlesModule } from './show-articles/show-articles.module'
import { HttpClientModule } from '@angular/common/http';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
  apiKey: 'AIzaSyCYwMclrQ62cG0AXTkybVlm_aRvcy4JiWY',
  authDomain: 'blog-16dbd.firebaseapp.com',
  databaseURL: 'https://blog-16dbd.firebaseio.com',
  projectId: 'blog-16dbd',
  storageBucket: 'blog-16dbd.appspot.com',
  messagingSenderId: '362847072068'
};

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    LoginComponent,
    AddUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowArticlesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AsyncLocalStorageModule,
    AngularFontAwesomeModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [HttpService,ArticleService,AuthService,AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
