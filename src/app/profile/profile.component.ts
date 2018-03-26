import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userName = this.authService.user.displayName;
  userEmail = this.authService.user.email;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  updateName(formName: NgForm) {
    this.authService.updateName(formName.value.name);
  }

  updateEmail(formEmail: NgForm) {
    this.authService.updateEmail(formEmail.value.email);
  }

  updatePassword(formPassword: NgForm) {
    this.authService.updatePassword(formPassword.value.password);
  }

}
