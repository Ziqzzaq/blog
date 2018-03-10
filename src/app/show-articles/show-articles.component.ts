import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit{

  articlesList: Array<Article> = [];

  constructor(private articleService: ArticleService) {
    this.articleService.getArticlesListObs().subscribe((articles: Array<Article>) => {
      this.articlesList = articles;
      //console.log(this.articlesList);
    });
  }

  ngOnInit(){
  }

  edit(article: Article) {
    this.articleService.saveLocalArticle(article);
  }
}
