import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ArticleService } from './services/article.service'
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AppRoutingModule } from './app.routing.module';
import { ShowArticlesModule } from './show-articles/show-articles.module'
import { HttpClientModule } from '@angular/common/http';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent
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
    FroalaViewModule.forRoot()
  ],
  providers: [HttpService,ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
