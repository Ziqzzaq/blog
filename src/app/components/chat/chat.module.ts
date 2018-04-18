import { ChatMessageComponent } from './chat-message/chat-message.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat.routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { AngularFireModule } from 'angularfire2';
import { OrderModule } from 'ngx-order-pipe';
import { ShowArticlesModule } from '../show-articles/show-articles.module';
import { TypingAnimationComponent } from '../typing-animation/typing-animation.component';

@NgModule({
  imports: [
    BrowserModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    AngularFireModule,
    OrderModule,
    ShowArticlesModule
  ],
  declarations: [
    UsersListComponent,
    UserStatusComponent,
    ChatMessageComponent,
    TypingAnimationComponent
  ],
  providers: []
})
export class ChatModule {}
