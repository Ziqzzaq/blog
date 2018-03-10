import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { Routes, Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {


  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  content: string = '';
  titleAlert: string = 'This field is required & You must specify a content more than 3 characters.';
  artName: string = '';
  artDescription: string = '';
  artContent: string = '';
  artId: any;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router, protected storage: AsyncLocalStorage) {

    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
      'content': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    })

    this.getArticle();
  }

  ngOnInit() {
  }

  createArticle(): Article {
      const article = { name: this.rForm.get('name').value, userId: '2', description: this.rForm.get('description').value, content: this.rForm.get('content').value, created: new Date().toLocaleString() };
      return article;
    }

  getArticle() {
    this.storage.getItem('article').subscribe((article: Article) => {
      this.input(article);
    }, () => {
    });
  }

  addArticle() {
    const article = this.createArticle();
    console.log(this.artName != '');
    if (this.artName == '') {
      this.articleService.add(article);
    } else {
      this.articleService.update(article, this.artId);
    }
    this.router.navigate(['./showArticles']);
    this.storage.clear().subscribe(() => {}, () => {});
  }
  input(article: Article) {
    if (article != null) {
      this.artName = article.name;
      this.artDescription = article.description;
      this.artContent = article.content;
      this.artId = article._id.$oid;
      //console.log('works!');
    //console.log(this.artDescription)
    //console.log(this.artContent)
  }

}
}
