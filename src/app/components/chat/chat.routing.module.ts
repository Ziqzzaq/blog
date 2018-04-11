import { ChatMessageComponent } from './chat-message/chat-message.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ChatRoutes: Routes = [
    { path: 'chat', component: ChatMessageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ChatRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChatRoutingModule { }

