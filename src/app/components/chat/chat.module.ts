import { UserStatusComponent } from './user-status/user-status.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat.routing.module';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  imports: [
    BrowserModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  declarations: [
    UsersListComponent,
    UserStatusComponent
  ],
  providers: []
})
export class ChatModule {}
