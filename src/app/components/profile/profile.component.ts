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
  photoName;
  photoKey;

  constructor(private authService: AuthService, private profileService: ProfileService) {
    this.profileService.getPhoto().subscribe( value => {
         console.log(value[0] !== undefined);
         if (value[0] !== undefined) {
           this.photoName = value[0].name;
           this.photoKey = value[0].$key;
           console.log(this.photoKey);
         }
    });
  }

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
    if ((this.photoName !== undefined) && (this.photoKey !== undefined)) {
      this.profileService.deletePhoto(this.photoName, this.photoKey);
    }
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.profileService.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

  deletePhoto() {
    this.profileService.deleteFileData(this.photoKey);
  }

}
