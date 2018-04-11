import { AddArticleComponent } from './add-article.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddArticleRoutingModule } from './add-article.routing.module';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  imports: [
    BrowserModule,
    AddArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  declarations: [
    AddArticleComponent
  ],
  providers: []
})
export class AddArticleModule {}
