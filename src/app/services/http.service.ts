import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/ziqzzaqdb/collections/articles';
  readonly param = new HttpParams().set('apiKey', 'lxWbkgTjMqZI3DFCIqMZVJ3J6BWcpZRs');


  constructor(private http: HttpClient) {
    this.getArticles();
  }


  getArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.URL_DB, { params: this.param });
  }

  saveArticles(article: Article) {
    this.http.post(this.URL_DB, article, { params: this.param }).subscribe(data => {
      console.log(data);
    });
  }
}
