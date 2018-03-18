import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AddUserComponent } from './add-user/add-user.component'
import { ProfileComponent } from './profile/profile.component'
import { AddArticleComponent } from './add-article/add-article.component'
import { AdminRoutingModule } from './admin.routing.module'
import { AdminComponent } from './admin.component'
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg'

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    AddUserComponent,
    AdminComponent,
    ProfileComponent,
    AddArticleComponent
  ],
  providers: []
})
export class AdminModule {}

