import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { HttpService } from '../../services/http.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowArticleComponent implements OnInit {
  article: Article = {
    _id: {$oid: ""},
    userId: "",
    name: "",
    description: "",
    content: "",
    created: ""
  };

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: Params) => {
      this.articleService.setArticle(param.get("id"));
    });
    this.articleService.getArticle().subscribe((article: Article
    ) => {
      this.article = article;
      console.log(article.name);
    })
  }
  

}
