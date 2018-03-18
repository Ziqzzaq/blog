import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ShowArticlesComponent } from './show-articles.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ArticlesRoutingModule } from './show-articles.routing.module';
import {InnerHtmlPipe} from "../shared/inner-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ShowArticlesComponent,
    ShowArticleComponent,
    InnerHtmlPipe
  ],
  providers: []
})
export class ShowArticlesModule {}

