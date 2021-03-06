import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit, OnDestroy {
  rForm: FormGroup;
  description = '';
  name = '';
  content  = '';
  titleAlert = 'This field is required & You must specify a content more than 3 characters.';

  artName = '';
  artDescription = '';
  artContent = '';
  artId: any;
  userName: string = this.authService.user.displayName;

  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router,
    protected storage: AsyncLocalStorage,
    private authService: AuthService
  ) {
    this.rForm = fb.group({
      name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      description: [
        null,
        Validators.compose([Validators.required, Validators.minLength(10)])
      ],
      content: [null]
    });
    this.getArticle();
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.storage.clear().subscribe(() => {}, () => {});
  }

  createArticle(): Article {
    const article = {
      name: this.rForm.get('name').value,
      userName: this.userName,
      description: this.rForm.get('description').value,
      content: this.rForm.get('content').value,
      views: 0,
      created: new Date()
    };
    return article;
  }

  getArticle() {
    this.storage.getItem('article').subscribe(
      (article: Article) => {
        this.input(article);
      },
      () => {}
    );
  }

  addArticle() {
    const article = this.createArticle();
    console.log(this.artName !== '');
    if (this.artName === '') {
      this.articleService.add(article);
    } else {
      this.articleService.update(article, this.artId);
    }
    this.router.navigate(['./articles']);
  }
  input(article: Article) {
    if (article != null) {
      this.artName = article.name;
      this.artDescription = article.description;
      this.artContent = article.content;
      this.artId = article._id.$oid;
      this.userName = article.userName;
    }
  }
}
