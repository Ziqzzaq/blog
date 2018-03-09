import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Article } from '../models/article';
import { HttpService } from './http.service';

@Injectable()
export class ArticleService {
  private articlesListObs = new BehaviorSubject<Array<Article>>([]);

  constructor(private httpService: HttpService) {
    this.init();
  }

  init() {
    this.httpService.getArticles().subscribe(list => {
      this.articlesListObs.next(list);
    });
  }

  add(article: Article) {
    this.httpService.saveArticles(article);
  }

  getArticlesListObs(): Observable<Array<Article>> {
    return this.articlesListObs.asObservable();
  }
}
