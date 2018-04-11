import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  addUser(formData: NgForm) {
    this.authService.addUser(
      formData.value.email,
      formData.value.password,
      formData.value.name
    );
  }
}
