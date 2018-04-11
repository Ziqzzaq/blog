import { AddUserComponent } from './add-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddUserRoutingModule } from './add-user.routing.module';


@NgModule({
  imports: [
    BrowserModule,
    AddUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddUserComponent
  ],
  providers: []
})
export class AddUserModule {}
