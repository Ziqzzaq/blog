import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {}
