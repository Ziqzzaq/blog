import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<any[]>;

  constructor(private authService: AuthService) { }

ngOnInit() {
  this.users = this.authService.getUsers();
}
  online() {
   this.authService.setOnline();
  }
  away() {
    this.authService.setAway();
  }
  offline() {
    this.authService.setOffline();
  }
}
