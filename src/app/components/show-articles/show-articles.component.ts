import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { AuthService } from '../../auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {
  articlesList: Array<Article> = [];
  p = 1;
  showSpinner = true;

  constructor(
    private articleService: ArticleService,
    protected storage: AsyncLocalStorage,
    public authService: AuthService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Blog o programowaniu');
    this.articleService
      .getArticlesListObs()
      .subscribe((articles: Array<Article>) => {
        this.articleService.preparationArticlesList(articles);
        articles.forEach((article: Article) => {
          this.articlesList.push(article);
          this.showSpinner = false;
        });
      });
  }

  ngOnInit() {}

  edit(article: Article) {
    this.articleService.saveLocalArticle(article);
  }

  delete(article: Article) {
    this.articleService.delete(article);
  }
}
