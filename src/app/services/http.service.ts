import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/ziqzzaqdb/collections/articles';
  readonly param = new HttpParams().set('apiKey', 'aBvH1fu7xyds2qPrYtqVOudRGQjwjMWc');


  constructor(private http: HttpClient) {
    this.getArticles();
  }


  getArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.URL_DB, { params: this.param });
  }

  saveArticles(article: Article) {
    this.http.post(this.URL_DB, article, { params: this.param }).subscribe(data => {
      console.log("save");
    });
  }
  updateArticle(article: Article, artId: string){
    const URL_DB = this.URL_DB + "/" + artId;
    console.log(URL_DB);
    console.log(article);
    //console.log("After: " + article._id.$oid);
    this.http.put(URL_DB, article, { params: this.param }).subscribe(data => {
      console.log(data);
      console.log("update");
    });
  }
}
