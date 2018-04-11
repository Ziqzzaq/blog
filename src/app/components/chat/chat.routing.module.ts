import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ChatRoutes: Routes = [
    { path: 'chat', component: UsersListComponent }
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

