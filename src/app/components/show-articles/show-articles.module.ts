import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ShowArticlesComponent } from './show-articles.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ArticlesRoutingModule } from './show-articles.routing.module';
import { InnerHtmlPipe } from '../../shared/inner-html.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ReactionService } from '../../services/reaction.service';
import { ReactionComponent } from '../reaction/reaction.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { ClickOutsideModule } from 'ng4-click-outside';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NgxPaginationModule,
    BrowserModule,
    ClickOutsideModule
  ],
  declarations: [
    ShowArticlesComponent,
    ShowArticleComponent,
    LoadingSpinnerComponent,
    ReactionComponent,
    SidebarComponent,
    InnerHtmlPipe
  ],
  providers: [Title, ReactionService]
})
export class ShowArticlesModule {}
