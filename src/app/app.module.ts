import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleService } from './services/article.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardsService } from './auth/auth-guards.service';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UploadModule } from './components/uploads/upload.module';

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
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AsyncLocalStorageModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [HttpService, ArticleService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
