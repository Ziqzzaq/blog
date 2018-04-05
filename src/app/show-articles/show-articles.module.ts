import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { ShowArticlesComponent } from './show-articles.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ArticlesRoutingModule } from './show-articles.routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component'
import {InnerHtmlPipe} from "../shared/inner-html.pipe";
import {NgxPaginationModule} from 'ngx-pagination';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ReactionService } from '../services/reaction.service';
import { ReactionComponent } from '../reaction/reaction.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NgxPaginationModule,
    BrowserModule
  ],
  declarations: [
    ShowArticlesComponent,
    ShowArticleComponent,
    SidebarComponent,
    LoadingSpinnerComponent,
    ReactionComponent,
    InnerHtmlPipe
  ],
  providers: [
    Title,
    ReactionService
  ]
})
export class ShowArticlesModule {}

