import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  articlesList: Array<Article> = [];

  constructor(private articleService: ArticleService) {
    this.articleService.getArticlesListObs().subscribe((articles: Array<Article>) => {
      this.articleService.sortArticlesByViews(articles);
      articles.forEach((article: Article) => {
        this.articlesList.push(article);
      });
    });
  }

  ngOnInit() {

  }

}
