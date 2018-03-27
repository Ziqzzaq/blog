import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {

  articlesList: Array<Article> = [];
  p: number = 1;

  constructor(private articleService: ArticleService, protected storage: AsyncLocalStorage, public authService: AuthService) {
    this.articleService.getArticlesListObs().subscribe((articles: Array<Article>) => {
      this.articlesList = articles;
      this.articlesList.forEach((value: Article) => {
        value.created = new Date(value.created);
        console.log(value.created);
      });
      this.articlesList.sort((a: Article, b: Article) => {
        return a.created.getTime() - b.created.getTime();

      });
      this.storage.setItem('articles', articles).subscribe(() => {
      }, () => {
      });
      //console.log(this.articlesList);
    });
  }

  ngOnInit() {

  }


  edit(article: Article) {
    this.articleService.saveLocalArticle(article);
  }

  delete(article: Article) {
    this.articleService.delete(article);
  }
}
