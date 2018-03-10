import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Article } from '../models/article';
import { HttpService } from './http.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Routes, Router } from '@angular/router';

@Injectable()
export class ArticleService {
  private articlesListObs = new BehaviorSubject<Array<Article>>([]);

  constructor(private httpService: HttpService, protected storage: AsyncLocalStorage, private router: Router) {
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

  update(article: Article, artId:string){
    this.httpService.updateArticle(article, artId);
    console.log("In article service"+article);
  }

  saveLocalArticle(article: Article) {
    this.storage.setItem('article',article).subscribe((e) => {
      this.router.navigate(['./addArticle']);
    }, (e) => {
      alert("Edycja artykułu niedostępna");
    });
  }

  getArticlesListObs(): Observable<Array<Article>> {
    return this.articlesListObs.asObservable();
  }
}
