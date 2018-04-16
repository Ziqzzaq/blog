import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile.routing.module';
import {ProfileService} from '../../services/profile.service';

@NgModule({
  imports: [
    BrowserModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileService]
})
export class ProfileModule {}
