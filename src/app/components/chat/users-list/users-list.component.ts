import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<any[]>;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.users = this.authService.getUsers();
    this.authService.getUsers().subscribe( value => {
      console.log(value);
    });
  }


  online() {
    this.authService.updateStatus('online');
  }

  away() {
    this.authService.updateStatus('away');
  }

  offline() {
    this.authService.updateStatus('offline');
  }
}
