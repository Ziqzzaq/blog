import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Article } from '../../models/article';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { HttpService } from '../../services/http.service';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowArticleComponent implements OnInit, OnDestroy {
  article: Article = {
    _id: { $oid: "" },
    userName: "",
    name: "",
    description: "",
    content: "",
    views: 0,
    created: null
  };

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private httpService: HttpService, private titleService: Title) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: Params) => {
      this.articleService.setArticle(param.get("id"));
    });
    this.articleService.getArticle().subscribe((article: Article) => {
      this.article = article;
      this.titleService.setTitle(article.name);
    });
  }

  ngOnDestroy(): void {
    this.articleService.saveViews(this.article, this.article._id.$oid);
  }

}
