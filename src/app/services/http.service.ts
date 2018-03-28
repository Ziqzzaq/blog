import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Observable';
import { Routes, Router } from '@angular/router';

@Injectable()
export class HttpService {


  readonly URL_DB = 'https://api.mlab.com/api/1/databases/ziqzzaqdb/collections/articles';
  readonly param = new HttpParams().set('apiKey', 'aBvH1fu7xyds2qPrYtqVOudRGQjwjMWc');

  id: any;
  constructor(private http: HttpClient, private router: Router) {
    this.getArticles();
  }


  getArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.URL_DB, { params: this.param });
  }

  getArticleById(artId): Observable<Article> {
    const URL_DB = this.URL_DB + "/" + artId;
    return this.http.get<Article>(URL_DB, { params: this.param });
  }

  saveArticles(article: Article) {
    this.http.post(this.URL_DB, article, { params: this.param }).subscribe(data => {
      console.log("save");
      this.router.navigate(['./showArticles']);
      location.reload();
    });
  }

  saveViews(article: Article, artId: string) {
    const URL_DB = this.URL_DB + "/" + artId;
    article.views++;
    this.http.put(URL_DB, article, { params: this.param }).subscribe(data => {
    });
  }

  updateArticle(article: Article, artId: string) {
    const URL_DB = this.URL_DB + "/" + artId;
    console.log(URL_DB);
    console.log(article);
    //console.log("After: " + article._id.$oid);
    this.http.put(URL_DB, article, { params: this.param }).subscribe(data => {
      console.log(data);
      console.log("update");
      this.router.navigate(['./showArticles']);
      location.reload();
    });
  }

  deleteArticle(artId) {
    const URL_DB = this.URL_DB + "/" + artId;
    this.http.delete(URL_DB, { params: this.param }).subscribe(data => {
      console.log(data);
      console.log("delete");
      location.reload();
    });
  }
}
