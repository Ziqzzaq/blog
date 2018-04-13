import { ChatMessageComponent } from './chat-message/chat-message.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardsService} from '../../auth/auth-guards.service';


const ChatRoutes: Routes = [
    { path: 'chat', component: ChatMessageComponent, canActivate:  [AuthGuardsService] }
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

