import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {NgForm} from '@angular/forms';
import {ProfileService} from '../../services/profile.service';
import {Upload} from '../../models/upload';
import {Observable} from 'rxjs/Observable';

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
  photoName: string;
  photoURL = '../assets/default-user.png';

  constructor(private authService: AuthService, private profileService: ProfileService) {
    if (this.authService.user !== null) {
      this.profileService.getPhoto().subscribe(value => {
        console.log(value[0] !== undefined);
        if (value[0] !== undefined) {
          if (value.length === 0 || value.length === 1) {
            this.photoURL = value[0];
          } else {
            this.photoName = value[0];
            this.photoURL = value[1];
          }
        }
      });
    }
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
    if (this.photoName !== undefined) {
      this.profileService.deletePhoto(this.photoName);
    }
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.profileService.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

}
