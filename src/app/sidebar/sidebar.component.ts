import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  articlesList: Array<Article> = [];

  constructor(private articleService: ArticleService) {
    this.articleService.getArticlesListObs().subscribe((articles: Array<Article>) => {
      this.articlesList = articles;
      this.articleService.sortArticlesByViews(this.articlesList);
    });
  }

  ngOnInit() {

  }

}
