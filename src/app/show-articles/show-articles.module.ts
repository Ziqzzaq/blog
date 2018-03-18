import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ShowArticlesComponent } from './show-articles.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ArticlesRoutingModule } from './show-articles.routing.module';
import { InnerHtmlPipe } from "../shared/inner-html.pipe";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [
    ShowArticlesComponent,
    ShowArticleComponent,
    InnerHtmlPipe
  ],
  providers: []
})
export class ShowArticlesModule {}

