import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';
import {ProfileService} from '../../services/profile.service';
import {Upload} from '../../models/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userName = this.authService.user.displayName;
  userEmail = this.authService.user.email;
  selectedFiles: FileList | null;
  currentUpload: Upload;

  constructor(private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit() {

  }

  updateName(formName: NgForm) {
    this.profileService.updateName(formName.value.name);
  }

  updateEmail(formEmail: NgForm) {
    this.profileService.updateEmail(formEmail.value.email);
  }

  updatePassword(formPassword: NgForm) {
    this.profileService.updatePassword(formPassword.value.password);
  }

  detectPhoto($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  updatePhoto() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.profileService.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

}
