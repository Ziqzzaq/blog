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
  private articleObs: Subject<Article>;
  constructor(private httpService: HttpService, protected storage: AsyncLocalStorage, private router: Router) {
    this.articleObs = new Subject<Article>();
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
      this.router.navigate(['./admin/addArticle']);
    }, (e) => {
      alert("Edycja artykułu niedostępna");
    });
  }

  getArticle(): Observable<Article> {
    return this.articleObs.asObservable();
  }

  setArticle(artId): void {
    this.httpService.getArticleById(artId).subscribe(article => {
    this.articleObs.next(article);
    })
  }

  getArticlesListObs(): Observable<Array<Article>> {
    return this.articlesListObs.asObservable();
  }

  delete(artId) {
    this.httpService.deleteArticle(artId);
  }

}
