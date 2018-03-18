import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpService } from './services/http.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ArticleService } from './services/article.service'
import { AuthService } from './auth/auth.service'
import { AuthGuardsService } from './auth/auth-guards.service'
import { AppComponent } from './app.component'
import { LoginComponent } from './auth/login/login.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from './app.routing.module';
import { ShowArticlesModule } from './show-articles/show-articles.module'
import { AdminModule } from './admin/admin.module'
import { HttpClientModule } from '@angular/common/http'
import { AsyncLocalStorageModule } from 'angular-async-local-storage'
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'

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
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowArticlesModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AsyncLocalStorageModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [HttpService,ArticleService,AuthService,AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
