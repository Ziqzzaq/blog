import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ArticleService } from './services/article.service'
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AppRoutingModule } from './app.routing.module';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ShowArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService,ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
