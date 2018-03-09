import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  content:string = '';
  titleAlert:string = 'This field is required & You must specify a content more than 3 characters.';

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router) {

    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
      'content': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    })

  }

  ngOnInit() {
  }

  createArticle(): Article {
    const article = { name: this.rForm.get('name').value, userId: '2', description: this.rForm.get('description').value, content: this.rForm.get('content').value, created: new Date().toLocaleString()};
    console.log(article);
    return article;
  }


  addPost() {
    const article = this.createArticle();
    this.articleService.add(article);
    this.router.navigate(['./showArticles']);
  }

}
